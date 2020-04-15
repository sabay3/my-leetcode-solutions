var canPermutePalindrome = function(str) {
    str = str.split(" ").join("");
    var map = new Map(); 
    
    for(var i = 0; i < str.length; i++){
        if (map.get(str[i])){
             map.set(str[i], map.get(str[i]) + 1);
        } else{
            map.set(str[i], 1);
        }
    }
    
    var oddCount = 0; 
    for (var i of map){
        if ((i[1] % 2) != 0){
            oddCount++;
        }
    }
    
    return oddCount <= 1; 
};
