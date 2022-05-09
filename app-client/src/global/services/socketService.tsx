

import React, {useRef, useEffect} from "react"
import { io, Socket } from "socket.io-client"

export function socketService(){


    const socket = useRef<Socket>();

  useEffect(()=>{
    initialize()
  }, [])

    function initialize(){

      socket.current = io("http://192.168.1.190:3333/chat")  

      socket.current.on("connect", () => {})
  
    }

    function getSocket() {
      return socket;
    }

    return {
        initialize,
        getSocket
    }

}