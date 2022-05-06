import { v4 as uuid} from "uuid";

export class User {

    readonly id: string = uuid();
    readonly name: string;
    readonly email: string;

    constructor(name: string, email: string){
        this.name = name
        this.email = email

        
    }
}