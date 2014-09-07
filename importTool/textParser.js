/**
 * Created by cpp on 2014-08-25.
 */
var fs = require('fs');
var _ = require('underscore');
var levelParser = require('./levelParser');

module.exports.parseText = function (data) {
    var levelTemplate = loadLevelTemplate();
    var parsed = parseLevels(data, levelTemplate);

    var documentTemplate = loadDocumentTemplate();
    return insertLevels(parsed, documentTemplate);
};

function loadLevelTemplate() {
    var levelTemplateText = fs.readFileSync('templates/individualLevel.tpl', 'utf-8');
    return _.template(levelTemplateText);
}

function parseLevels(data, template) {
    var parsedLevels = levelParser.getLevels(data);
    var finishedLevels = [];
    parsedLevels.forEach(function (parsed, index) {
        var constructedLevel = template({
            first: index == 0,
            id: parsed.id,
            width: parsed.width,
            height: parsed.height,
            collection: parsed.collection,
            rows: parsed.rows
        });

        finishedLevels.push(constructedLevel);
    });

    return finishedLevels;
}

function loadDocumentTemplate() {
    var mainTemplateText = fs.readFileSync('templates/levelData.tpl', 'utf-8');
    return _.template(mainTemplateText);
}

function insertLevels(parsed, template) {
    var concatenated = parsed.join('');
    return template({
        allData: concatenated
    });
}