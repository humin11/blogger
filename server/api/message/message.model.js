'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  name: String,
  info: String,
  create_at: Date,
  active: Boolean
});

module.exports = mongoose.model('Message', MessageSchema);