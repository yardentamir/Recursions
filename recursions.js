///--------loops---------///
console.log("loops:");

function loops(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}

loops(5);

///---------with exit--------///

console.log("withExit:");

function withExit(num) {
  if (num === 0) return;
  console.log(num);
  withExit(num - 1);
  // console.log(num);
}

withExit(5);

///-------without exit----------///

// console.log("withoutExit:");
// function withoutExit(num) {
//   withoutExit(num - 1);
//   console.log(num);
// }

// withoutExit(5);

///-------reverse string----------///

console.log("reverse string recursion:");

function reverseString(s) {
  if (s.length === 0) return s;
  // console.log(s.slice(1).concat(s[0]));
  return reverseString(s.slice(1)).concat(s[0]);
}

console.log(reverseString(["h", "e", "l", "l", "o"]));

///---reverse string loop----///

console.log("reverse string loop:");

function reverseStringLoop(s) {
  // let n = s.length - 1;
  // if (n === -1) return s;
  // const middle = parseInt(s.length / 2);
  // for (let i = 0; i < middle; i++) {
  //   s[i] = s[n];
  // }
  // s.pop();

  for (let i = 0; i < s.length; i++) {
    s.splice(i, 0, s.pop());
  }
  return s;
}
console.log(reverseStringLoop(["h", "e", "l", "l", "o"]));

///----reverse string js---///

console.log("reverse string js:");

function reverseStringJs(s) {
  return s.reverse();
}
console.log(reverseStringJs(["h", "e", "l", "l", "o"]));

///----fibonacci recursion---///

function fibonacci(num) {
  if (num < 2) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));

///----exponent recursion---///

function exponent(a, n) {
  if (n === 1) return a;
  return (a *= exponent(a, n - 1));
}

console.log(exponent(5, 2));

///---yishay----///

function expoRecur(base, result) {
  if (result === 1) {
    return 0;
  } else if (base === result) {
    return 1;
  } else return expoRecur(base, result / base) + 1;
}

// ----- //
function binarySearch(arr, goal) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    mid = Math.floor((start + end) / 2); // creating floored middle point
    if (goal === arr[mid]) {
      // exit statment.
      return mid;
    }
    if (goal > arr[mid]) {
      start = mid + 1;
    } else if (goal < arr[mid]) {
      end = mid - 1;
    }
  }
}

const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

console.log(binarySearch(arr, 23));

//------------------------//

function binarySearchRecursive(arr, goal, start = 0, end = arr.length - 1) {
  mid = Math.floor((start + end) / 2);
  if (goal === arr[mid]) {
    return mid;
  }
  if (goal > arr[mid]) return binarySearchRecursive(arr, goal, mid + 1, end);
  else if (goal < arr[mid])
    return binarySearchRecursive(arr, goal, start, mid - 1);
}

//-----------------///

// function decode(str) {
//   if (str.length < 2) return str;
//   if (/\d/.test(str)) {
//   }
// }

// console.log(decode("3[a]2[b]"));

const decodeString = (s) => {
  if (s === "") {
    return "";
  } else if (/[A-Za-z]/.test(s[0])) {
    // Next character is a letter
    // Get next sequence of letters
    let sub = s.match(/[A-Za-z]+/).join();
    // Remove next sequence of letters from s
    s = s.replace(/[A-Za-z]+/, "");
    return sub + decodeString(s);
  } else if (/\d/.test(s[0])) {
    // Next character is a number
    // Get the next number
    let num = s.match(/\d+/).join("");
    // Remove the next number
    s = s.replace(/\d+/, "");
    // Get into sub first parenthesis substring
    let sub = getNextFirstParenthesis(s);
    // Decode substring from first outer parenthesis + decode rest of s
    return (
      decodeString(sub.slice(0, sub.length - 1)).repeat(num) +
      decodeString(s.slice(sub.length + 1))
    );
  }
};
const getNextFirstParenthesis = (s) => {
  let stackCounter = 1;
  let sub = "";
  for (let i = 1; stackCounter > 0; i++) {
    if (s[i] === "[") {
      stackCounter++;
    } else if (s[i] === "]") {
      stackCounter--;
    }
    sub += s[i];
  }
  return sub;
};
console.log(decodeString("2[a2[3[b]z]y]"));
console.log(decodeString("2[a3[b]]c"));

//--------------//

var decodeStringRec = function (s, x) {
  let buildStr = "",
    lastestNumber = "";
  for (let i = x; i < s.length; i += 1) {
    let currChar = s[i];
    if (currChar === "[") {
      let [str, index] = decodeStringRec(s, i + 1);
      buildStr += str.repeat(lastestNumber);
      lastestNumber = "";
      i = index;
    } else if (currChar === "]") {
      return [buildStr, i];
    } else {
      if ("a" <= currChar && currChar <= "z") {
        buildStr += currChar;
      } else {
        lastestNumber += currChar;
      }
    }
  }
  return buildStr;
};

var decodeString = function (s) {
  return decodeStringRec(s, 0);
};

///---------////

const decodeString = (str) => {
  if (str.indexOf("[") === -1) return str;
  const startBracet = str.indexOf("[");
  let counter = 1;
  let endBracet = 1;
  let subString = "";
  for (let i = startBracet + 1; i < str.length; i++) {
    if (!counter) {
      i === str.length;
    } else if (str[i] === "[") {
      counter++;
    } else if (str[i] === "]") {
      counter--;
      if (!counter) {
        subString = str.substring(startBracet + 1, i);
        endBracet = i;
      }
    }
  }
  return decodeString(
    str.slice(0, startBracet - 1) +
      subString.repeat(Number(str[startBracet - 1])) +
      str.slice(endBracet + 1)
    // only works for single-digit numbers currently
  );
};

console.log(decodeString("2[abc]3[cd]ef"));
