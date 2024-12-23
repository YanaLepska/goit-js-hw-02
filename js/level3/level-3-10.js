console.log("Task-3-1");
const doubleItem = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i], array[i]);
  }
  return newArray;
};

console.log(doubleItem(["fg", 56, "se", 87, 176]));
//-------------------------------------------------------------------------------------
console.log("Task-3-2");
const defineDevide = (array, number) => {
  const newArray = array.filter((item) => item % number === 0);
  return newArray;
};

console.log(defineDevide([15, 98, 34, 46, 71, 166], 2));

//-------------------------------------------------------------------------------------
console.log("Task-3-3");
const sameDigits = (num1, num2) => {
  let sameDigitsArray = [];
  const str1 = String(num1);
  const str2 = String(num2);
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      sameDigitsArray.push(str1[i]);
    }
  }
  return sameDigitsArray;
};

console.log(sameDigits(164, 6584));
console.log(sameDigits(97418, 987421));

//-------------------------------------------------------------------------------------
console.log("Task-3-4");
const positionOfThree = (number) => {
  let arrayPosition = [];
  const str = String(number).split("");
  const result = str.map((item, index) => {
    if (item === "3") {
      return arrayPosition.push(index);
    }
  });
  return arrayPosition.slice(1, length - 1);
};
console.log(positionOfThree(6323533));
console.log(positionOfThree(32133343));

//-------------------------------------------------------------------------------------
console.log("Task-3-5");

const delSameDig = (array) => {
  let result = [];

  for (let num of array) {
    let digits = String(num).split("");
    let hasDuplicates = false;

    for (let i = 0; i < digits.length; i++) {
      for (let j = i + 1; j < digits.length; j++) {
        if (digits[i] === digits[j]) {
          hasDuplicates = true; 
          break;
        }
      }
      if (hasDuplicates) break;
    }

    if (!hasDuplicates) {
      result.push(num);
    }
  }

  return result;
};

console.log(delSameDig([22, 64, 31, 77, 99]));

//-------------------------------------------------------------------------------------
console.log("Task-3-6");

const flatArray = () => {
    let array = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    array = array.flat();
    return array;
}
console.log(flatArray());
