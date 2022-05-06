import { Message } from "./modules/chat/entities/Message";
import { User } from "./modules/chat/entities/User";
import { MessageRepository } from "./modules/chat/repositories/MessageRepository";
import { UserRepository } from "./modules/chat/repositories/UserRepository";


interface Iauthenticate {
    name:string,
    email:string
}

interface IsendMessages {
    userId: string,
    message: string
}

export class Connection {
    
 

    constructor(private io: any, 
            private socket:any,
            private userRepository: UserRepository,
            private messageRepository: MessageRepository){

        this.socket = socket;
        this.io = io;
        




       
        socket.on("disconnect", (id: string)=>this.disconnect(id))
        socket.on("authenticate", ({name, email}: Iauthenticate)=>this.authenticate({name, email}))
        socket.on("set_messages", ({userId, message}: IsendMessages)=>this.setMessages({userId, message}))
            
        socket.emit("get_messages", this.getMessages())
        socket.emit("get_users", this.getUsers())
        
    }

    setMessages({userId, message}: IsendMessages){
        this.messageRepository.addNewMessage(userId, message)
    }

    getMessages(): Message[]{

       return this.messageRepository.listAllMessages()
        
    }

    getUsers(): User[]{
        return this.userRepository.listAllUsers()
    }

    disconnect(id:string){   
        this.userRepository.desauthenticateUser(id)
    }

    authenticate({name, email}: Iauthenticate){
        console.log(name, email)

        const userAlreadyExist = this.userRepository.findByEmail(email)

        if(userAlreadyExist?.email === email || userAlreadyExist?.name === name){
            return this.socket.emit("connect_failed", {error: "Username or email already connected!"})
        }

        const user = this.userRepository.authenticateNewUser(name, email);

        return this.socket.emit("user_authenticated", user)
    }

    


}