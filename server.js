//**************required packages for the entire app***********************
var express = require('express')
var mongoose = require('mongoose')
var logger = require('morgan')
var bodyParser = require('body-parser')
var path = require('path')
//*********************app is an instance of express **********************
var app = express()
//*************************requires routes *********************************
var catRoutes = require('./routes/cats.js')
var ownerRoutes = require('./routes/owners.js')

//********************requires the models for Cat and Owner
var Cat = require('./models/Cat.js')
var Owner = require('./models/Owner.js')

//********************connects the app to MongoDB ***********************
mongoose.connect('mongodb://localhost/cat_catalogue', function(err){
  if (err)
    throw err
    console.log("Your server is running MongoDB(cat_catalogue), meow.")
})

//********************asks the app to use the middleware packages*********
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//without the /app/public the static files don't render, like the css ones!
app.use(express.static(path.join(__dirname, '/app/public')))
//******************** asks the app to use the routes ********************
app.use('/cats', catRoutes)
app.use('/owners', ownerRoutes)

//*******************route for the home page******************************
// API Routes:
app.get('/api', function(req,res){
	res.json({message: "API Base Route. These are not the droids you are looking for."})
})

// All other GETs lead to index.html
app.get('/', function(req,res){
	res.sendFile(__dirname + '/app/public/index.html');
})


//**************tells the app to listen and connect to port 3000**********
app.listen(3000, function(){
  console.log("Your server is listening on port 3000")
})
