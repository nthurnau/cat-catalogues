var mongoose = require('mongoose')
var express = require('express')

var ownerSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  address: String,
  cats: [catSchema]
})

var Owner = mongoose.model('Album', ownerchema)

module.exports = Owner
