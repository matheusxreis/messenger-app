import { io } from "socket.io-client"

const ws = io("192.168.1.190:3333")

export { ws }