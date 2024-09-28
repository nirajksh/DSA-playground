// keka javascript interview question solved
console.log("Hello Javascript");

// function newArray(arr) {
//   return arr.filter((data) => data % 2 == 0);
// }

//factorial of given number

// function factorial(num) {
//   if (num == 0 || num == 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// let result = factorial(8);
// console.log(result);

//check given number is prime

// function isPrime(num) {
//   if (num == 1) {
//     return false;
//   }

//   for (let i = 2; i <= num.length; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let result = isPrime(14);
// console.log(result);

// function fabonacci(num) {
//   if (num <= 0) return [];
//   if (num === 1) return [0];
//   let sequence = [0, 1];
//   while (sequence.length < num) {
//     sequence.push(
//       sequence[sequence.length - 1] + sequence[sequence.length - 2]
//     );
//   }
//   return sequence;
// }
// console.log(fabonacci(8));

function number(num) {
  let newNum = [0, 1];
  while (newNum.length < num) {
    newNum.push(newNum[newNum.length - 1] + newNum[newNum.length - 2]);
  }
  return newNum;
}
console.log(number(8));
