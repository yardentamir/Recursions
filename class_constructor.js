"use strict";

// class Stack {
//   constructor(l) {
//     this.items = [l];
//     this.square_open = "[";
//     this.curly_open = "{";
//     this.circular_open = "(";
//     this.square_close = "]";
//     this.curly_close = "}";
//     this.circular_close = ")";
//   }

//   pop() {
//     if (this.items.length == 0) return "Underflow";
//     return this.items.pop();
//   }

//   peek(s) {
//     for (let i = 0; i < s.length; i++) {
//       return this.items[this.items[0]];
//     }
//   }

//   printStack() {
//     let str = "";
//     for (let i = 0; i < this.items.length; i++) str += this.items[i];
//     return str;
//   }
// }

// function solution2(s) {
//   if (s === "") return;
//   let isValid = true;
//   const myStack = new Stack();
//   for (let char of s) {
//     if (
//       char === myStack.square_open ||
//       char === myStack.curly_open ||
//       char === myStack.circular_open
//     ) {
//       myStack;
//     }
//   }
//   return isValid;
// }
// console.log(solution2("{[()()]}"));
// console.log(solution2("{[(]}"));

//---------------------------------//

// class typeOfBracketsClass {
//   constructor() {
//     this.square_open = "[";
//     this.curly_open = "{";
//     this.circular_open = "(";
//     this.square_close = "]";
//     this.curly_close = "}";
//     this.circular_close = ")";
//   }

//   closingCircular(s) {
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === this.circular_close) {
//         return true;
//       } else return false;
//     }
//   }
//   closingSquare(s) {
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === this.square_close) return true;
//       else return false;
//     }
//   }
//   closingCurly(s) {
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === this.curly_close) return true;
//       else return false;
//     }
//   }
// }

// const typeOfBrackets = new typeOfBracketsClass();

// function solution(s) {
//   let isValid = true;
//   for (let i = 0; i < s.length; i++) {
//     // if (i === 0) {
//     //   console.log(s.substring(i + 1));
//     // }
//     if (s[i] === typeOfBrackets.circular_open) {
//       let cutStr = s.substring(i + 1);
//       if (!typeOfBrackets.closingCircular(cutStr)) {
//         isValid = false;
//         break;
//       }
//     }
//     if (s[i] === typeOfBrackets.square_open) {
//       let cutStr = s.substring(i + 1);
//       if (!typeOfBrackets.closingSquare(cutStr)) {
//         isValid = false;
//         break;
//       }
//     }
//     if (s[i] === typeOfBrackets.curly_open) {
//       let cutStr = s.substring(i + 1);
//       if (!typeOfBrackets.closingCurly(cutStr)) {
//         isValid = false;
//         break;
//       }
//     }
//   }
//   return isValid;
// }
// console.log(solution("{[()()]}"));
// console.log(solution("{[()()]}"));

//-------------------------------------//

function solution3(s) {
  if (s === "") return 1;
  let stack = [];
  for (let char of s) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else {
      let last = stack.pop();
      switch (char) {
        case ")":
          if (last !== "(") return 0;
          break;
        case "{":
          if (last !== "{") return 0;
          break;
        case "[":
          if (last !== "[") return 0;
          break;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution3("{[()()]}"));
console.log(solution3("{[()(]}"));
