import { User } from "../entities/User";


export class UserRepository {


    users = new Array<User>()


    authenticateNewUser(name:string, email:string): User{
        const user = new User(name, email)
        console.log(user)
        this.users.push(
            user
        )

        return user
    }

    desauthenticateUser(id:string){

        return this.users.filter((user:User)=>user.id !== id)
    }

    findByEmail(email:string):User|undefined{
        return this.users.find((x:User)=>x.email === email)
    }

    


}