import { User } from "../entities/User";


const users = new Array<User>()
export class UserRepository {

    authenticateNewUser(name:string, email:string): User{
        const user = new User(name, email)
       
        users.push(
            user
        )

        return user
    }

    desauthenticateUser(id:string){

        return users.filter((user:User)=>user.id !== id)
    }

    findByEmail(email:string):User|undefined{
        return users.find((x:User)=>x.email === email)
    }

    listAllUsers():User[]{
        return users;
    }

    


}