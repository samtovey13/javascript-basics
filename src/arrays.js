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
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = [...array];
  newArray.push(element);
  return newArray;
};
// alternative:
// array.concat([element]);

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};
// alt:
// numbers.map(number => String(number));

const uppercaseWordsInArray = strings => {
  function upper(x) {
    return x.toUpperCase();
  }
  return strings.map(upper);
};
// alt:
// return strings.map(word => word.toUpperCase());

const reverseWordsInArray = strings => {
  function reverseString(x) {
    return x.split("").reverse().join("");
  }
  return strings.map(reverseString);
};
// alt:
// return strings.map(word => word.split('').reverse().join(''));

const onlyEven = numbers => {
  return numbers.filter(num => num%2 === 0);
};

const removeNthElement2 = (index, array) => {
  const spliceArr = [...array]; // creates a clone //
  spliceArr.splice(index, 1);
  return spliceArr;
};
// alt:
//   return array.filter((_, itemIndex) => itemIndex !== index);

const elementsStartingWithAVowel = strings => {
  function startsWithVowel(str) {
    var vowelRegex = '^[aieouAIEOU].*'
    if (str.match(vowelRegex)) {
      return str;
    }
  }
  return strings.filter(startsWithVowel)
};
// alt:
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// return strings.filter(word => {
//    const firstLetter = word[0].toLowerCase();  
//    return vowels.includes(firstLetter);
//  });

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};
// alt:
// string.split(' ').join('');

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
// alt:
//  const reverseString = (item) => item.split('').reverse().join('');
//  return strings.map(reverseString).sort().map(reverseString);

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
