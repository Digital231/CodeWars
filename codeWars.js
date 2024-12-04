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
