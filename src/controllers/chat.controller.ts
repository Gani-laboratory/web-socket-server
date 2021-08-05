import { Router } from "express"
import { Server } from "socket.io"

const router = Router()

router.get("/", (req, res) => {
  // const io = (req as IRequest).io
  res.json({ message: "Welcome to my backend!" })
})

export const chatNsp = (Server: Server) => {
  const chatNsp = Server.of("/chat")
  chatNsp.on("connection", (socket) => {
    socket.on("send", (args) => {
      socket.emit("receive", args)
    })
  })
  return "chat"
}

export default router
