import {httpServer} from './http'
import "./websocket"



httpServer.listen(3333, "192.168.1.190", ()=>{
    console.log("Server is running on 192.168.1.190:3333")
})