/* Leetcode problem #582
only one process has no parent process (root node)
 all pids are distinct positive integers
 
 input = pid list [], corresponding ppid list [], pid (process to kill)
 output = list of PIDs of process killed and its children 
 
 {3: 1, 0: 3, 5: 10, 3: 5} 
 */
 
var killProcess = function(pid, ppid, kill) {
    var map = new Map();
    let res = [];
    
    for (var i = 0; i < pid.length; i++){
        if (map.get(ppid[i])){
            map.get(ppid[i]).push(pid[i]);
        } else {
            map.set(ppid[i], [pid[i]]);
        }
    }
    
    function killChild(target){
        res.push(target);
        
        if (map.has(target)){
            var children = map.get(target);
            for (var child = 0; child < children.length; child++){
                killChild(map.get(target)[child]);
            }
        }
    }
    
    killChild(kill);
    
    return res; 
};
