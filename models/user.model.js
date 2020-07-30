
const  mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: 'This field is required.'
    },
    LastName: {
        type: String,
        required: 'This field is required.'
    },
    EmailId: {
        type: String
    },
    PhoneNumber: {
        type: String,
        required: 'This field is required.'
    },
    Image: {
        type: String
    }
   
});

//custom validation for email
userSchema.path('EmailId').validate((val) => {
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


mongoose.model('User',userSchema);