var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
Project = require( '../models/project.model');
Bio = require('../models/aboutMe.model');

/* Render the add or edit project page*/
router.get('/', function(req, res, next) {
  res.render('addOrEdit'), {
    viewTitle: "Insert Project Information"
  }
});

/* Post the project to the database*/
router.post('/', function(req, res, next){
   
  db.collection('PortfolioProjects').insertOne({ projectTitle: req.body.projectTitle,
    projectDescription: req.body.projectDescription,
    projectLanguages: req.body.projectLanguages,
    projectGithubUrl: req.body.projectGithubUrl}),
    console.log("Project was saved to the database successfully")
});

/* View the projects in the database */
router.get('/projectsList', function(req, res, next){
  //var fileName = req.params.projectImage;

  db.collection("PortfolioProjects").find({})
  .toArray(function(err, results){
    console.log(results);
    res.send(results);
  })
  });

  //render the add bio page
  router.get('/bio', function(req, res, next){
    res.render('insertBio'), {
      viewTitle: "Add a bio"
    }
  });

  //Post Bio to the database
  router.post('/bio', function(req, res, next){
    db.collection("AboutMe").insertOne({ 
      header: req.body.header,
      bio: req.body.bio}),
      console.log("Bio was saved to the database successfully")
  });

  // view the bio
  router.get('/findBio', function(req, res, next){
    db.collection("AboutMe").find({})
    .toArray(
      function(err, results) {
        console.log(results);
        res.send(results);
      }
    )
  });

module.exports = router;
