import React, { useState } from "react";
import { Socket } from "socket.io-client";
import { IAuthRepository } from "../../domain/repositories/IAuthRepository";




export function useAuthRepository(socket: React.MutableRefObject<Socket>):IAuthRepository{


   

    const [users, setUsers] = useState<UserEntity[]>([])

    socket.current.on("get_users", (user) => {
        setUsers([...users, user])
        console.log("funcionou")
      })

    function userAuthenticate(name: string, email: string){

        const user = socket.current.emit("authenticate", {name, email});

        return user
    }

    function userDisconnect(id: string){

        socket.current.emit("disconnect", id)

    }

    function listAllUsers(): UserEntity[]{
        return users
    }


    return {
        userAuthenticate,
        userDisconnect,
        listAllUsers
    }



}