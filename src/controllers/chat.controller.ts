import { Router } from "express"
import { Server } from "socket.io"
import { IRequest } from "../interfaces/req.interface"

const router = Router()

router.get("/", (req, res) => {
  // const io = (req as IRequest).io
  res.json({ message: "Welcome to my backend!" })
})

export const chatNsp = (Server: Server) => {
  const chatNsp = Server.of("/chat")
  chatNsp.on("connection", (socket) => {
    socket.emit("hello", "hello from /chat!")
  })
  return "chat"
}

export default router
