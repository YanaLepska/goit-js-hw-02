console.log("Task-3-1");

const pairFirstDigit = () => {
  let array = [];
  for (let i = 10; i < 70; i++) {
    array.push(String(i).split(""));
  }
  array = array.filter((item) => item[0] % 2 === 0);
  return array.map((item) => Number(item.join("")));
};

console.log(pairFirstDigit());
//-------------------------------------------------------------------------------------
console.log("Task-3-2");

const replaceArray = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i += 2) {
    newArray.push(array.slice(i, i + 2));
  }
  newArray = newArray
    .map((item) => {
      if (item.length % 2 === 0) {
        const temp = item[0];
        item[0] = item[1];
        item[1] = temp;
      }
      return item;
    })
    .flat();
  return newArray;
};

console.log(replaceArray([1, 2, 3, 4, 5, 6, 7]));
//-------------------------------------------------------------------------------------
console.log("Task-3-3");

const sumOfObj = () => {
    let obj = {
        1: {
            1: 11,
            2: 12,
            3: 13,
        },
        2: {
            1: 21,
            2: 22,
            3: 23,
        },
        3: {
            1: 24,
            2: 25,
            3: 26,
        },
    }
    const values = Object.values(obj);
    let sum = 0;
  for (const element of values) {
      sum += element[1];
      sum += element[2];
      sum += element[3];
  }
    return sum;
};
console.log(sumOfObj());
//console.log(newArray);