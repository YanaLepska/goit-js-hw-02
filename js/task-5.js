function isNegativeNumber(number) {
    if (number > 0) {
        console.log(`The ${number} is positive `);
    } else if (number < 0) {
        console.log(`The ${number} is negative `);
    } else {
        console.log(`The number is 0 `);
    }
}

isNegativeNumber(-25);
isNegativeNumber(0);
isNegativeNumber(64);

// ---------------------------------------------------------------------------------

function lengthOfString(str) {
    console.log(`The length of "${str}" is ${str.length}`);
    console.log(`The last element of string - ${str[str.length - 1]}`);
}

lengthOfString('The number 89 is positive');
lengthOfString('They have to place the clothes on the bed');

// ---------------------------------------------------------------------------------

function isNumberPair(number) {
    if (number % 2 === 0) {
        console.log(`The ${number} is pair `);
    } else {
        console.log(`The ${number} is unpair `);

    }
}

isNumberPair(17);
isNumberPair(14);

// ---------------------------------------------------------------------------------

function isFirstLetter(word1, word2) {
    const jointLetter = word1[0].toLowerCase() === word2[0].toLowerCase();
    console.log(word1, word2);

    if (jointLetter) {
        console.log(`The first letters of words are match`);
    } else {
        console.log('The first letters are not match');
    }
}

isFirstLetter('Time', 'Tost');
isFirstLetter('Florence', 'Hometown');
isFirstLetter('Soccet', 'soccet');

// ---------------------------------------------------------------------------------

function islastLetter(word) {
    const lastLetter = word[word.length - 1];
   
    if (lastLetter === 'a') {
        console.log(word[word.length - 2]); 
    } else {
         console.log(lastLetter) ;
    }
}

islastLetter('holly');
islastLetter('dark');
islastLetter('comma');

// ---------------------------------------------------------------------------------

function numbersOperations(number) {
    const str = String(number);
    const firstDigit = str[0];
    const lastDigit = str[str.length - 1];
    const sum = Number(firstDigit) + Number(lastDigit);

    console.log(firstDigit);
    console.log(lastDigit);
    console.log(sum);
    console.log(`There are ${str.length} digits in ${number}`);
   
}

numbersOperations(652198);

// ---------------------------------------------------------------------------------

function numbersMatch(number1, number2) {
    const str1 = String(number1);
    const str2 = String(number2);
    const isMatch = str1[0] === str2[0];
    console.log(number1, number2);
    if (isMatch) {
        console.log(`The first digits of numbers are match`);  
    } else {
        console.log(`The first digits of numbers are not match`);  
    }
}

numbersMatch(264019, 9879);
numbersMatch(781, 723);

// ---------------------------------------------------------------------------------

function enterStr(str) {
    if (str.length > 1) {
        console.log(str[str.length - 2]);
    } else {
        console.log(`The word "${str}" has missing characters`);  
    }
}

enterStr('Runner');
enterStr('I');

// ---------------------------------------------------------------------------------

function divisionСheck(num1, num2) {
    const trace = num1 % num2;
    if (trace === 0) {
        console.log(`The number ${num1} is divisible by the number ${num2} without a trace. `)
    } else {
        console.log(`The number ${num1} is divisible by the number ${num2} with a ${trace} trace. `)
    }
}

divisionСheck(80, 40);
divisionСheck(50, 4);
