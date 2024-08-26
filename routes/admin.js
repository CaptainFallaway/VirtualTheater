import express from "express";
import MediaManager from "../lib/media.js";

export const router = express.Router();

const mediaManager = new MediaManager()

router.use((req, res, next) => {
    console.log("Admin Middleware")
    next()
})

router.get("/media", (req, res) => {
    res.json(mediaManager.getAllMedia())
})