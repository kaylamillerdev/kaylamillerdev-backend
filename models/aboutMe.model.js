const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    header: {
        type: {type:String}
    },
    bio: {
        type: {type:String}
    }
}, {collection: 'AboutMe'});

module.exports = mongoose.model('user', userSchema);