let ages = [10, 203, 43, 30, 50];
let ageSort = [10, 30, 43, 50, 203];

let duu = ages.map((age) => {
  return age % 2 == 0;
});
console.log(duu);

let students = [
  {
    name: "boldo",
    age: 3,
    grade: 11,
    gender: "male",
    balance: 1231,
  },
  {
    name: "dorjo",
    age: 20,
    grade: 11,
    gender: "male",
    balance: 33,
  },
  {
    name: "tsetsge",
    age: 10,
    grade: 11,
    gender: "female",
    balance: 222,
  },
  {
    name: "dulma",
    age: 9,
    grade: 11,
    gender: "female",
    balance: 12,
  },
];

let newStudents = students.map((student) => {
  return {
    name: student.name,
    age: student.age,
    grade: student.grade + 1,
  };
});
console.log(students);
console.log(newStudents);

// filter
// filter ooriig n oorchlohgui
// shine array uusgej ogno
// filter method neg function avna, tuhain function neg utga avna
// return deer true baih buh element iig tsugluulaad array butsaana
const filtered = ages.filter((age) => {
  return age % 2 == 0;
});
console.log(ages);
console.log(filtered);
