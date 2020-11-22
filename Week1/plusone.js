// 思路
// 从末尾开始遍历，如果当前位等于 9 ，就直接变为0；否则加 1，跳出循环，返回数组
// 如果改变后的数组中下标为 0 的值为 0，则说明需要在数组头部增加一个值为 1 的元素
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length -1; i >= 0;i--){
        if(digits[i] === 9){
            digits[i] = 0
        }else{
            digits[i]++
            return digits
        }
    }
    if(digits[0] == 0) digits.unshift(1)
    return digits
};