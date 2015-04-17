'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogSchema = new Schema({
  title: String,
  content: String,
  image:String,
  create_at: Date,
  active: Boolean
});

module.exports = mongoose.model('Blog', BlogSchema);