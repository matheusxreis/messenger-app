import http from 'http'
import * as socket from 'socket.io'
import express from 'express'
import { chat } from './websocket'

const app = express()
const httpServer = http.createServer(app)

const io = new socket.Server(httpServer, {
    cors:{
        origin: "*"
    }
})


app.get("/", (req, res)=>{
    return res.send("Oi JoViOli")
})

export {httpServer, io}