console.log('Task 1');
function sumSquare(array) {
  let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i] ** 2;
    }  
    console.log(sum);
}
sumSquare([5, 11, 24]);//722

// ---------------------------------------------------------------------------------
console.log('Task 2');

function sumSquareRoot(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i] ** (1/2);
    }
    console.log(sum);
}

sumSquareRoot([9, 121, 144]); //26
// ---------------------------------------------------------------------------------
console.log('Task 3');

function sumPositiv(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    console.log(sum);
}

sumPositiv([-14, 5, 24, -62, -79, 98])//127
// ---------------------------------------------------------------------------------
console.log('Task 4');

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > 0 && array[i] < 10) {
            sum += array[i];
       }
    }
    console.log(sum);
}

sum([12, 8, 51, -15, 2])//10

// ---------------------------------------------------------------------------------
console.log('Task 1-7/1');

function splitStr(str) {
    let arrStr = str.split('');
    console.log(arrStr);
}
splitStr('abcdef');
// ---------------------------------------------------------------------------------
console.log('Task 1-7/2');
function numberSplit(number) {
    const strArr = String(number).split('');
    const strNumb = strArr.map(Number);
    console.log(strNumb);

}
numberSplit(12345);
// ---------------------------------------------------------------------------------
console.log('Task 1-7/3');
function numberSplitReverce(number) {
    let reverce = '';
    let str = String(number);
    for (let i = str.length; i > 0; i--){
        reverce += i;
    }
    console.log(Number(reverce));

}
numberSplitReverce(12345);
// ---------------------------------------------------------------------------------
console.log('Task 1-7/4');
function numberSplitSum(number) {
    const strArr = String(number).split('');
     const strNumb = strArr.map(Number);
    let sum = 0;
    for (let i = 0; i < strNumb.length; i++){
        sum += strNumb[i];
    }
    console.log(sum);
}
numberSplitSum(12345);//15
// ---------------------------------------------------------------------------------
console.log('Task 1-8/1');

function pushNumbers() {
    let array = [];
    for (let i = 1; i <= 100; i++){
        array.push(i);
    }
    console.log(array);
}

pushNumbers();
// ---------------------------------------------------------------------------------
console.log('Task 1-8/2');
function pushPairNumbers() {
    let array = [];
    for (let i = 1; i <= 100; i++){
        if (i % 2 === 0) {
            array.push(i);
       }
    }
    console.log(array);
}
pushPairNumbers()
// ---------------------------------------------------------------------------------
console.log('Task 1-8/3');
function roundNumbers(array) {
    let newArray = [];
    for (let el of array) {
        newArray.push(Number(el.toFixed(1)));
   }
    console.log(newArray);
}
roundNumbers([1.456, 2.125, 3.32, 4.1, 5.34]);
// ---------------------------------------------------------------------------------
console.log('Task 1-9/1');

function strStart(array) {
    let newArray = [];
    for (let el of array) {
        if (el.startsWith('http://')) {
            newArray.push(el);
        }
    }
    console.log(newArray);
}
strStart(['http://port', 'port', 'farm', 'http://farmak']);
// ---------------------------------------------------------------------------------
console.log('Task 1-9/2');
function strEnd(array) {
    let newArray = [];
    for (let el of array) {
        if (el.endsWith('.html')) {
            newArray.push(el);
        }
    }
    console.log(newArray);
}
strEnd(['http://port', 'port.html', 'farm.html', 'http://farmak']);
// ---------------------------------------------------------------------------------
console.log('Task 1-9/3');

function multiplyNumb(array) {
    let newArray = [];
    for (let el of array) {
        el += el * 0.1;
        newArray.push(el);
    }
    console.log(newArray);
}
multiplyNumb([10, 40, 90]);//11, 44, 99
// ---------------------------------------------------------------------------------
console.log('Task 1-10/1');

function randomNumb() {
    let newArray = [];
    for (let i = 0; i < 100; i++){
         newArray.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(newArray);
}
randomNumb();
// ---------------------------------------------------------------------------------
console.log('Task 1-10/2');
function numberSymb(number) {
    let str = String(number);
    let strArr = str.split('');
    for (let i = strArr.length ; i > 0; i--){
        console.log(Number(i));
    }
}

numberSymb(12345);
// ---------------------------------------------------------------------------------
console.log('Task 1-10/3');
function numberArr(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i+=2){
        newArray = array.slice(i, i+2);
        console.log(newArray);
    }
}

numberArr([1,2,3,4,5,6]);
// ---------------------------------------------------------------------------------
console.log('Task 1-10/4');
function numberArr2(array1, array2) {
    let array = array1.concat(array2);
    console.log(array);
}

numberArr2([1, 2, 3], [4, 5, 6]);