// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
strings.splice(strings.length, 0, "called", "sentance");
console.log(strings);
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
console.log([...strings].shift());

// - Find all the words that contain 'is' use string method 'includes'
console.log(
  strings.filter((item) => {
    return item.includes("is");
  })
);
// - Find all the words that contain 'is' use string method 'indexOf'
console.log(
  strings.filter((item) => {
    return item.indexOf("is") !== -1;
  })
);
// - Check if all the numbers in numbers array are divisible by three use array method (every)

console.log(
  strings.every((item) => {
    return item % 3 === 0;
  })
);

// -  Sort Array from smallest to largest
console.log(
  [...numbers].sort((a, b) => {
    return a - b;
  })
);
// - Remove the last word in strings
console.log(strings.pop());
// - Find largest number in numbers
console.log(
  [...numbers]
    .sort((a, b) => {
      return a - b;
    })
    .pop()
);
// - Find longest string in strings
console.log(
  [...strings]
    .sort((a, b) => {
      return a.length - b.length;
    })
    .pop()
);
// - Find all the even numbers
console.log(numbers);
console.log(
  numbers.filter((item) => {
    return item % 2 === 0;
  })
);

// - Find all the odd numbers
console.log(
  numbers.filter((item) => {
    return item % 2 !== 0;
  })
);
// - Place a new word at the start of the array use (unshift)
strings.unshift("Exactly");
// - Make a subset of numbers array [18,9,7,11]
// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881
console.log(
  numbers.map((item) => {
    if (item === 12) {
      return 1221;
    } else if (item === 18) {
      return 1881;
    } else return item;
  })
);
// - Replace words in strings array with the length of the word
console.log(
  strings.map((item) => {
    return item.length;
  })
);
// - Find the sum of the length of words using above question
console.log(
  strings
    .map((item) => {
      return item.length;
    })
    .reduce((acc, item) => {
      return (acc += item);
    }, 0)
);
// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
console.log(
  customers.filter((item) => {
    return item.firstname.startsWith("J");
  })
);
// - Create new array with only first name
let firstName = customers.map((item) => {
  return item.firstname;
});

console.log(firstName);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = customers.map((item) => {
  return item.firstname + " " + item.lastname;
});
console.log(fullName);
// - Sort the array created above alphabetically
console.log(fullName.sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelName = customers.filter((item) => {
  if (
    item.firstname.toLowerCase().includes("a") ||
    item.firstname.toLowerCase().includes("e") ||
    item.firstname.toLowerCase().includes("i") ||
    item.firstname.toLowerCase().includes("o") ||
    item.firstname.toLowerCase().includes("u")
  ) {
    return true;
  }
});
console.log(vowelName);
