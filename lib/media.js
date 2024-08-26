import fs from 'fs'
import { v7 as uuidv7 } from 'uuid'

const mediaFolder = process.env.MEDIA_FOLDER || "./media"

export default class MediaManager {
    

    constructor() {
        if (!fs.existsSync(mediaFolder)) {
            fs.mkdirSync(mediaFolder)
        }
        
        this.fetchMedia()

        console.log(this._mediaList)
    }

    fetchMedia() {
        const mediaFiles = fs.readdirSync(mediaFolder)
        
        // TODO: Remove file extension from media name


    }

    getAllMedia() {
        return this._mediaList
    }
}