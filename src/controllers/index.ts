import { Router } from "express"
import chat from "./chat.controller"

const router = Router()

router.use("/chat", chat)

export default router
