// map method
// array map arrayiig ooriig ni oorchlohgvi
// map neg function awna , tuhain fucntion bas neg utga awna
// map method (for loop)=  shine array vvsgej ogno , shine array ni huuchin arraytai length ijil bn
// ymar array vvsgehee map iin return eer shiidne

let ages = [10, 203, 40, 30, 50];
let mapAges = ages.map((age) => {
  return { value: 10 * age };
});
console.log("mapAges", mapAges);

// mapAges [
//   { value: 100 },
//   { value: 2030 },
//   { value: 400 },
//   { value: 300 },
//   { value: 500 }
// ]
let data = [
  { name: "boldo", age: 18, grade: 11, gender: "male", balance: 3000 },
  { name: "dorjo", age: 21, grade: 11, gender: "male", balance: 2000 },
  { name: "tsetsge", age: 20, grade: 11, gender: "female", balance: 1000 },
  { name: "dulma", age: 15, grade: 11, gender: "female", balance: 3500 },
];

let newStudents = data.map((student) => {
  return { name: student.name, age: student.age, grade: student.grade + 1 };
});
console.log("newStudent", newStudents);

//filter
//filter ooriig ni oorchlohgvi
// shine array vvsgej ogno
// filter method neg function avna, tuhain fucntion neg utga avna
// return deer true bh bvh elementiig tsugluuluuad butsaana

let filterAge = ages.filter(() => {});

// sort method
// sort metho function avna
// avjgaa fucntion 2 utga orj irne
// return deer + esvel - too butsaana

ages.sort((a, b) => {
  return false;
});

// nasand hvrsen suragchdiig filterlej oloh function bich
const findAdultStudents = (arr) => {
  let adult = arr.filter((student) => {
    return student.age > 17;
  });
  return adult;
};
let resultAdult = findAdultStudents(data);
console.log("adult", resultAdult);

// gender ogongvvt tuhain gendereer filterlej ogoh function bich

const findGender = (arr, gender) => {
  let filteredByGender = arr.filter((student) => {
    return student.gender === gender;
  });
  return filteredByGender;
};
let resultByGender = findGender(data, "male");
console.log("filteredByGender=", resultByGender);

// nasaar n sortloh function bich

const sortByAge = (arr) => {
  let sortedByAge = arr.sort((student2, student1) => {
    if (student2.age > student1.age) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedByAge;
};
let resultSortByAge = sortByAge(data);
console.log("sortByAge=", resultSortByAge);

// neg too ogonguut tuhain toonoos ih balanactei surgchdiig yalgaj ogoh function bich

const findRichStudents = (arr, balance) => {
  let richStudents = arr.filter((student) => {
    return student.balance > balance;
  });
  return richStudents;
};
let resultRichStudent = findRichStudents(data, 2100);
console.log("richStudents=", resultRichStudent);

// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students,"3A") => [{name: "boldo",age: 3,grade: 11,gender: "male",balance: 1231,classCode:"3A"},...]

const addClassCodeToStudents = (arr, text) => {
  let newData = arr.map((student) => {
    return { name: student.name, age };
  });
  return;
};
let resultAddClassCodeToStudnets = addClassCodeToStudents(
  data,
  "classCode:'3A' "
);
console.log("addField=", resultAddClassCodeToStudnets);

// removeGenders from student array function bich .
