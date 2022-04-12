const students = {
    shantim: {
        attendance: 9,
        marks: 75,
        month: 3
    }, // shantim’s attendance is good, marks is average.
    shopon: {
        attendance: 2,
        marks: 90,
        month: 2
    }, // shopon's attendance is bad, marks is good.
    sazid: {
        attendance: 6,
        marks: 79,
        month: 6
    }, // sazid's attendance is average, marks is average.
    shuvo: {
        attendance: 9,
        marks: 60,
        month: 9
    },
    nusrat: {
        attendance: 10,
        marks: 75,
        month: 8
    },
    sammit: {
        attendance: 9,
        marks: 99,
        month: 11
    },
    kakon: {
        attendance: 10,
        marks: 33,
        month: 4
    },
    sourov: {
        attendance: 4,
        marks: 75,
        month: 5
    },
    nebir: {
        attendance: 9,
        marks: 90,
        month: 2
    },
}

const expectedSpeech = "Hello Everyone. shantim’s attendance is good, marks is average. shopon's attendance is bad, marks is good. sazid's attendance is average, marks is average. ...{result for other's} Thank you."
// TEST 2
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
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
}
const expectedSpeech2 = "Hello Everyone. shantim’s colour is purple. shopon's colour is brown. sazid's color is green. ...{result for other's} Thank you."