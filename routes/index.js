var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.connection;
Project = require( '../models/project.model');
Bio = require('../models/aboutMe.model');
const defaultHandler = require('./functions/functions');

router.get('/', function(req, res, next){
  res.render('index', {title: "root"})
});

/* View the projects in the database */
router.get('/recentProject', function(req, res, next){
  db.collection("PortfolioProjects").find({}, {
    sort:{
      $natural:-1
    },
    limit: 1
  })
  .toArray(function(err, results){
    console.log(results);
    res.send(results);
  })
});

/* async function getRecentProject(req, res, next){
  
}

router.get('/recentProject', function(req, res){
  const promise = db.collection("PortfolioProjects").find({}, {
    sort:{ $natural: -1},
    limit: 1
  });
  defaultHandler(promise, res);
}); */

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
