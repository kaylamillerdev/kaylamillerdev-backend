const mongoose = require('mongoose');

var contactMeSchema = new mongoose.Schema({
    firstName: {
        type: {type:String}
    },
    lastName: {
        type: {type:String}
    },
    email: {
        type: {type:String}
    },
    message: {
        type: {type:String}
    }
});

module.exports = mongoose.model('contactMe', contactMeSchema);