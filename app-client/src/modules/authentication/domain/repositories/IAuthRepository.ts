export interface IAuthRepository {

    userAuthenticate(name: string, email:string):void;
    userDisconnect(id:string):void;
    listAllUsers(): any;

}