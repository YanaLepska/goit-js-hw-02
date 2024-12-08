console.log("Task-1-1");

function findFirstZero(str) {
  if (str.includes("0")) {
    console.log(str.indexOf("0"));
  } else {
    console.log("There are not any zero in the string");
  }
}

findFirstZero("My knоwledge = 0");
findFirstZero("I am an artist");

//-------------------------------------------------------------------------------------
console.log("Task-1-2");

function sumDigits() {
  let arr = [];

  for (let i = 1; i <= 1000; i++) {
    arr.push(String(i));
  }

  const newArr = arr
    .map((item) => {
      const firstDigit = Number(item[0]);
      const secondDigit = Number(item[1] || 0);
      return { number: item, sum: firstDigit + secondDigit };
    })
    .filter((item) => item.sum === 5)
    .map((item) => item.number);

  console.log(newArr);
}

sumDigits();
//-------------------------------------------------------------------------------------
console.log("Task-1-3");

function deleteItem(array, value) {
  const newArray = array.filter(item => item !== value);
  console.log(newArray);
}

deleteItem([23, 342, 65, 82, 398, 120], 23);

//-------------------------------------------------------------------------------------
console.log("Task-1-4");

function sumHalf(array) {
  let sum = 0;

  for (let i = 0; i < (array.length) / 2; i++){
     sum += array[i];
  }

  console.log(sum);
}

sumHalf([1, 2, 3, 4, 5, 6]);
//-------------------------------------------------------------------------------------
console.log("Task-2-1");

const negativeNumbers = (array) => {
  // const newArr = [];
  // for (elem of array) {
  //   if (elem<0) {
  //     newArr.push(elem);
  //   }
  // }
  // console.log(newArr.length);

  let count = 0;
  for (elem of array) {
    if (elem < 0) {
      count++;
    }
  }
  console.log(count);
 };
negativeNumbers([1, -15, 65, 32, -21, -98, -121]);
//-------------------------------------------------------------------------------------
console.log("Task-2-2");

const positiveNumbers = array => { 
  const result = array.filter(item => item > 0);
  return result;
};
console.log(positiveNumbers([-54, 65, 32, -127, 980, 70, -50, 388]));
//-------------------------------------------------------------------------------------
console.log("Task-2-3");

const deleteSymbol = str => {
  const result = str.split('').filter(symbol => symbol !== str[str.length - 2]).join('');
  return result;
 };
console.log(deleteSymbol('Windows'));
console.log(deleteSymbol('Microsoft'));
console.log(deleteSymbol('Backpack'));

//-------------------------------------------------------------------------------------
console.log("Task-2-4");

const devideSum = array => { 
  const firstHalf = array.slice(0, array.length / 2).reduce((total, item)=>{return total+item},0);
  const secondHalf = array.slice(array.length / 2, array.length).reduce((total,item)=> {return total+item},0);
  return firstHalf / secondHalf;
 
};

console.log(devideSum([1, 2, 3, 4, 5, 6]));
