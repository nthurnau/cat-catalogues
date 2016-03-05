//SETUP
var express = require('express')
var cat = express.Router()
var Cat = require('../models/Cat.js')

//CAT ROUTES

// Index -- shows all cats
// Accessed through localhost:3000/cats
cat.get('/', function(req, res){
  Cat.find({}, function(err, cats){
    if(err) throw err
    res.json(cats)
  })
})

//Show -- shows a specific cat
//Accessed through localhost:3000/cats/:id
cat.get('/:id', function(req, res){
  Cat.findOne({_id: req.params.id}, function(err, cat){
    if(err) throw err
    res.json(cat)
  })
})

//Create -- create a new cat
//Accessed through localhost:3000/cats
cat.post('/', function(req, res){
  Cat.create(req.body, function(err, cat){
    if(err) throw err
    res.json({success: true, cat: cat})
  })
})


//Edit -- edit an existing cat
//Accessed through localhost:3000/cats/:id
cat.patch('/:id', function(req, res){
  Cat.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, function(err, cat){
    if(err) throw err
    res.json({success: true, cat: cat})
  })
})

//Delete -- delete an existing cat
//Accessed through localhost:3000/cats/:id
cat.delete('/:id', function(req, res){
  Cat.findOneAndRemove({_id: req.params.id}, function(err){
    if(err) throw err
    res.json({success: true, message: "Cat deleted."})
  })
})

//Export so accessible to other files
module.exports = cat
