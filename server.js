import express from "express"
import { handler } from "./frontend/build/handler.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || "localhost"

app.use(handler)

app.listen(PORT, HOST, () => {
  console.log(`Server Running At http://${HOST}:${PORT}`)
})
