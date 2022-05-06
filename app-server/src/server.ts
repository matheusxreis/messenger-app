import {httpServer, io} from './http'
import { chat } from './websocket'




//start the http
httpServer.listen(3333, "192.168.1.190", ()=>{
    console.log(`[HTTP] Server is running on 192.168.1.190:3333${'\n'}[WS] Websocket is running on 192.168.1.190:3333/chat`)
})

//start the ws
chat(io)