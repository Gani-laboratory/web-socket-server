import { config } from "dotenv"
config()

import express from "express"
import { Server } from "socket.io"
import http from "http"
import router from "./controllers"
import ioMiddleware from "./middlewares/io.middleware"

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(ioMiddleware(io), router)

server.listen(process.env.PORT, () => {
  console.log(`server listening on http://localhost:${process.env.PORT}`)
})
