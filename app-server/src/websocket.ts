import { io } from "./http";

io.on("connection", (socket:any)=>{
    console.log(socket.id)
    socket.on("oi", (args: any)=>{
        console.log(args)
    })


    
    
})


