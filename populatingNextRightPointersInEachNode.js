/**
LEETCODE 116. Populating Next Right Pointers in Each Node
Level Order Traversal Approach - O(N) time complexity, O(N) space complexity
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root; 
    let q = [[root]];
    while (q.length > 0) {
        let level = q.shift();
        let nextLevel = [];
        while (level.length > 0) {
            let node = level.shift();
            if (level.length != 0) {
                let next = level[0];
                node.next = next; 
            }
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }
        if (nextLevel.length > 0) q.push(nextLevel);
    }
    return root; 
};
