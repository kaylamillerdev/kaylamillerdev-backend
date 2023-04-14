const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    urlName: {
        type: String
    },
    description: {
        type: String
    },
    languages: {
        type: Array
    },
    githubUrl: {
        type: String
    },
    demoUrl: {
        type: String
    },
    image: {
        type: String
    },
    features: {
        type: Array
    },
    featured: {
        type: Boolean,
        default: false
    },
    ribbonText: {
        type: String
    }
},
{collection: "PortfolioProjects"});

module.exports = mongoose.model('Project', projectSchema);