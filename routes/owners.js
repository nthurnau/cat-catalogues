var express = require('express')
var owner = express.Router()
var Owner = require('../models/Owner.js')

//Owner Routes
//****************************Owner Index************************************
owner.get('/', function(req,res){
  Owner.find({}, function(err, owner){
    if (err) throw err
    res.json(owner)
  })
})
//***************************Post a New Owner********************************
owner.post('/', function(req,res){
  Owner.create(req.body, function(err, owner){
    if (err) throw err
    res.json(owner)
  })
})
//***************************Update An Owner Entry ****************************
owner.patch('/:id', function(req,res){
  Owner.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, function(err, owner){
    if (err) throw err
    res.json(owner)
  })
})
//***************************Delete an Owner********************************
owner.delete('/:id', function(req,res){
  Owner.findOneAndRemove({_id: req.params.id}, function(err){
    if (err) throw err
    res.json({message: "Owner annihilated!!"})
  })
})
//Add a cat to an owner
//Accessed at localhost:3000/owners/:id/cats
owner.post('/:id/cats', function(req, res){
  //find the owner
  Owner.findOne({_id: req.params.id}, function(err, owner){
    if(err) throw err
    //create new cat, and set the _owner property to the owner's id
    var newCat = new Cat(req.body)
    newCat._owner = owner._id
    //save the cat
    newCat.save(function(err){
      if(err) throw err
      //put the cat in the owner object
      owner.cats.push(newCat)
      owner.save(function(err, owner){
        if(err) throw err
        //respond with the owner object
        res.json(owner)
      })
    })
  })
})
//get a single owner with full cats references with cat objects
//Accessed at localhost:3000/owners/:id/
owner.get('/:id', function(req, res){
  Owner.findOne({_id: req.params.id}).populate('cats').exec(function(err, owner){ //this is query population - Mongo population
    if (err) throw err
    res.json(owner)
  })
})

module.exports = owner
