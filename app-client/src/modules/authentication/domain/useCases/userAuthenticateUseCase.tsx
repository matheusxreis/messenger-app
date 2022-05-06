
import { Alert } from 'react-native'
import { IAuthRepository} from '../repositories/IAuthRepository'

export function userAuthenticateUseCase(authRepository: IAuthRepository){


   function execute(name: string, email: string){

        if(!email || !name){
            return Alert.alert("Please, put your name and email.")
        }

        authRepository.userAuthenticate(name, email)
        
    }


    return {
        execute
    }
}