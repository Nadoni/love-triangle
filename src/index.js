/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    var lover1, lover2, lover3;
    var arr = {};
    for (var i = 0; i < preferences.length; i++) {
        lover1 = preferences[i];
        lover2 = preferences[lover1 - 1];
        lover3 = preferences[lover2 -1];

        if (lover1 === preferences[lover3 - 1] && lover1 !== lover3){
            var key = [lover1, lover2, lover3].sort();
            arr[key] = true;
        }
    }
    console.log(arr);
    for (var key in arr) {
        count++;
    }
    return count;
};
