const students = {
  shantim: {
    attendance: 9,
    marks: 75,
    month: 3,
  }, // shantim’s attendance is good, marks is average.
  shopon: {
    attendance: 2,
    marks: 90,
    month: 2,
  }, // shopon's attendance is bad, marks is good.
  sazid: {
    attendance: 6,
    marks: 79,
    month: 6,
  }, // sazid's attendance is average, marks is average.
  shuvo: {
    attendance: 9,
    marks: 60,
    month: 9,
  },
  nusrat: {
    attendance: 10,
    marks: 75,
    month: 8,
  },
  sammit: {
    attendance: 9,
    marks: 99,
    month: 11,
  },
  kakon: {
    attendance: 10,
    marks: 33,
    month: 4,
  },
  sourov: {
    attendance: 4,
    marks: 75,
    month: 5,
  },
  nebir: {
    attendance: 9,
    marks: 90,
    month: 2,
  },
};

const expectedSpeech =
  "Hello Everyone. shantim’s attendance is good, marks is average. shopon's attendance is bad, marks is good. sazid's attendance is average, marks is average. ...{result for other's} Thank you.";
// TEST 2
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
const color = {
  jan: "magenta",
  feb: "brown",
  mar: "purple",
  apr: "blue",
  oct: "grey",
  may: "sky-blue",
  jul: "yellow",
  jun: "green",
  aug: "orange",
  sep: "red",
  dec: "white",
  nov: "black",
};
const expectedSpeech2 =
  "Hello Everyone. shantim’s colour is purple. shopon's colour is brown. sazid's color is green. ...{result for other's} Thank you.";

//solution-1
let text1 = "";

Object.keys(students).map(function (i) {
  let attn = students[i]["attendance"];
  let mark = students[i]["marks"];
  text1 += `${i}'s attendance is ${
    attn >= 8
      ? `good`
      : attn <= 7 && attn >= 4
      ? `average`
      : `bad`
  } , marks is ${
    mark >= 80
      ? `good. `
      : mark <= 79 && mark >= 40
      ? `average. `
      : `bad. `
  }`;
});

const test1Result = `Hello Everyone. ${text1}Thank you.`;

console.log(test1Result);

// // solution-2
let text2 = "";
Object.keys(students).map(function (i) {
  let monthNum = students[i]["month"];
  let monthName = months[monthNum - 1];
  let colors = color[monthName];
  const studentFlag = students[i]
  text2 += ` ${i}'s color is ${colors}.`;
});
// console.log(text2);
const test2Result = `Hello Everyone.${text2} Thank you.`;
console.log(test2Result);

// print a string for every item of the array below. String will be like this: "{size} Number" If the number is less than 3, value will be "small", if less than 7, greater than or equal to 3, value will be "medium" , else value will be big.
// For example , for 3, String will be "medium number.", for 8, it will be "large number"
const flag = [1, 3, 2, 6, 5, 8, 7, 9, 2];
//solution-3
let newFlag = "";
flag.map(myFunction);
function myFunction(x) {
  newFlag +=
    x < 3
      ? ` "small number."`
      : x < 7 && x >= 3
      ? ` "medium number."`
      : ` "big number."`;
}
console.log(newFlag);

// problem 4: add color propertyr to every object in students. Use Spread operator.
Object.keys(students).map(function (i) {
  const studentFlag = students[i];
  let monthNum = studentFlag["month"];
  let monthName = months[monthNum - 1];
  let colors = color[monthName];
  studentFlag.color = [...colors].join("");
});
console.log(students);
