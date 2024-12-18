console.log("Task-3-1");
const defineWord = (str) => {
  const newArray = str.split(" ");
  const result = newArray.filter((item) => item[0] === "a");
  return result;
};

console.log(defineWord("I allowed them to attend this class every week"));
//-------------------------------------------------------------------------------------
console.log("Task-3-2");
const devideOnFive = (array) => {
  const result = array.filter((item) => item % 5 === 0);
  return result;
};

console.log(devideOnFive([2, 10, 14, 18, 20, 55, 86]));
//-------------------------------------------------------------------------------------
console.log("Task-3-3");
const zeroIncludes = (array) => {
  const newArray = array.map((item) => String(item));
  const result = newArray
    .filter((item) => item.includes("0"))
    .map((item) => Number(item));
  return result;
};
console.log(zeroIncludes([2, 10, 14, 18, 20, 55, 806]));
//-------------------------------------------------------------------------------------
console.log("Task-3-4");
const findNumber = (array) => {
  const newArray = array.map((item) => String(item));
  const result = newArray.find((item) => item.includes("3"));
  if (result === undefined) {
    return false;
  } else return Number(result);
};

console.log(findNumber([2, 10, 14, 18, 20, 55, 806]));
console.log(findNumber([2, 93, 314]));

//-------------------------------------------------------------------------------------
console.log("Task-3-5");

const sortNumber = (number) => {
  let str = String(number).split("");
  // const result = str.toSorted();
  // return result;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (str[i] > str[j]) {
        const temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
    }
  }
  return Number(str.join(""));
};

console.log(sortNumber(35142));
//-------------------------------------------------------------------------------------
console.log("Task-3-6");
const createStr = () => {
  let array = [];
  for (let i = 1; i <= 5; i++) {
    if (i === 5) {
      array.push("-" + i + "-");
    } else array.push("-" + i);
  }
  return array.join("");
};

console.log(createStr());
//-------------------------------------------------------------------------------------
console.log("Task-3-7");
const sum = () => {
  let object = {
    1: {
      1: {
        1: 111,
        2: 112,
        3: 113,
      },
      2: {
        1: 121,
        2: 122,
        3: 123,
      },
    },
    2: {
      1: {
        1: 211,
        2: 212,
        3: 213,
      },
      2: {
        1: 221,
        2: 222,
        3: 223,
      },
    },
    3: {
      1: {
        1: 311,
        2: 312,
        3: 313,
      },
      2: {
        1: 321,
        2: 322,
        3: 323,
      },
    },
  };
  let sum = 0;
  const values = Object.values(object);
  for (const element of values) {
    // console.log(element);
    for (const key in element) {
      // console.log(element[key]);
      let keys = element[key];
      //console.log(keys);
      for (const item in keys) {
        // console.log(keys[item]);
        sum += keys[item];
      }
    }
  }
  return sum;
};
console.log(sum());
