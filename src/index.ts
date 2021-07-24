import { config } from "dotenv"
config()

import express from "express"
import router from "./controller"

const app = express()
app.use(router)

app.listen(process.env.PORT)
