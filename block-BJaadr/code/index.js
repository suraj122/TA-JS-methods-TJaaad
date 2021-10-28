// NOTE: You can only use the (reduce) array method to solve this exercise:

function countAllPeople() {
  return got.houses.reduce((acc, cv, i) => {
    return acc + got.houses[i].people.length;
  }, 0);
}

function peopleByHouses() {
  let people = got.houses.reduce(
    (acc, cv, i) => ({
      ...acc,
      [got.houses[i].name]: got.houses[i].people.length,
    }),
    {}
  );
  return people;
}

function everyone() {
  let allPeople = got.houses.reduce((acc, cv, i) => {
    acc.push(
      got.houses[i].people.map((item) => {
        return item.name;
      })
    );
    return acc.flat(Infinity);
  }, []);

  return allPeople;
}

function nameWithS() {
  let allPeopleWithS = got.houses.reduce((acc, cv, i) => {
    acc.push(
      got.houses[i].people
        .filter((item) => {
          if (item.name.toLowerCase().includes("s") == true) {
            return item.name;
          }
        })
        .map((item) => item.name)
    );
    return acc.flat(Infinity);
  }, []);
  return allPeopleWithS;
}

function nameWithA() {
  let allPeopleWithA = got.houses.reduce((acc, cv, i) => {
    acc.push(
      got.houses[i].people
        .filter((item) => {
          if (item.name.toLowerCase().includes("a") == true) {
            return item.name;
          }
        })
        .map((item) => item.name)
    );
    return acc.flat(Infinity);
  }, []);
  return allPeopleWithA;
}

function surnameWithS() {
  let surNameWithS = got.houses.reduce((acc, cv, i) => {
    acc.push(
      got.houses[i].people
        .filter((item) => {
          return item.name
            .split(" ")
            [item.name.split(" ").length - 1].toLowerCase()
            .startsWith("s");
        })
        .map((item) => item.name)
    );
    return acc.flat(Infinity);
  }, []);
  return surNameWithS;
}

function surnameWithA() {
  let surNameWithA = got.houses.reduce((acc, cv, i) => {
    acc.push(
      got.houses[i].people
        .filter((item) => {
          return item.name
            .split(" ")
            [item.name.split(" ").length - 1].toLowerCase()
            .startsWith("a");
        })
        .map((item) => item.name)
    );
    return acc.flat(Infinity);
  }, []);
  return surNameWithA;
}

function peopleNameOfAllHouses() {
  let people = got.houses.reduce(
    (acc, cv, i) => ({
      ...acc,
      [got.houses[i].name]: got.houses[i].people.map((item) => {
        return item.name;
      }),
    }),
    {}
  );
  return people;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), "with s");
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), "surname with s");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
