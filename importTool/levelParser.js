/**
 * Created by cpp on 2014-09-05.
 */
module.exports.getLevels = function (data) {
    var levels = [];
    var rows = data.split('\n');
    var currentCollectionName = rows[0];
    var current = { collectionName: currentCollectionName, data: '' };
    for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        var row = rows[rowIndex];

        if (rowHasTiles(row)) {
            current.data = current.data.concat(row);
        } else if(row === '') {
            levels.push(current);
            current = { collectionName: currentCollectionName, data: '' };
        } else {
            currentCollectionName = row;
        }
    }

    return levels;
};

module.exports.parse = function (level, id) {
    return {
        id: id,
        collection: level.collectionName,
        width: 10,
        height: 10,
        rows: level.data
    };
};

function rowHasTiles(row) {
    return row[0] == ' ' || row[0] == '#';
}