// Check if a given Year is Leap Year
// You are given an Integer n. Return true if It is a Leap Year otherwise return false. A leap year is a year that contains an additional day, February 29th, making it 366 days long instead of the usual 365 days. Leap years are necessary to keep our calendar in alignment with the Earth's revolutions around the Sun.

// Note: A year is a leap year if "any one of " the following conditions are satisfied: 

// The year is multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.
// Example:

// Input: n = 4
// Output: true
// Explanation: 4 is not divisible by 100 and is divisible by 4 so its a leap year

// Input: n = 2021
// Output: false
// Explanation: 2021 is not divisible by 100 and is also not divisible by 4 so its not a leap year

const isArmstrongNumbers = (n) => {
   if(n<0||!Number.isInteger(n)) return false; // only positive && non decimal number
   if(n ===0) return true;
   const pow = String(n).length;
   let num = n;
   let sum=0;
   while(num>0){
    const digit = num%10;
    sum+=Math.pow(digit,pow)
    num=Math.floor(num/10);
   }
   return sum===n;
}                   
console.log(isArmstrongNumbers(153))
console.log(isArmstrongNumbers(9474))
console.log(isArmstrongNumbers(123))

export { isArmstrongNumbers }