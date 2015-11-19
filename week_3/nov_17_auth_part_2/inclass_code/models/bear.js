var mongoose = require('mongoose');

var bearSchema = new mongoose.Schema({
  name: String,
  wrangler: String,
  wranglerId: String,
  flavor: {type: String, default: 'grizzly'},
  fishPreference: {type: String, default: 'salmons'}
});

module.exports = mongoose.model('Bear', bearSchema);
