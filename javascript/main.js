console.log("hello javascript ");
// sum of two number
// function sumOfTwoNumber(a, b) {
//   return a + b;
// }

// const res = sumOfTwoNumber(56, 8);
// console.log(res);

//max number of array

// function maxNumber(arr) {
//   return Math.min(...arr);
// }
// const arr = [8, 5, 7, 9, 12, 1, 88];
// const res = maxNumber(arr);
// console.log(res);

// function maxNumber(arr) {
//   let res = [];
//   for (let i = 0; i <= arr.length; i++) {
//     res.push(arr[i]);
//   }
//   return res;
// }
// const arr = [8, 5, 7, 9, 12, 1, 88];
// const res = maxNumber(arr);
// console.log(res);

// given string palindrome or not

// function checkPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// const res = checkPalindrome("abcddcba");
// console.log(res);

// reverse the string

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// const res = reverseString("abhishek");
// console.log(res);

//another method try it     another way

// function reverse(str) {
//   for (let i = 0; i < str.length; i++) {
//     return str[i];
//   }
// }
// const res = reverse("abishek ");
// console.log(res);

//
// write pollyfills for forEach ,map,filter,find,Reduce method

let arr = [2, 4, 8, 5, 10, 12, 15];
// arr.forEach((currentvalue, index, arr) => {
//console.log(currentvalue, index, arr);
//   console.log(currentvalue * 2);
// });

// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }

//    console.log(this);
// };

// arr.myForEach((currentvalue) => {
//   console.log(currentvalue * 2);
// });
// const res = arr.map((item, index, arr) => console.log(item));

// Array.prototype.myMap = function (callback) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(callback(this[i], i, this));
//   }
// };

// arr.myMap((item, index) => {
//   console.log(item + 1000, index);
// });

//filter

// const res = arr.filter((item) => {
//   return item > 6;
// });
// console.log(res);

//pollyfills

// Array.prototype.myFilter = function (callback) {
//   let filterData = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       filterData.push(this[i]);
//     }
//   }
//   return filterData;
// };

// let res = arr.myFilter((item) => item > 5);

// console.log(res);

// pollyfill for find method

// let res = arr.find((item) => item > 5);

// console.log(res);

// Array.prototype.myFind = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) return this[i];
//   }

//   return findData;
// };

// let res = arr.myFind((item) => item > 5);
// console.log(res);
//pollyfill for reduce

let result = arr.reduce((accumulator, currentvalue, index, arr) => {
  return accumulator + currentvalue;
}, 1);
console.log(result);

Array.prototype.myreduce = function (callback, initialvalue) {
  let accumulator = initialvalue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

let res = arr.myreduce((acc, item) => acc + item, 1);
console.log(res);
