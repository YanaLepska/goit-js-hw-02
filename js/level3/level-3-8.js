console.log("Task-3-1");

const everyNumb = (array) => {
  const result = array.every((item) => String(item).includes(3));
  return result;
};

console.log(everyNumb([3, 63, 973, 354]));
console.log(everyNumb([3, 25, 973, 354]));

//-------------------------------------------------------------------------------------
console.log("Task-3-2");
const snakeCase = (str) => {
  const result = str.split("-").join("_");
  return result;
};

console.log(snakeCase("snake-case"));
//-------------------------------------------------------------------------------------
console.log("Task-3-3");
const camelCase = (str) => {
  const result = str
    .split("_")
    .map((item, i) => {
      let newItem = "";
      if (i !== 0) {
        return (newItem = item[0].toUpperCase() + item.slice(1));
      } else return item;
    })
    .join("");
  return result;
};

console.log(camelCase("camel_case"));
//-------------------------------------------------------------------------------------
console.log("Task-3-4");

const kebabCase = (str) => {
  const result = str
    .split("")
    .map((item, i) => {
      let newItem = "";
      if (item === item.toUpperCase()) {
        return (newItem += "-" + item.toLowerCase());
      } else return item;
    })
    .join("");
  return result;
};

console.log(kebabCase("kebabCase"));
//-------------------------------------------------------------------------------------
console.log("Task-3-5");

const createArr = () => {
  let newArray = [];
  for (let i = 0; i < 5; i++) {
    let numbers = [];
    for (let j = 1; j <= 3; j++) {
      numbers.push(j);
    }
    newArray.push(numbers);
  }
  return newArray;
};
console.log(createArr());
