import { v4 as uuid} from "uuid"

export class Message {

readonly  id: string = uuid()
readonly userId: string;
readonly message: string;
readonly timestamp: Date = new Date()


constructor(userId: string, message: string){
    this.userId = userId
    this.message = message
}   

}