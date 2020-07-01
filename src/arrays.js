const getNthElement = (index, array) => {
  while (index >= array.length) {
    index -= array.length;
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array = array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array];
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  function upper(x) {
    return x.toUpperCase();
  }
  return strings.map(upper);
};

const reverseWordsInArray = strings => {
  function reverseString(x) {
    return x.split("").reverse().join("");
  }
  return strings.map(reverseString);
};

const onlyEven = numbers => {
  return numbers.filter(num => num%2 === 0);
};

const removeNthElement2 = (index, array) => {
  const spliceArr = [...array]; // creates a clone //
  spliceArr.splice(index, 1);
  return spliceArr;
};

const elementsStartingWithAVowel = strings => {
  function startsWithVowel(str) {
    var vowelRegex = '^[aieouAIEOU].*'
    if (str.match(vowelRegex)) {
      return str;
    }
  }
  return strings.filter(startsWithVowel)
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  const sum = numbers.reduce(function(total, num) { // arguments are total and currentValue//
    return total + num;
  }, 0);
  return sum;
};

const sortByLastLetter = strings => {
  function lastCharVal(str) {
    return str.charCodeAt(str.length - 1);
  }
  return strings.sort(function(a, b){
    return lastCharVal(a) - lastCharVal(b);
  });
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
