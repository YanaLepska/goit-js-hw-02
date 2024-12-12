
//-------------------------------------------------------------------------------------
console.log("Task-2-1");

const indexOfDigits = str => {
    const digits = '0123456789';
    let result = [];
    for (let i = 0; i < str.length; i++){
        if (digits.includes(str[i])) {
            result.push(i);
        }
    }
    return result;
};

console.log(indexOfDigits('d05dh46h38njf7'));
//-------------------------------------------------------------------------------------
console.log("Task-2-2");

const reverseElem = array => {
    let arrStr = []; 

    for (const element of array) {
        arrStr.push(Number(String(element).split('').reverse().join('')));
    }

    return arrStr;
};

console.log(reverseElem([123, 456, 789]));
//-------------------------------------------------------------------------------------
console.log("Task-2-3");

const devideStr = str => {
    let newStr = str.split('').reverse().join('');
    let result = '';
    for (let i = 0; i < newStr.length; i++){
        result += newStr[i];
        if ((i + 1) % 3 === 0 && i !== newStr.length - 1) {
            result += ' ';
        }
    }

    return result.split('').reverse().join('');
    
}

console.log(devideStr('1234567'));
//-------------------------------------------------------------------------------------
console.log("Task-2-4");

const reverseCase = str => {
    const newStr = str.split('')
        .map((element, index, str) => {
            let lettersArray = [];
            if (element === str[index].toUpperCase()) {
                lettersArray.push(element.toLowerCase());
            } else {
                lettersArray.push(element.toUpperCase());
            }
            return lettersArray;
        }).join('');
    return newStr;
};
console.log(reverseCase('AbCdE'));
//-------------------------------------------------------------------------------------
console.log("Task-2-5");

const joinNumbers = array => {
    const str = array.join('');
    let newArr = [];
    for (let i = 0; i < str.length; i+=2){
        newArr.push(str.slice(i, i+2));
    }
    return newArr;
};

console.log(joinNumbers([1, 2, 3, 4, 5, 6]));

//-------------------------------------------------------------------------------------
console.log("Task-2-6");

const upperLetter = str => {
    const newStr = str.split(' ');
    let result = [];
    for (let i = 0; i < newStr.length; i++){
        if (i % 2 !== 0) {
            result.push(newStr[i][0].toUpperCase()+newStr[i].slice(1));
        } else result.push(newStr[i]);
    }
    return result.join(' ');
};

console.log(upperLetter('aaa bbb ccc ddd eee fff'));
