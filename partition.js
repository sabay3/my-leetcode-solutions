var partition = function(head, x) {
    var lessThan = new ListNode(0);
    var less = lessThan;
    var greaterThan = new ListNode(0);
    var greater = greaterThan; 
    var curr = head; 
    while(curr != null){
        if (curr.val < x){
            less.next = new ListNode(curr.val);
            less = less.next; 
        } else {
            greater.next = new ListNode(curr.val);
            greater = greater.next; 
        }
        curr = curr.next;
    }
    
    greater.next = null;
    less.next = greaterThan.next;
    
    return lessThan.next;
};
