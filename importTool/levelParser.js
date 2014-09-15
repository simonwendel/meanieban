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
    var height = getHeight(level.data);
    var width = getWidth(level.data);
    var withVoids = insertVoids(level.data);
    var tiles = translate(withVoids);
    var rows = jsFormat(tiles);
    return {
        id: id,
        collection: level.collectionName,
        width: width,
        height: height,
        rows: rows
    };
}

function getHeight(string) {
    return string.split('\n').length - 1;
}

function getWidth(string) {
    var arrayMax = Function.prototype.apply.bind(Math.max, null);
    return arrayMax(
        string.split('\n').map(function (elem) {
            return elem.lastIndexOf('#') + 1;
        }));
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

/*
 * This function will scan all rows and make sure that spaces preceding any wall,
 * from any direction, will be replaced with the translated number for void. It is
 * messy, but why bother when it's just used a couple of times during development
 * of the main app.
 */
function insertVoids(string) {
    var width = getWidth(string);
    var height = getHeight(string);

    // create [][]
    var rows = [];
    string.split('\n').forEach(function (textRow) {
        var row = [];
        textRow.split('').forEach(function (character) {
            row.push(character);
        });

        rows.push(row);
    });

    // from right to left is handled by trim, so not needed here

    // from left to right by scanning
    rows.forEach(function (row) {
        for (var col = 0, len = row.length; col < len; col++) {
            if (row[col] == ' ' || row[col] == 'V') {
                row[col] = 'V';
            } else {
                break;
            }
        }
    });

    // from top to bottom by scanning
    for(var col = 0;  col < width; col++) {
        for(var row = 0; row < height; row++) {
            if(rows[row] && rows[row][col]) {
                if(rows[row][col] == ' ' || rows[row][col] == 'V') {
                    rows[row][col] = 'V';
                } else {
                    break;
                }
            }
        }
    }

    // from bottom to top by scanning
    for(var col = 0;  col < width; col++) {
        for(var row = height - 1; row >= 0; row--) {
            if(rows[row] && rows[row][col]) {
                if(rows[row][col] == ' ' || rows[row][col] == 'V') {
                    rows[row][col] = 'V';
                } else {
                    break;
                }
            }
        }
    }

    // make string again
    return rows.reduce(function(prev, curr) {
        var row = curr.reduce(function (prev, curr) {
            return prev + curr;
        }, '');

        return prev + row + '\n';
    }, '').trim();
}

function jsFormat(rows) {
    var rows = rows.split('\n');
    return rows.map(jsFormatLine);
}

function jsFormatLine(row, index, array) {
    row = row.split('').join(',');
    row = '[' + row + ']';
    row = row.replace(/\n/g, '');
    return row;
}
