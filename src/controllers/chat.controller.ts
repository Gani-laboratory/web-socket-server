import { Router } from "express"
import { Server } from "socket.io"
import { Recipients } from "../interfaces/chat.interface"

const router = Router()

router.get("/", (req, res) => {
  // const io = (req as IRequest).io
  res.json({ message: "Welcome to my backend!" })
})

export const chatNsp = (Server: Server) => {
  const chatNsp = Server.of("/chat")
  chatNsp.on("connection", (socket) => {
    const id = socket.handshake.query.id
    socket.join(id!)
    socket.on("send", ({ recipients, text, username }: Recipients) => {
      recipients.forEach((recipient) => {
        const newRecipients = recipients.filter((r) => r !== recipient)
        newRecipients.push(id! as string)
        socket.broadcast.to(recipient).emit("receive", {
          recipients: newRecipients,
          sender: id,
          text,
          username,
        })
      })
    })
  })
  return "chat"
}

export default router
