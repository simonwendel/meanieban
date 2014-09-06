/*
 * Node module to create the levelData value for the ng-app.
 */
var fs = require('fs');
var parser = require('./textParser');

var fileToOpen = process.argv[2];

var data = fs.readFileSync(fileToOpen, 'utf8');
var levels = parser.parseText(data);

console.log(levels);
