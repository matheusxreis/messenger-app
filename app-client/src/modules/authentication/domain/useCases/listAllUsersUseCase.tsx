import React from "react";
import { IAuthRepository } from "../repositories/IAuthRepository";



export function listAllUsersUseCase(authRepository: IAuthRepository){


    function execute(){
        authRepository.listAllUsers()
    }



    return {
        execute
    }

}
