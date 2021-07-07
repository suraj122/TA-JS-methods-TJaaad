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
    return item.includes("is");
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

// - Find longest string in strings

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
numbers = [1, 12, 4, [18, 9, 7, 11], 3, 101, 5, 6, 9];
// - Make a subset of strings array ['a','collection']
strings = ["This", "is", ["a", "collection"], "of", "words"];

// - Replace 12 & 18 with 1221 and 1881
numbers[numbers.indexOf(12)] = 1221;
numbers[numbers.flat(Infinity).indexOf(18)] = 1881;
console.log(numbers);
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

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
let newArr = [];
customers.forEach((item) => {
  newArr.push(item.firstname);
});
console.log(newArr);
// - Create new array with all the full names (ex: "Joe Blogs")
let newFullArr = [];
customers.forEach((item) => {
  newFullArr.push(item.firstname + " " + item.lastname);
});
console.log(newFullArr);
// - Sort the array created above alphabetically
newFullArr.sort();
console.log(newFullArr);
// - Create a new array that contains only user who has at least one vowel in the firstname.
