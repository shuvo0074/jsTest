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
for (let i in students) {
  if (students[i]["attendance"] >= 8) {
    text1 += i + `'s attendance is good`;
    if (students[i]["marks"] >= 80) {
      text1 += ` , marks is good. `;
    } else if (students[i]["marks"] <= 79 && students[i]["marks"] >= 40) {
      text1 += ` , marks is average. `;
    } else {
      text1 += ` , marks is bad. `;
    }
  } else if (students[i]["attendance"] <= 7 && students[i]["attendance"] >= 4) {
    text1 += i + `'s attendance is average`;
    if (students[i]["marks"] >= 80) {
      text1 += ` , marks is good. `;
    } else if (students[i]["marks"] <= 79 && students[i]["marks"] >= 40) {
      text1 += ` , marks is average. `;
    } else {
      text1 += ` , marks is bad. `;
    }
  } else {
    text1 += i + `'s attendance is bad`;
    if (students[i]["marks"] >= 80) {
      text1 += ` , marks is good. `;
    } else if (students[i]["marks"] <= 79 && students[i]["marks"] >= 40) {
      text1 += ` , marks is average. `;
    } else {
      text1 += ` , marks is bad. `;
    }
  }
}

const test1Result = console.log(`Hello Everyone. ${text1}Thank you.`);
