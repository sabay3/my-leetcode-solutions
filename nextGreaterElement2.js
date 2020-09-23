/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var stack = [];
    var res = new Array(nums.length);
    for (var i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop();
        }
        if (stack.length == 0) {
            res[i] = -1; 
        } else {
            res[i] = nums[stack[stack.length - 1]];
        }
        stack.push(i);
    }
    for (var i = nums.length - 1; i >= 0; i--) {
        if (res[i] == - 1) {
            while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
                stack.pop();
            }
             if (stack.length > 0) {
                res[i] = nums[stack[stack.length - 1]];
            }
        }
        stack.push(i);
    }
    return res;
};
