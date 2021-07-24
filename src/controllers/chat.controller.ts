import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
  res.send("chat app route")
})

export default router
