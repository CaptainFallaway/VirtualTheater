import express from "express"
import { handler } from "./frontend/build/handler.js"

const app = express()

const PORT = 3000
const HOST = "localhost"

app.get("/test", (req, res) => {
  res.send("Testing!!!!!")
})

app.use(handler)

app.listen(PORT, HOST, () => {
  console.log(`Server Running At http://${HOST}:${PORT}`)
})
