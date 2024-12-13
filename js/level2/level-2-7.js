console.log("Task-2-1");

const toUpperCase = (str) => {
  const newStr = str.split(" ");
  const result = newStr.map((element) => {
    let lettersArray = [];
    if (element.length <= 3) {
      lettersArray.push(element.toUpperCase());
    } else {
      lettersArray.push(element);
    }
    return lettersArray;
  });
  return result.join(" ");
};
console.log(toUpperCase("a bc def ghij k lm"));
//-------------------------------------------------------------------------------------
console.log("Task-2-2");

const whatCase = (symbol) => {
  let caseOfSymbol = "";
  if (symbol === symbol.toUpperCase()) {
    caseOfSymbol += `There is a upper case symbol ${symbol}`;
  } else caseOfSymbol += `There is a lower case symbol ${symbol}`;
  return caseOfSymbol;
};

console.log(whatCase("N"));
console.log(whatCase("k"));
//-------------------------------------------------------------------------------------
console.log("Task-2-3");

const deleteUnpairNumbers = number => {
    const newStr = String(number).split('');
    const result = newStr.filter(item => item % 2 === 0).join('');
    return Number(result);
}

console.log(deleteUnpairNumbers(123789));
console.log(deleteUnpairNumbers(2143659752));

