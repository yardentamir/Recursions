//-------------opposite loop-------------///
for (let i = 100; i > 1; i -= 5) {
  console.log(i);
}

//-------------print numbers to n-------------///

const printToN = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

printToN(10);

//-------------count to n by t-------------///

const countX = (n, t) => {
  for (let i = t; i < n; i += t) {
    console.log(i);
  }
};

countX(10, 2);

//-------------print even digits-------------///

const printDigits = (n) => {
  console.log((n / 1) % 10);
  console.log(Math.floor((n / 10) % 10));
  console.log(Math.floor((n / 100) % 10));
  console.log(Math.floor((n / 1000) % 10));
};

printDigits(1258);

//-------------count even digits-------------///

const countEven2 = (n) => {
  let count = 0;
  for (let i = 1; i < n; i *= 10) {
    if (Math.floor((n / i) % 10) % 2 === 0) count++;
  }
  return count;
};

console.log(countEven2(125822));

//-------------count even digits-------------///

const countEven3 = (n) => {
  let count = 0;
  while (n) {
    count += n % 2 === 0;
    n = Math.floor(n / 10);
  }
  return count;
};
console.log(countEven3(125822));

///----------------------///

let count = 0;
const countEvenOnRange = (n) => {
  for (let i = 112; i < n + 1; i++) {
    for (let j = 1; j < i; j *= 10) {
      if (Math.floor((i / j) % 10) % 2 === 0) count++;
    }
  }
  return count;
};

console.log(countEvenOnRange(125));

//-------------quadratic-------------///

const printReverse = () => {
  for (let i = 100; i > -1; i -= 2) {
    console.log(i);
  }
};

printReverse();

//-------------quadratic-------------///

const quadratic = (a, b, c) => {
  var x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  var x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  console.log(x1);
  console.log(x2);
};

quadratic(1, 1, -1);

//-------------count characters obj-------------///

const countABCobj = (str) => {
  const obj = {};
  str = str.split(" ").join("");
  while (str) {
    obj[str[0]] ? obj[str[0]]++ : (obj[str[0]] = 1);
    str = str.substring(1);
  }
  return obj;
};

console.log(countABCobj("hello world how are you"));

//-------------count characters array-------------///

const countABCarr = (str) => {
  const letterArr = [];
  const countArr = [];
  str = str.split(" ").join("");
  while (str) {
    if (!letterArr.includes(str[0])) {
      letterArr.push(str[0]);
      countArr.push(1);
    } else {
      let index = letterArr.indexOf(str[0]);
      countArr[index]++;
    }
    str = str.substring(1);
  }
  return countArr;
};

console.log(countABCarr("hello world how are you"));

//-------------upper without build-in function-------------///

function toUpper(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++)
    newStr += String.fromCharCode(
      str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123
        ? str.charCodeAt(i) - 32
        : str.charCodeAt(i)
    );
  return newStr;
}
console.log(toUpper("hello how are you"));

///----------------mail validation----------------//

const checkEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

console.log(checkEmail("myemail@gmail.com"));

//-------------password validation-------------///

const checkPassword = (password) => {
  let pattern = new RegExp(
    "^(?=(.*[a-z]){1,})(?=(.*[A-Z]{2,}))(?=(.*[0-9]){3,})"
  ); //Regex: At least 3 numerical numbers, 1 lower case letter, 2 upper case letter,
  return pattern.test(password);
};

console.log(checkPassword("367rEE"));
console.log(checkPassword("367rE"));
console.log(checkPassword("36rEE"));

//-------------strike order-------------///

const isStrike = (num) => {
  const arr = num.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    if (parseInt(arr[i]) > parseInt(arr[i + 1])) return false;
  }
  return true;
};

console.log(isStrike("1234569"));

///----------palindrome string-----------///

const poly = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

console.log(poly("iaebeai"));
console.log(poly("aba"));
console.log(poly("notpolidrome"));

///----------palindrome number-----------///

const polyNum = (num) => {
  let rest,
    temp = num,
    final = 0;

  while (num > 0) {
    rest = num % 10;
    num = parseInt(num / 10);
    final = final * 10 + rest;
  }

  return final === temp;
};

console.log(polyNum(123321));
console.log(polyNum(1921));

//----------Increasing order---------///

const BeforeNumber = (nums) => {
  const arr = nums.split("");
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (parseInt(arr[i]) + 1 === parseInt(arr[i + 1])) {
      counter++;
    }
  }
  return counter;
};

console.log(BeforeNumber("3452978"));

//---------max occur letter in string--------///

const countChar = (s) => {
  const letterArr = [];
  const countArr = [];
  s = s.split(" ").join("");
  while (s) {
    if (!letterArr.includes(s[0])) {
      letterArr.push(s[0]);
      countArr.push(1);
    } else {
      let index = letterArr.indexOf(s[0]);
      countArr[index]++;
    }
    s = s.substring(1);
  }
  return Math.max(...countArr);
};

console.log(countChar("aaaccb"));
console.log(countChar("aaaccccccccb"));

///------------------------------------------///
