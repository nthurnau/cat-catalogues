//SETUP
var express = require('express')
var cat = express.Router()
var request = require('request')

//CAT ROUTES

//index -- will be accessed through localhost:3000/cats/
cat.get('/', function(err){
  if(err) throw err
  
})

//show -- will be accessed through localhost:3000/cats/:id
cat.get('/:id')

//create
cat.post


//edit
cat.patch


//delete
cat.delete


module.exports = cat
