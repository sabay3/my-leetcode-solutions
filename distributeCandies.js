/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var distinctCandies = new Set();
    var n = candies.length; 
    var i = 0;
    while (i < n && distinctCandies.size < (n/2)) {
        var candy = candies[i];
        if (!distinctCandies.has(candy)) {
            distinctCandies.add(candy);
        }
        i++; 
    }
    return distinctCandies.size; 
};
