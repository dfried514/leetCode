/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MIN = -(Math.pow(2, 31));
    const INT_MAX = Math.pow(2, 31) - 1;

    let numberArr = [];
    let sign = '+';
    let index = 0;

    while (index < str.length
        && str.charAt(index) === ' ') {
        index++;
    }
    if (index >= str.length) {
        return 0;
    }
    if (str.charAt(index) === '+'
        || str.charAt(index) === '-') {
            sign = str.charAt(index);
            index++;
    }
    while (index < str.length) {
        let curChar = parseInt(str.charAt(index));
        if (!Number.isNaN(curChar)) {
            numberArr.push(curChar);
            index++;
        } else {
            break;
        }
    }
    if (numberArr.length === 0) {
        return 0;
    }
    let result = (sign === '+')
        ? parseInt(numberArr.join(''))
        : -parseInt(numberArr.join(''));

    if (result < INT_MIN) {
        result = INT_MIN;
    } else if (result > INT_MAX) {
        result = INT_MAX;
    }
    return result;
};
