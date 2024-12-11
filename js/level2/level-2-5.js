//console.log();
//-------------------------------------------------------------------------------------
console.log("Task-2-1");

const zeroInArray = str => {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            newStr.push(i);
        }
    }
    return newStr;
};
console.log(zeroInArray('023m0df0dfg0'));
console.log(zeroInArray('+620fsfd0s5455s0sd000'));
//-------------------------------------------------------------------------------------
console.log("Task-2-2");
const deleteThirdSymbol = str => {
    let newStr = '';
    for (let i = 0; i < str.length; i ++){
        if ((i+1)%3 !== 0) {
            newStr += str[i];
        }
    }

    return newStr;
};
console.log(deleteThirdSymbol('abCdeFg'));
//-------------------------------------------------------------------------------------
console.log("Task-2-3");

const sumDivide = array => {
    let sumPair = 0;
    let sumUnpair = 0;
    for (let i = 0; i < array.length; i++){
        if (i % 2 === 0) {
            sumPair += array[i];
        } else sumUnpair += array[i];
    }
    return sumPair / sumUnpair;
};
console.log(sumDivide([1, 2, 3, 4, 5, 6]));