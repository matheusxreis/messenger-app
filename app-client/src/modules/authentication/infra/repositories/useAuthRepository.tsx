import React, { useReducer, useState } from "react";
import { Socket } from "socket.io-client";
import { UserEntity } from "../../domain/entities/user.entity";
import { IAuthRepository } from "../../domain/repositories/IAuthRepository";




export function useAuthRepository(socket: React.MutableRefObject<Socket>):IAuthRepository{
    
    
    const [{ data }, dispatch] = useReducer((state, action) => {
        if(action.type === "GET"){
            state.data = action.payload.data;
        }
    
        return state
    }, {data: []})

    // socket?.current?.on("get_users", (user) => {
        //     setUsersX(user)
        //     console.log("USERS ARRAY", usersX)
        //     console.log("funcionou")
        //     console.log(user)
        //     console.log("USERS REPO", usersX)
        // })

    function userAuthenticate(name: string, email: string){

        const user = socket.current.emit("authenticate", {name, email});

       
    }

    function userDisconnect(id: string){

        socket.current.emit("disconnect", id)
        
    }
    
    async function listAllUsers(){
         socket.current.on("get_users", async (data) =>  {
            console.log("Data do dispatch", data)
         dispatch({type: "GET", payload: {data: data}})

        })

        setTimeout(() => {
            console.log("Data apos o dispatch", data)

        }, 1000)

        return data
    }


    return {
        userAuthenticate,
        userDisconnect,
        listAllUsers
    }



}