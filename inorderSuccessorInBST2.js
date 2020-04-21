/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function(node) {
    if (!node) return null; 
  
    //right
    if (node.right){ 
        //go to leftmost node of node.right
        var curr = node.right;
        while (curr.left){
           curr = curr.left; 
        }
        return curr; 
    }
    
    if (node.parent && node.parent.val > node.val) return node.parent;
    if (node.parent){
        var curr = node.parent;
        while (curr.parent){
            if (curr.val > node.val) return curr; 
            curr = curr.parent; 
        } 
        if (curr.val > node.val) return curr;
        return null; 
    }  
    
    return null;
};
