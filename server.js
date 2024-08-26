import dotenv from "dotenv"
import crypto from "crypto"
import express from "express"
import expressWs from "express-ws"

import * as root from "./routes/root.js";
import * as admin from "./routes/admin.js";
import { handler } from "./frontend/build/handler.js"

dotenv.config()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || "localhost"

const SECRET = process.env.SECRET || crypto.randomBytes(64).toString('hex');

const app = express()
expressWs(app)

app.use(handler)
app.use("/", root.router)
app.use("/admin", admin.router)

app.listen(PORT, HOST, () => {
  console.log(`Server Running At http://${HOST}:${PORT}`)
  console.log(`Admin Auth Secret: ${SECRET}`)
})
