var express = require('express')
var owner = express.Router()
var Owner = require('../models/Owner.js')

owner.get('/', function(req,res){
  Owner.find({}, function(err, owner){
    if (err) throw err
    res.json(owner)
  })
})

owner.post('/', function(req,res){
  Owner.create(req.body, function(err, owner){
    if (err) throw err
    res.json(owner)
  })
})

owner.get('/:id', function(req,res){
  Owner.findOne({_id: req.params.id}, function(err, owner){
    if (err) throw err
    res.json(owner)
  })
})

owner.patch('/:id', function(req,res){
  Owner.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, function(err, owner){
    if (err) throw err
    res.json(owner)
  })
})

owner.delete('/:id', function(req,res){
  Owner.findOneAndRemove({_id: req.params.id}, function(err){
    if (err) throw err
    res.json({message: "Owner annihilated!!"})
  })
})

module.exports = owner
