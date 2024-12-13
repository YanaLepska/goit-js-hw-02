console.log("Task-2-1");

const isUpperLetters = (str) => {
  let lettersArray = 0;
  for (let i = 0; i < str.length; i++) {
    // if (newArr[i] === newArr[i].toUpperCase() )
    if (str[i] >= "A" && str[i] <= "Z") {
      lettersArray++;
    }
  }
  if (lettersArray <= 2) {
    return `The string has ${lettersArray} upper case letter`;
  } else {
    return `The string has more than two upper case letter`;
  }
};

console.log(isUpperLetters("deYjvhT"));
console.log(isUpperLetters("deYjvJ jfLhT"));

//-------------------------------------------------------------------------------------
console.log("Task-2-2");

const deleteNumbers = (str) => {
  const newArr = str.split(" ");
  const result = newArr.filter((item) => item.length <= 3);
  return result.join(" ");
};

console.log(deleteNumbers("1 22 333 4444 22 5555 1 66"));
//-------------------------------------------------------------------------------------
console.log("Task-2-3");

const concatArrays = () => {
  let arr1 = [1, 2, 3, 5, 8, 9];
  let arr2 = ["a", "b", "c", "k", "h"];
  let arr = [];
  arr = arr1.slice(0, 2);
  arr = arr.concat(arr2, arr1.slice(2));
  return arr;
};

console.log(concatArrays());

//[1,2,'a', 'b', 'c',[3]]
