console.log("Task-3-1");

const filterNumbers = array => {
    const newArray = array.map(item => String(item));
    const result = newArray.filter(item => item.length <= 3).map(item=>Number(item));
    return result;
};

console.log(filterNumbers([12, 6547, 154, 5126, 9745, 248, 741]));

//-------------------------------------------------------------------------------------
console.log("Task-3-2");
const moreThanZero = (number) => {
    const str = String(number).split('');
    const result = str.every(item => item > 0);
    return result;

};

console.log(moreThanZero(12345));
console.log(moreThanZero(1-2345));

//-------------------------------------------------------------------------------------
console.log("Task-3-3");

const splitArray = array => {
    let newArray = array.join('');
    newArray = newArray.split('');
    return newArray;
};

console.log(splitArray([123, 456, 789]));

//-------------------------------------------------------------------------------------
console.log("Task-3-4");

const sumOfElements = () => {
    let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
    ];
    
    let sum = 0;
    for (const element of data) {
        for (const key in element) {
            sum += element[key];
        }
    }
    return sum;
};

console.log(sumOfElements());