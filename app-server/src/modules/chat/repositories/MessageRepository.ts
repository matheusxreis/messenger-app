import { Message } from "../entities/Message";


export class MessageRepository{


    messages = new Array<Message>()


    addNewMessage(userId: string, message:string){
        const newMessage = new Message(userId, message)

        this.messages.push(newMessage)
    }

    listAllMessages():Message[]{
        return this.messages
    }




}


