/**
 * Our Schema for Maps
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Map Schema
var mapSchema = new Schema({
});

// The primary map model
var Map = mongoose.model('Map', mapSchema);

module.exports = Map;
