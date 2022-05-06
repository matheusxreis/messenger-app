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
    
    socket;
    io;
    

    constructor(io: any, 
            socket:any,
            private userRepository: UserRepository){

        this.socket = socket;
        this.io = io;
        




       
        socket.on("disconnect", (id: string)=>this.disconnect(id))
        socket.on("authenticate", ({name, email}: Iauthenticate)=>this.authenticate({name, email}))
        socket.on("send_messages", ({userId, message}: IsendMessages)=>this.sendMessages({userId, message}))
       
        
    }

    sendMessages({userId, message}: IsendMessages){}


    getMessages(args:any){

        console.log(this.socket.id)
        console.log(args)
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