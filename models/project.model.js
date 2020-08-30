const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    projectTitle: {
        type: {type: String}
    },
    projectDescription: {
        type: {type: String}
    },
    projectLanguages: {
        type: {type: String}
    },
    projectGithubUrl: {
        type: {type: String}
    }
});