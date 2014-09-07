/**
 * Created by cpp on 2014-09-05.
 *
 * This module knows a lot of gritty details about the level.data format. if
 * the data file being imported changes, this will most certainly break!
 */
module.exports.getLevels = function (data) {
    var levels = [];
    var rows = data.split('\n');
    var currentCollectionName = rows[0];
    var current = { collectionName: currentCollectionName, data: '' };
    rows.forEach(function (row) {
        if (rowHasTiles(row)) {
            current.data = current.data.concat(row + '\n');
        } else if (row === '') {
            levels.push(current);
            current = { collectionName: currentCollectionName, data: '' };
        } else {
            currentCollectionName = row;
        }
    });

    return levels.map(parse);
};

function rowHasTiles(row) {
    return row[0] == ' ' || row[0] == '#';
}

function parse(level, id) {
    var voidsAdded = insertVoids(level.data);
    var height = getHeight(voidsAdded);
    var width = getWidth(voidsAdded);
    var tiles = translate(voidsAdded);
    var rows = jsFormat(tiles);
    return {
        id: id,
        collection: level.collectionName,
        width: width,
        height: height,
        rows: rows
    };
}

function insertVoids(string) {
    return string;
}

function getHeight(string) {
    return string.split('\n').length - 1;
}

function getWidth(string) {
    var maxIndex = 0;
    string.split('\n').forEach(function (row) {
        var index = row.lastIndexOf('#');
        if (index > maxIndex) {
            maxIndex = index;
        }
    });

    return maxIndex + 1;
}

function translate(string) {
    return string
        .replace(/V/g, '0')
        .replace(/ /g, '1')
        .replace(/\./g, '2')
        .replace(/\*/g, '3')
        .replace(/\$/g, '4')
        .replace(/\+/g, '5')
        .replace(/@/g, '6')
        .replace(/#/g, '7');
}

function jsFormat(rows) {
    var rows = rows.split('\n');
    rows.pop();
    return rows.map(jsFormatLine);
}

function jsFormatLine(row, index, array) {
    row = row.split('').join(',');
    row = '[' + row + ']';
    row = row.replace(/\n/g, '');
    return row;
}
