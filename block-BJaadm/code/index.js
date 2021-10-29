let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map((p) => p.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((p) => p.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((p) => p.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let startsWithJP = peopleName.filter((p) => {
  if (p.toUpperCase().startsWith("J") || p.toUpperCase().startsWith("P")) {
    return p;
  }
});
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(
  peopleName.filter((p) => {
    if (p.toUpperCase().startsWith("A") || p.toUpperCase().startsWith("C")) {
      return p;
    }
  }).length
);
// Log all the filtered male ('M') in persons array
console.log(
  persons
    .filter((item) => {
      return item.sex === "M";
    })
    .map((item) => item.name)
);
// Log all the filtered female ('F') in persons array
console.log(
  persons
    .filter((item) => {
      return item.sex === "F";
    })
    .map((item) => item.name)
);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(
  persons
    .filter((item) => {
      return item.sex === "F";
    })
    .filter((item) => {
      return (
        item.name.toUpperCase().startsWith("C") ||
        item.name.toUpperCase().startsWith("J")
      );
    })
    .map((item) => item.name)
);
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((g) => g % 2 === 0));
// Find the first name that starts with 'J' in persons array and log the object
console.log(
  persons.filter((p) => p.name.toUpperCase().startsWith("J")).shift()
);
// Find the first name that starts with 'P' in persons array and log the object
console.log(
  persons.filter((p) => p.name.toUpperCase().startsWith("P")).shift()
);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
// Filter all the female from persons array and store in femalePersons array

// Filter all the male from persons array and store in malePersons array

// Find the sum of all grades and store in gradeTotal

// Find the average grade

// Find the average grade of male

// Find the average grade of female

// Find the highest grade

// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

// Sort the peopleGrade in descending order

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
