//-------------------------------------------------------------------------------------
console.log("Task-2-1");
const firstDigit = str => { 
    const digits = '0123456789';
    for (let i = 0; i < str.length; i++){
        if (digits.includes(str[i])) {
            return `Index of ${str[i]} is ${i}}`;
        }
    }
};

console.log(firstDigit('I am 22 years old.You too?'));
//-------------------------------------------------------------------------------------
console.log("Task-2-2");
const doOject = obj => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return [keys, values];
};
console.log(doOject({ name: 'Yana', age: 22, family: ['husband', 'mother', 'brothers', 'dad'] }));

//-------------------------------------------------------------------------------------
console.log("Task-2-3");
const pairDigits = number => {
    const numberArr = String(number);
    let count = 0;
    for (let elem of numberArr) {
        if (elem % 2 === 0) {
            count++;
        }
    }
    return `There are ${count} pair digits in a ${number}`;
};
console.log(pairDigits(65781));
console.log(pairDigits(2971362));

//-------------------------------------------------------------------------------------
console.log("Task-2-4");

const upperLetters = str => {
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        if ( i % 2 === 0) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }
    return newStr;
};


console.log(upperLetters('abcdefg'));
//-------------------------------------------------------------------------------------
console.log("Task-2-5");

const firstLetterOfWords = str => {
    let newStr = str.split(' ').map(item => item[0].toUpperCase() + item.slice(1));
       return newStr.join(' ');
};

console.log(firstLetterOfWords('aaa bbb ccc ddd'));