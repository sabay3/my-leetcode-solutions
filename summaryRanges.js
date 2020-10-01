/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var s = 0; 
    var p1 = 0; 
    var p2 = 1; 
    var summary = [];
    while (p2 < nums.length + 1) {
        if (nums[p1] + 1 == nums[p2]) {
            p1++;
            p2++;
        } else {
            if (s == p1) {
                summary.push(nums[s].toString());
            } else {
                summary.push(nums[s].toString() + "->" + nums[p1].toString());
            }
            s = p2;
            p1 = p2; 
            p2 += 1; 
        }
    }

    return summary;
};
