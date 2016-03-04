///////// INITIALIZE REQS /////////
var mongoose = require('mongoose')
var Schema = mongoose.Schema

///////// SPECIFY ATTRIBUTES /////////
var catSchema = Schema({
  _owner: {type: Schema.Types.ObjectId, ref: 'Owner'}, // adds ref to Owner model
  name: {type: String, required: true},
  color: String,
  personality: String
})

///////// SEND CAT TO MODULE EXPORT /////////
var Cat = mongoose.model('Cat', catSchema)

module.exports = Cat
