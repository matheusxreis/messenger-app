

import React, {useRef, useEffect} from "react"
import { io, Socket } from "socket.io-client"

export function socketService(){


    const socket = useRef<Socket>();

  useEffect(()=>{
    initialize()
  }, [])

    function initialize(){

      socket.current = io("http://192.168.1.190:3333/chat")  

      socket.current.on("connect", () => {
       
        // socket.current.on("connect_failed", (args) => {
        //   console.log(args)
        // })
      // socket.current.on("get_users", (args) => {
      //     console.log(args)
      //     console.log("funcionou")
      //   })
      })
  
      //socket.current.emit("authenticate", {name: "cgvvrfgd", email: "wewewew@gmail.com"})
    }


    return {
        initialize
    }

}