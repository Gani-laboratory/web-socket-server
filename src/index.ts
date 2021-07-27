import { config } from "dotenv"
config()

import express from "express"
import { Server } from "socket.io"
import http from "http"
import router, { socketNsp } from "./controllers"
import ioMiddleware from "./middlewares/io.middleware"

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
})

socketNsp(io).map((val) => console.log(`namespace ${val} has been registered`))
app.use("/socket", ioMiddleware(io), router)

server.listen(process.env.PORT, () => {
  console.log(`server listening on http://localhost:${process.env.PORT}`)
})
