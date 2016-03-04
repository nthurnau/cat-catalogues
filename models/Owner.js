var mongoose = require('mongoose')
var express = require('express')
var Schema = mongoose.Schema

var ownerSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  address: String,
  cats: [{type: Schema.Types.ObjectId, ref: 'Cat'}] // everything that goes in here is required by the cat schema
})

var Owner = mongoose.model('Owner', ownerSchema)

module.exports = Owner
