var mostCommonWord = function(paragraph, banned) {
    if (paragraph.length < 0) return "";
    
    var bannedSet = new Set();
    var nonBannedMap = new Map();
    
    for (var i of banned){
        bannedSet.add(i);
    }
    
    var mostFrequent = 0;
    var mostFrequentWord = "";
    for (var i of paragraph.toLowerCase().split(/[^a-z]/g)){
        nonBannedMap.set("", 0);
        if (!bannedSet.has(i) && i != ""){
            if (!nonBannedMap.has(i)){
                nonBannedMap.set(i, 1);
            } else {
                nonBannedMap.set(i, nonBannedMap.get(i) + 1); 
            }
            if (mostFrequent < nonBannedMap.get(i)){
                mostFrequent = nonBannedMap.get(i);
                mostFrequentWord = i; 
            } 
        }
    }
    return mostFrequentWord;
};
