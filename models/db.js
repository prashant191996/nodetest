const  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UserDB',{ useNewUrlParser: true }, (err) => {
     if (!err) { console.log('MongoDB Connection Succeeded')}
     else { console.log('Error in DB connetion:' + err)}
});  
   
 require('./user.model');