/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max_int = Math.pow(2, 31);
    let result = parseInt(x.toString().split('').reverse().join(''));

    if (result > max_int - 1) {
      return 0;
    }
    return (x >= 0) ? result : -result;
};
