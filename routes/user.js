const express = require('express');
const multer = require('multer');
const path = require('path')

const { createData,showData } = require('../controllers/userCrontorular');

const router = express.Router();

//multer require
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
            
        if (file.mimetype=="image/jpg"||file.mimetype=="image/png"||file.mimetype=="image/jpeg"||file.mimetype=="image/gif"||file.mimetype=="image/webp") {
            cb(null, path.join(__dirname,"../public/assets/img/"));
        } else {
            console.log("invalide Image");
        }
    },

    filename: (req, file, cb) => {
        cb(null, Date.now()+ '_' +file.originalname);
    }
});
//photo storage
const student_photo = multer({
    storage
}).array('student_photo');



router.get("/", createData);
router.post("/",student_photo,showData);

module.exports = router;