
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
