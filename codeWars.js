function squareSum(numbers) {
  let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sum += element * element;
  }
  return sum;
}

function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

function booleanToString(b) {
  return "`" + b + "`";
}

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = 0;

  for (let i = 0; i < classPoints.length; i++) {
    const el = classPoints[i];
    sum += el / classPoints.length;
  }

  return true ? yourPoints > sum : false;
}

function basicOp(operation, value1, value2) {
  //Code
  let result = 0;
  if (operation == "+") {
    result += value1 + value2;
  } else if (operation == "-") {
    result += value1 - value2;
  } else if (operation == "/") {
    result += value1 / value2;
  } else if (operation == "*") {
    result += value1 * value2;
  } else {
    result = 0;
  }

  return result;
}

const reverseSeq = (n) => {
  const reversedArray = [];

  for (let i = n; i > 0; i--) {
    reversedArray.push(i);
  }

  return reversedArray;
};

function countBy(x, n) {
  let z = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += x;
    z.push(sum);
  }

  return z;
}

countBy(2, 5);

// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

function rentalCarCost(d) {
  // Your solution here
  const costPerDay = 40;
  const totalCost = 0;
  const smallDiscout = 20;
  const bigDiscount = 50;
  let cost = 0;

  if (d >= 7) {
    return costPerDay * d - bigDiscount;
  } else if (d >= 3) {
    return costPerDay * d - smallDiscout;
  } else {
    return costPerDay * d;
  }
}

function positiveSum(arr) {
  let positiveArr = [];
  let sum = 0;

  if (arr.length === 0) return (sum = 0);

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (arr[i] > 0) {
      positiveArr.push(el);
      sum += el;
    }
  }
  return sum;
}

// [1, -4, 7, 12] => 1+ 7 + 12 = 20

function sumArray(array) {
  let highestNum = -99999;
  let lowestNum = 99999;
  let arrSum = 0;

  if (array.length <= 1) return "zero";
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > highestNum) highestNum = element;
    if (element < lowestNum) lowestNum = element;
  }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    arrSum += element;
  }

  return arrSum - lowestNum - highestNum;
}

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function newSumArray(array) {
  let minNumber = Math.min(...array);
  let maxNumber = Math.max(...array);
  const totalSum = array.reduce((a, c) => a + c, 0);

  return console.log(totalSum - minNumber - maxNumber);
}

function removeExclamationMarks(s) {
  if (s.includes("!")) return console.log(s.replace("!", ""));
  return "";
}

function repeatStr(n, s) {
  let fullString = "";

  for (let i = 0; n > i; i++) {
    fullString += s;
  }
  return fullString;
}

function fakeBin(x) {
  let result = "";

  for (let i = 0; i < x.length; i++) {
    const el = x[i];
    if (el < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}

function descendingOrder(n) {
  let numbersArr = Array.from(String(n), Number);
  let result = "";

  const sortedValues = numbersArr.toSorted((a, b) => b - a);

  return console.log(Math.max(...numbersArr), Number(sortedValues.join("")));
}

function makeNegative(num) {
  // Code? yes code!

  if (num < 0) {
    return num;
  } else {
    return num - (num + num);
  }
}

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

function XO(str) {
  //code here

  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    const el = str[i].toLowerCase();
    if (el == "x") {
      xCount++;
    } else if (el == "o") {
      oCount++;
    }
  }
  return xCount === oCount;
}

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function validatePIN(pin) {
  // Ensure input is a string
  const pinStringed = String(pin).trim();
  //if input includes new line return false
  if (pin.includes("\n")) {
    return false;
  }

  // Check if pin consists of only digits and has valid length
  if (
    (pinStringed.length === 4 || pinStringed.length === 6) &&
    /^[0-9]+$/.test(pinStringed)
  ) {
    return true;
  }

  return false;
}

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
