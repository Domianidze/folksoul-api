import { Request } from "express";
import multer, { FileFilterCallback  } from "multer";

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'storage/img')
    },
    filename: (_, file, cb) => {
        cb(null, `${new Date().toISOString()}-${file.originalname}`)
    }
})

const fileFilter = (_: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if(file.mimetype === 'image/png' ||  file.mimetype === 'images/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, true)
    }
}   

export default multer({storage, fileFilter}).single('avatar')