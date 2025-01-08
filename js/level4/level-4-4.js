console.log("Task-4-1");
const amountDev = number => {
    let result = [];
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            result.push(i);
        }
        
    }
    console.log(result);
    return result.length;
 };
console.log(amountDev(68));
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
console.log("Task-4-6");

const randomNumber = (N,array) => {
    let newArray = [];
    const [min, max] = array;
    for (let i = 0; i < N; i++) {
        newArray.push(Math.floor(Math.random(i) * (max - min + 1) + min));
        
    }
    return newArray;
};

console.log(randomNumber(10,[8,40]));