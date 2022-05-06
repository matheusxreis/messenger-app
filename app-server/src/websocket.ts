import { io } from "./http";

import socket from "socket.io"
import { Connection } from "./Connection";
import { User } from "./modules/chat/entities/User";
import { UserRepository } from "./modules/chat/repositories/UserRepository";

export function chat(io: socket.Server<any>){

    const users = new Array<User>()
    
    io.of("/chat")
    .on("connection", (socket:any)=>{
       
        new Connection(io, socket, new UserRepository());
})

}


