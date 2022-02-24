module.exports = function reverse (n) {
    let newArr = n.toString().split('');
    let newStr = '';
        for (let i = newArr.length - 1; i>=0; i--){
            newStr += newArr[i];
        }
    return newStr.replace('-','');
}
