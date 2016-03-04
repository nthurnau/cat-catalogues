var express = require('express')
var mongoose = require('mongoose')
var logger = require('morgan')
var bodyParser = require('body-parser')

var app = express()
var Cat = require('./models/Cat.js')
var owner = require('./models/Owner.js')

mongoose.connect('mongodb://localhost/mongoose-relationships', function(err){
  if (err)
    throw err
    console.log("Your server is running MongoDB(mongoose-relationships), weeee!")
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req,res){
	res.send('Home!')
})




app.listen(3000, function(){
  console.log("Your server is listening on port 3000, so exciting!!!!!!")
})
