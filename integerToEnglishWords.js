/**
LEETCODE QUESTION 273. Integer to English Words
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    var lessThanTwenty = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    var lessThanNinety = {20: 'Twenty', 30: 'Thirty', 40: 'Forty', 50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty', 90: 'Ninety'};    
    if (num < 20) {
        return lessThanTwenty[num];   
    } else if (num < 100) {
        if (numberToWords(num % 10) == 'Zero') return lessThanNinety [num - (num % 10)];
        return lessThanNinety[num - (num % 10)] + ' ' + numberToWords(num % 10); 
    } else if (num < 1000) {
        if (numberToWords(num % 100) == 'Zero') return numberToWords(Math.floor(num/100)) + ' Hundred';
        return numberToWords(Math.floor(num/100)) + ' Hundred ' + numberToWords(num % 100);
    } else if (num < 1000000) {
        if (numberToWords(num % 1000) == 'Zero') return numberToWords(Math.floor(num/1000)) + ' Thousand';
        return numberToWords(Math.floor(num/1000)) + ' Thousand ' + numberToWords(num % 1000);
    } else if (num < 1000000000) {
        if (numberToWords(num % 1000000) == 'Zero') return numberToWords(Math.floor(num/1000000)) + ' Million';
        return numberToWords(Math.floor(num/1000000)) + ' Million ' + numberToWords(num % 1000000);
    } else {
        if (numberToWords(num % 1000000000) == 'Zero') return numberToWords(Math.floor(num/1000000000)) + ' Billion';
        return numberToWords(Math.floor(num/1000000000)) + ' Billion ' + numberToWords(num % 1000000000);
    }
};
