// for (let i = 100; i > 1; i -= 5) {
//   console.log(i);
// }

///----------------------------///

//כתוב פונקציה printToN המקבלת מספר שלם n ומדפיסה את כל המספרים מ0 ועד n.

// const printToN = (n) => {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// };

// printToN(10);

///------------------------//
//
//כתוב פונקציה  countX המקבלת 2 פרמטרים : n ,t
//הפונקציה מחזירה כמה מספרים בטווח של 1 עד n מתחלקים ב-t.

// const countX = (n, t) => {
//   for (let i = t; i < n; i += t) {
//     console.log(i);
//   }
// };

// countX(10, 2);

///------------------------//

// כתוב פונקציה countEven המקבלת מספר שלם ומחזירה כמה ספרות במספר הן זוגיות.
// לדוגמא במספר : 1596 הפונקציה תחזיר 1
// 1640 תחזיר 3

// const countEven2 = (n) => {
//   console.log((n / 1) % 10);
//   console.log(Math.floor((n / 10) % 10));
//   console.log(Math.floor((n / 100) % 10));
//   console.log(Math.floor((n / 1000) % 10));
// };

// countEven2(1258);

///--------////////

// let count = 0;
// const countEven2 = (n) => {
//   for (let i = 1; i < n; i *= 10) {
//     if (Math.floor((n / i) % 10) % 2 === 0) count++;
//   }
//   return count;
// };

// console.log(countEven2(125822));

///---------------------////

// const countEven3 = (n) => {
//   let count = 0;
//   while (n) {
//     count += n % 2 === 0;
//     n = Math.floor(n / 10);
//   }
//   return count;
// };
// console.log(countEven3(125822));

///----------------------///

// כתוב פונקציה countEvenOnRange המקבלת n שהוא מספר תלת ספרתי לפחות ומחזירה כמה ספרות זוגיות יש בטווח של 111 עד n.

// let count = 0;
// const countEvenOnRange = (n) => {
//   for (let i = 112; i < n + 1; i++) {
//     for (let j = 1; j < i; j *= 10) {
//       if (Math.floor((i / j) % 10) % 2 === 0) count++;
//     }
//   }
//   return count;
// };

// console.log(countEvenOnRange(125));
///----------------------------///

///----------------------------/

//כתוב פונקציה printReverse שמדפיסה את כל המספרים הזוגיים מ0 ועד 100 בסדר יורד.
// בונוס : לכתוב את הפונקציה בלי if :)

// const printReverse = () => {
//   for (let i = 100; i > -1; i -= 2) {
//     console.log(i);
//   }
// };

// printReverse();

//----------------------------///

//כתוב פונקציה quadratic המקבלת a,c,b ומחזירה פתרון של sמשוואה ריבועית,את התוצאה יש להציג בצורה הבאה לדוגמא:
// x1 = 5 , x2 = 9 .

// const quadratic = (a, b, c) => {
//   var x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
//   var x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
//   console.log(x1);
//   console.log(x2);
// };

// quadratic(1, 1, -1);

//---------------------///

// כתוב פונקציה countABC המקבלת משפט , החזר מערך המציין כמה פעמים מופיעה כל אות.
// let countABC = (str) => {
//   let obj = {};
//   str = str.split(" ").join("");
//   while (str) {
//     obj[str[0]] ? obj[str[0]]++ : (obj[str[0]] = 1);
//     str = str.substring(1);
//   }
//   return obj;
// };

// console.log(countABC("hello world how are you"));

// // כתוב פונקציה countABC המקבלת משפט , החזר מערך המציין כמה פעמים מופיעה כל אות.
// let countABC = (str) => {
//   let letterArr = [];
//   let countArr = [];
//   str = str.split(" ").join("");
//   while (str) {
//     if (!letterArr.includes(str[0])) {
//       letterArr.push(str[0]);
//       countArr.push(1);
//     } else {
//       let index = letterArr.indexOf(str[0]);
//       countArr[index]++;
//     }
//     str = str.substring(1);
//   }
//   return countArr;
// };

// console.log(countABC("hello world how are you"));

/// ------------------------------///
// כתוב פונקציה toUpper המקבלת מחרוזת str באנגלית ומחזירה את המחרוזת באותיות גדולות (אין להשתמש בפעולה  toUpperCase
//   של js ).

// const toUpper = (str) => {
//   let upperStr = '';
// for (let i = 0; i < str.length; i++) {
//   upperStr+=String.fromCharCode(a.charCodeAt(x)>96 && a.charCodeAt(x)<123 ? a.charCodeAt(x)-32: a.charCodeAt(x))
// }
// return upperStr;
// }

// console.log(toUpper("hello world how are you"));

// function toUpper(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++)
//     newStr += String.fromCharCode(
//       str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123
//         ? str.charCodeAt(i) - 32
//         : str.charCodeAt(i)
//     );
//   return newStr;
// }
// console.log(toUpper("hello how are you"));

///--------------------------------//
// email validation

// const checkEmail = (email) => {
//   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
// };

// console.log(checkEmail("myemail@gmail.com"));

///-----------------------------------//
// pw validation

// const checkPassword = (password) => {
//   let pattern = new RegExp(
//     "^(?=(.*[a-z]){1,})(?=(.*[A-Z]{2,}))(?=(.*[0-9]){3,})"
//   ); //Regex: At least 3 numerical numbers, 1 lower case letter, 2 upper case letter,
//   return pattern.test(password);
// };

// console.log(checkPassword("367rEE"));
// console.log(checkPassword("367rE"));
// console.log(checkPassword("36rEE"));

//--------------------------///

// strike
// const isStrike = (num) => {
//   const arr = num.split("");
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (parseInt(arr[i]) > parseInt(arr[i + 1])) return false;
//   }
//   return true;
// };

// console.log(isStrike("1234569"));

//--------------------------//

//polindrome

// const poly = (str) => {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) return false;
//   }
//   return true;
// };

// console.log(poly("iaebeai"));
// console.log(poly("aba"));
// console.log(poly("notpolidrome"));

///---------------------///

// const polyNum = (num) => {
//   let rest,
//     temp = num,
//     final = 0;

//   while (num > 0) {
//     rest = num % 10;
//     num = parseInt(num / 10);
//     final = final * 10 + rest;
//   }

//   return final === temp;
// };

// console.log(polyNum(123321));
// console.log(polyNum(1921));

//-------------------///

//

// const BeforeNumber = (nums) => {
//   const arr = nums.split("");
//   let counter = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (parseInt(arr[i]) + 1 === parseInt(arr[i + 1])) {
//       counter++;
//     }
//   }
//   return counter;
// };

// console.log(BeforeNumber("3452978"));

//-----------------///
