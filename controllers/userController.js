const  express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/',(req, res) => {
    res.render("user/form",{
        viewTitle : "User Information"
    });
});


router.use(express.static(__dirname+"./public/"));


var Storage= multer.diskStorage({
  destination:"./public/uploads/",
  filename: (req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({
  storage:Storage
}).single('Image');


/* GET home page. */
router.post('/upload', upload,function(req, res, next) {
  var imageFile =req.file.filename;
 var success =req.file.filename+ " uploaded successfully";

 });

router.post('/',upload,(req, res) => {
    insertRecord(req, res); 
});

function insertRecord(req, res) {
    var user = new User();
    user.FirstName = req.body.FirstName;
    user.LastName = req.body.LastName;
    user.EmailId = req.body.EmailId;
    user.PhoneNumber = req.body.PhoneNumber;
    user.Image = req.file.filename;
    user.save((err, doc) => {
        if(!err)
            res.redirect('user/list');
        else {
            
                console.log('Error during record insertion : ' +err);
        }
    });
}

router.get('/list', (req, res) => {
    res.json('Successfully ');
});


module.exports = router;