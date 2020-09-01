/**
LEETCODE QUESTION 230. Kth Smallest Element in a BST
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) return null; 
    var arr = inOrderTraversal(root, [], k); 
    return arr[k - 1];
};

var inOrderTraversal = function(node, inorder, k) {
    if (node.left) inorder = inOrderTraversal(node.left, inorder, k);
    if (inorder.length == k) return inorder;
    inorder.push(node.val);
    if (inorder.length == k) return inorder;
    if (node.right) inorder = inOrderTraversal(node.right, inorder, k);
    return inorder;
};
