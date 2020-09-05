/**
 LEETCODE 62. UNIQUE PATHS
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m == 1 && n == 1) return 1;
    let dp = new Array(n).fill(1);
    dp[0] = 0; 
    
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j == 0){
                dp[j] = 1; 
            } else {
                dp[j] = dp[j - 1] + dp[j];
            }
        }
    }
    
    return dp[n - 1];
};
