/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	let temp = x;
	if (x < 0) {
		return false;
	}
	let revNumber = 0;
	while (x > 0) {
		revNumber = revNumber * 10 + (x % 10);
		x = Math.floor(x / 10);
	}
	if (temp === revNumber) {
		return true;
	} else {
		return false;
	}
};
const output = isPalindrome(-131);
console.log(output);

/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     if(x<0){
//         return false;
//     }
//     if(x>0){
//         const reversedNumber = (x.toString().split("").reverse().join(""));
//     if(x==reversedNumber){
//         return true;
//     }
//     }
//     return false;
// };