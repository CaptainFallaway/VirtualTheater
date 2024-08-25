import dotenv from "dotenv"
import express from "express"
import * as root from "./routes/root.js";
import * as admin from "./routes/admin.js";
import { handler } from "./frontend/build/handler.js"

dotenv.config()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || "localhost"

const app = express()

app.use("/admin", admin.router)
app.use("/", root.router)
app.use(handler)

app.listen(PORT, HOST, () => {
  console.log(`Server Running At http://${HOST}:${PORT}`)
})
