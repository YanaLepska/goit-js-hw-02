console.log("Task-3-1");

const sortNumbers = (number) => {
  const toStr = String(number).split("");
  console.log(toStr);
  for (let i = 1; i < toStr.length; i++) {
    if (toStr[i] < toStr[i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(sortNumbers(5498067132));
console.log(sortNumbers(456789));

//-------------------------------------------------------------------------------------
console.log("Task-3-2");

const filterArray = (array) => {
  const result = array.filter((item) => item !== "");
  return result;
};

console.log(filterArray([1, "", 2, 3, "", 5]));
//-------------------------------------------------------------------------------------
console.log("Task-3-3");

const toSortArrays = (array) => {
    const newArray = array.map(item=>item.toSorted());
    console.log(newArray);
};

console.log(
  toSortArrays([
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
  ])
);
//-------------------------------------------------------------------------------------
console.log("Task-3-4");

const cutArray = () => {
    let arr1 = [1, 2, 3];
    let arr2 = [1, 2, 3, 4, 5];
    arr2 = arr2.slice(0, arr1.length);
    return arr2;
};

console.log(cutArray());
//-------------------------------------------------------------------------------------
