import React, { useReducer, useState } from "react";
import { Socket } from "socket.io-client";
import { UserEntity } from "../../domain/entities/user.entity";
import { IAuthRepository } from "../../domain/repositories/IAuthRepository";

export function useAuthRepository(socket: React.MutableRefObject<Socket>):IAuthRepository{
    const [user, setUser] = useState<UserEntity>({} as UserEntity);

    const [{ data }, dispatch] = useReducer((state: any, action: {type: string, payload: any}) => {
        if(action.type === "GET"){
            state.data = action.payload.data;
        }
        return state
    }, {data: []});

    function userAuthenticate(name: string, email: string){
        socket.current.emit("authenticate", {name, email});
        getUserAuthenticate();
    }

    function saveUser(data: UserEntity){
        console.log("ARGUMENTO: ")
        console.log(data);

        setUser(data);
        console.log("USER STATE: ")
        console.log(user);
    }
    function getUserAuthenticate(){
        socket.current.on("user_authenticated", (args: UserEntity) => saveUser(args));
    }

    function userDisconnect(id: string){
        socket.current.emit("disconnect", id);
    }
    
    async function listAllUsers(){
        socket.current.on("get_users", async (data) => {
         dispatch({type: "GET", payload: {data: data}});
        });
        setTimeout(() => {
        }, 1000);
        return data;
    }

    return {
        userAuthenticate,
        userDisconnect,
        listAllUsers
    }
}