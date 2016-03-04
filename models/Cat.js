var mongoose = require('mongoose')
var Schema = mongoose.Schema

var catSchema = Schema({
  _owner: {type: Schema.Types.ObjectId, ref: 'Owner'},
  name: {type: String, required: true},
  color: String,
  age: Number
})

var Cat = mongoose.model('Cat', catSchema)

module.exports = Cat
