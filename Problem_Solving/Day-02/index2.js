/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Constraints:
-231 <= x <= 231 - 1
Follow up: Could you solve it without converting the integer to a string?
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
// console.log(output);

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
