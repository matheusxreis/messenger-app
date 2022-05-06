import { Message } from "../entities/Message";


const messages = new Array<Message>()
export class MessageRepository{

    addNewMessage(userId: string, message:string){
        const newMessage = new Message(userId, message)

        messages.push(newMessage)
    }

    listAllMessages():Message[]{
        return messages
    }




}


