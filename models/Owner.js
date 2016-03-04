var mongoose = require('mongoose')
var express = require('express')

var ownerSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  address: String,
  cats: [catSchema] // everything that goes in here is required by the cat schema
})

var Owner = mongoose.model('Album', ownerchema)

module.exports = Owner
