var express = require('express');
var router = express.Router();
const cors = require('cors');
Project = require('../models/project.model');
Bio = require('../models/aboutMe.model');

router.get('/', function(req, res, next){
  res.render('index', {title: "root"})
});

/* View the projects in the database */
router.get('/featured', function(req, res, next){
  Project.find({featured: true})
  .then(results => {
    if(results) {
      res.json(results);
    }
  })
  .catch(err => console.log(err));
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
router.get('/projectList', function(req, res, next){
  Project.find({})
  .then(projectList => {
    if(projectList){
      res.json(projectList)
    }
  }).catch(err => console.log(err));
});

  // view the bio
  router.get('/about', function(req, res, next){
    Bio.find({})
    .then(bio => {
      if(bio) {
        res.json(bio)
      }
    }).catch(err => console.log(err));
  });

  router.get('/projects/:urlName', cors(), function(req, res, next){
    Project.find({urlName: req.params.urlName})
    .then(project => {
      if(project){
        res.json(project);
      }
    }).catch(err => console.log(err));
  })

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
