const mongoose = require('mongoose');

var aboutMeSchema = new mongoose.Schema({
    header: {
        type: {type:String}
    },
    bio: {
        type: {type:String}
    }
});