'use strict';

var dotProduct = require('./cartesianProduct');
var combine = require('./combine');
var filter = require('./filter');

var prod = dotProduct(
        ['@', '+'],
        [' ', '$', '*', '.'],
        [' ', '#', '$', '*', '.']);
var combined = combine(prod);
var filtered = filter(combined);

console.log(filtered);
console.log('Number of moves: ' + filtered.length);
