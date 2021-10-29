let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arr) {
  return [...arr].sort((a, b) => {
    return a.length - b.length;
  });
}
findLongestWord(words);
// - Convert the above array "words" into an array of length of word instead of word.
let length = words.map((item) => item.length);

// - Create a new array that only contains word with atleast one vowel.
let newArr = words.filter((item) => {
  if (
    item.includes("a") ||
    item.includes("e") ||
    item.includes("i") ||
    item.includes("o") ||
    item.includes("u")
  ) {
    return item;
  }
});
// - Find the index of the word "rhythm"
let index = words.indexOf("rhythm");

// - Create a new array that contians words not starting with vowel.
let noVowel = words.filter((item) => {
  if (
    item.includes("a") == false &&
    item.includes("e") == false &&
    item.includes("i") == false &&
    item.includes("o") == false &&
    item.includes("u") == false
  ) {
    return item;
  }
});
// - Create a new array that contianse words not ending with vowel
let notEndingWithVowel = words.filter((item) => {
  if (
    item.endsWith("a") == false &&
    item.endsWith("e") == false &&
    item.endsWith("i") == false &&
    item.endsWith("o") == false &&
    item.endsWith("u") == false
  ) {
    return item;
  }
});
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(arr) {
  return arr.reduce((acc, cv) => {
    return acc + cv;
  }, 0);
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let newArr3 = numbers.filter((item) => item % 3 === 0);
// - Create a new array that contains only even numbers
let evenNum = numbers.filter((item) => item % 2 === 0);
// - Create  a new array that contains only odd numbers.
let oddNum = numbers.filter((item) => item % 2 !== 0);
// - Create a new array that should have true for even number and false for odd numbers.
let arrWithTF = numbers.map((item) => {
  if (item % 2 === 0) {
    return true;
  } else return false;
});
// - Sort the above number in assending order.
numbers.sort((a, b) => a - b);

// - Does sort mutate the original array?
("Yes");
// - Find the sum of the numbers in the array.
let sum = numbers.reduce((acc, cv) => {
  return acc + cv;
}, 0);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arr) {
  return sum / numbers.length;
}
let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(arr) {
  return (
    strings
      .map((item) => item.length)
      .reduce((acc, cv) => {
        return acc + cv;
      }, 0) / strings.length
  );
}
