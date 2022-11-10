var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
Project = require( '../models/project.model');
Bio = require('../models/aboutMe.model');


/* View the projects in the database */
router.get('/recentProject', function(req, res, next){
  db.collection("PortfolioProjects").find({})
  .sort({$natural:-1}).limit(1)
  .toArray(function(err, results){
    console.log(results);
    res.send(results);
  })
});

/* View the projects in the database */
router.get('/projectsList', function(req, res, next){
  db.collection("PortfolioProjects").find({})
  .toArray(function(err, results){
    console.log(results);
    res.send(results);
  })
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

/*   router.post('/contactForm', function(req, res, next) {
    db.collection("ContactInfo").insertOne({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      message: req.body.message
    }),
    console.log("message saved successfully.")
  }) */

module.exports = router;
