console.log('Task 1');

let sum = 0;
for (let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

// ---------------------------------------------------------------------------------
console.log('Task 2');

let sum2 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}
console.log(sum2);

// ---------------------------------------------------------------------------------
console.log('Task 3');
let sum3 = 0;
for (let i = 1; i <= 100; i++){
    if (i % 2 !== 0) {
        sum3 += i;
    }
}
console.log(sum3);

// ---------------------------------------------------------------------------------
console.log('Task 4');

function numbersDevision(num1, num2) {
    const result = num1 % num2;
    console.log(result);
}

numbersDevision(15, 7);
// ---------------------------------------------------------------------------------
console.log('Task 5');
//let result = '';
function reverceStr(str) {
    for (let i = str.length-1; i >=0 ; i--){
       //result += str[i];
    console.log(str[i]);
        
    }
}

reverceStr("kings");
