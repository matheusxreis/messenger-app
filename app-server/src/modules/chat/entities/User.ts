import { v4 as uuid} from "uuid";

export class User {

    readonly id: string = uuid();
    readonly username: string;
    readonly email: string;

    constructor(name: string, email: string){
        this.username = name
        this.email = email

        
    }
}