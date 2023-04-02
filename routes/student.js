const express = require('express');
const path = require('path');
const { getAllStudentData,
        createData,
        showData,
        editData,
        createDatastore,
        deleted,
        updatData
} = require('../controllers/studentController');
    

const multer = require('multer');

const router = express.Router();

//multer

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, path.join(__dirname,"../public/assets/img/"));
    }, filename: (req,file,cb) => {
        cb(null, Date.now()+ '_' +file.originalname);
    }
});

const student_photo = multer({
    storage
}).single('student_photo');


router.get('/', getAllStudentData);
router.post('/create', student_photo, createDatastore);


router.get('/create', createData);
router.get('/:id', showData);

router.get('/deleted/:id', deleted);
router.get('/edit/:id', student_photo, editData);


router.get('/update/:id', updatData);



module.exports = router;