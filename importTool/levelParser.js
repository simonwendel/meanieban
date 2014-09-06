/**
 * Created by cpp on 2014-09-05.
 */
module.exports.getLevels = function (data) {
    var levels = [];
    var rows = data.split('\n');
    var currentCollectionName = rows[0];
    var current = { collectionName: currentCollectionName, data: '' };
    rows.forEach(function (row) {
        if (rowHasTiles(row)) {
            current.data = current.data.concat(row);
        } else if(row === '') {
            levels.push(current);
            current = { collectionName: currentCollectionName, data: '' };
        } else {
            currentCollectionName = row;
        }
    });

    return levels.map(parse);
};

function parse(level, id) {
    var voidsAdded = insertVoids(level.data);
    var height = getHeight(voidsAdded);
    var width = getWidth(voidsAdded);
    var tiles = translate(voidsAdded);
    return {
        id: id,
        collection: level.collectionName,
        width: width,
        height: height,
        rows: tiles
    };
}

function rowHasTiles(row) {
    return row[0] == ' ' || row[0] == '#';
}

function insertVoids(string) {
    return string;
}

function translate(string) {
    return string;
}

function getHeight(string) {
    return 10;
}

function getWidth(string) {
    return 10;
}