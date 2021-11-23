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

// console.log(countEvenOnRange(115));

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