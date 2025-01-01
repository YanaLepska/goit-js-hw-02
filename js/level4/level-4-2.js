console.log("Task-4-1");

const sumOfNumbers = (number) => {
  const str = String(number).split("");
  const result = str.reduce((acc, item) => {
    return acc + Number(item);
  }, 0);
  return result;
};

console.log(sumOfNumbers(357));
console.log(sumOfNumbers(988));

//-------------------------------------------------------------------------------------
console.log("Task-4-2");
const delZero = (number) => {
  const str = String(number).split("");
  const result = str.filter((item) => item !== "0").join("");
  return Number(result);
};

console.log(delZero(50104));

//-------------------------------------------------------------------------------------
console.log("Task-4-3");

const countDate = (dateStr) => {
  const today = Date.now();
  const newDate = Date.parse(dateStr);
  const result = (newDate - today) / (24 * 60 * 60 * 1000);
  if (result < 0) {
    return `${-result} days have passed since  ${dateStr}`;
  }
  if (result <= 1) {
    return `${(newDate - today) / (60 * 60 * 1000)} hours left to ${dateStr}`;
  } else {
    return `${result} left to ${dateStr}`;
  }
};

console.log(countDate("2025-01-02T00:00:00"));
console.log(countDate("2026-12-10T00:00:00"));
console.log(countDate("2024-12-10T00:00:00"));

//-------------------------------------------------------------------------------------
console.log("Task-4-4");

const isLeapYear = (year) => {
  console.log(year);
  const date = new Date(year, 1, 29);
  if (date.getDate() === 29) {
    return "It is a leap year ";
  } else return "It is not a leap year";
};
console.log(isLeapYear("2025"));
console.log(isLeapYear("2028"));

//-------------------------------------------------------------------------------------
console.log("Task-4-5");

const arrayOfLeapsYears = () => {
  const date = new Date();
  const newDate = date.getFullYear();
  let leapsYears = [];
  for (let i = newDate; i > newDate - 100; i--) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      leapsYears.push(i);
    }
  }
  return leapsYears;
};

console.log(arrayOfLeapsYears());

//-------------------------------------------------------------------------------------
console.log("Task-4-6");

const amountOfDays = () => {
  let date = new Date();
  const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const days = ((newDate - date) / (24 * 60 * 60 * 1000)).toFixed();
  return `${days} days left to next month`;
};
console.log(amountOfDays());

//-------------------------------------------------------------------------------------
console.log("Task-4-7");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const daysOfWeek = () => {
  const date = new Date().getDay();
  let next = days[date + 1];
  const curr = days[date];
  let prev = days[date - 1];

  if (date + 1 > days.length - 1) {
    next = days[0];
  }
  if (date - 1 < 0) {
    prev = days[days.length - 1];
  }
  return {
    next,
    curr,
    prev,
  };
};

console.log(daysOfWeek());
