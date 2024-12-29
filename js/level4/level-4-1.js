const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log("Task-4-1");

const dayOfWeek = () => {
  const date = new Date();
  const day = date.getDay();
  return days[day];
};

console.log(dayOfWeek());
//-------------------------------------------------------------------------------------
console.log("Task-4-2");
const dayOfWeekTwo = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDay();
  return days[day];
};
console.log(dayOfWeekTwo("2024-12-28"));
console.log(dayOfWeekTwo("2024-07-22"));

//-------------------------------------------------------------------------------------
console.log("Task-4-3");
const secondsToDays = (sec) => {
  const amountOfDays = sec / (60 * 60 * 24);
  return `${sec} seconds equals ${amountOfDays.toFixed(3)} day/s`;
};

console.log(secondsToDays(86400));
console.log(secondsToDays(129600));

//-------------------------------------------------------------------------------------
console.log("Task-4-4");
const cutStr = (value, str) => {
  const newStr = str.slice(0, value);
  return newStr;
};

console.log(cutStr(6, "You are beautiful"));

//-------------------------------------------------------------------------------------
console.log("Task-4-5");

const getZodiac = (dateStr) => {
  const [month, day] = dateStr.split('-').map(Number);
  let zodiac = "";

  switch (month) {
    case 1:
      zodiac = day <= 20 ? "Capricorn" : "Aquarius";
      break;
    case 2:
      zodiac = day <= 19 ? "Aquarius" : "Pisces";
      break;
    case 3:
      zodiac = day <= 20 ? "Pisces" : "Aries";
      break;
    case 4:
      zodiac = day <= 20 ? "Aries" : "Taurus";
      break;
    case 5:
      zodiac = day <= 21 ? "Taurus" : "Gemini";
      break;
    case 6:
      zodiac = day <= 21 ? "Gemini" : "Cancer";
      break;
    case 7:
      zodiac = day <= 22 ? "Cancer" : "Leo";
      break;
    case 8:
      zodiac = day <= 23 ? "Leo" : "Virgo";
      break;
    case 9:
      zodiac = day <= 23 ? "Virgo" : "Libra";
      break;
    case 10:
      zodiac = day <= 23 ? "Libra" : "Scorpio";
      break;
    case 11:
      zodiac = day <= 22 ? "Scorpio" : "Sagittarius";
      break;
    case 12:
      zodiac = day <= 21 ? "Sagittarius" : "Capricorn";
      break;
    default:
      zodiac = "Invalid date";
  }

  return `Your zodiac is ${zodiac}`;
};

console.log(getZodiac("04-11")); 
console.log(getZodiac("12-25")); 
console.log(getZodiac("07-25"));
console.log(getZodiac("09-15"));


//-------------------------------------------------------------------------------------
console.log("Task-4-6");
