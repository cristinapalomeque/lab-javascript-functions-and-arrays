function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}

function findLongestWord(arr) {
  if (!arr || arr === 0) return null;
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

function sumNumbers(arr) {
  if (!arr || arr === 0) return null;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    } else if (typeof arr[i] === "string") {
      sum += arr[i].length;
    } else if (typeof arr[i] === "boolean") {
      sum += arr[i] ? 1 : 0;
    } else {
      throw "error";
    }
  }
  return sum;
}

function averageNumbers(nums) {
  if (!num || num === 0) return null;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let result = sum / nums.length;
  return result;
}

function averageWordLength(arr) {
  if (!arr || arr === 0) return null;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }
  let result = sum / arr.length;
  return result;
}

function avg(arr) {
  if (!arr || arr === 0) return null;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "string") {
      sum += arr[i].length;
    } else if (arr[i] === "number") {
      sum += arr[i];
    } else if (arr[i] === "boolean") {
      sum += arr[i] ? 1 : 0;
    } else {
      throw "error";
    }
  }
  let result = sum / arr.length;
  return result;
}

function uniquifyArray(word) {
  if (!word || word.length === 0) return null;
  let newArr = [];
  for (let i = 0; i < word.length; i++) {
    let element_actual = word[i];
    // si element_actual està al newArray => no lafegeixo, else, lafageixeo a newArray
    if (newArr.indexOf(element_actual) === -1) {
      newArr.push(element_actual);
    }
    return newArray;
  }
}

function doesWordExist(arr, word) {
  if (!arr || arr === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (word === arr[i]) {
      return true;
    } else {
      return false;
    }
  }
}

function howManyTimes(arr, search) {
  if (!arr || arr === 0) return 0;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      counter += 1;
    }
  }
  return counter;
}
