console.log("Task-2-1");

const countLetters = (str) => {
  let newStr = "";
  const digits = "0123456789";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!digits.includes(str[i])) {
      newStr += str[i];
      count++;
    }
  }
  console.log(newStr, count);
  return count <= 3;
};
console.log(countLetters("ghei734"));
console.log(countLetters("22y21a11y"));
console.log(countLetters("22L11A"));

//-------------------------------------------------------------------------------------
console.log("Task-2-2");

const firstPairNumber = (number) => {
  const str = String(number).split("");
  const result = str.reverse().find((item) => item % 2 === 0);
  return Number(result);
};

console.log(firstPairNumber(3896515));
//-------------------------------------------------------------------------------------
console.log("Task-2-3");
const firsLetter = (str) => {
  const newStr = str.split(" ");
  let result = [];
  for (let i = 0; i < newStr.length; i++) {
    result.push("!" + newStr[i].slice(1));
  }
  return result.join(" ");
};

console.log(firsLetter("abcde abcde abcde"));
//-------------------------------------------------------------------------------------
console.log("Task-2-4");

const twoNumbers = (array) => {
    let str = '';
    for (let i = 0; i < array.length; i++){
        if (array[i] === array[i + 1]) {
            str += `There are two the same numbers ${array[i]} in a row '${array}'`;
    }
    }
    
       
  return str;
};

console.log(twoNumbers([1, 2, 3, 3, 4, 5]));
