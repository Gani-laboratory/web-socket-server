import { Router } from "express"
import { Server } from "socket.io"
import chatEx, { chatNsp } from "./chat.controller"

const router = Router()

router.use("/chat", chatEx)

export const socketNsp = (Server: Server) => {
  return [chatNsp(Server)]
}

export default router
