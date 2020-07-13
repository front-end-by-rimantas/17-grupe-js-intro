"use strict";

const a = 4;
let b = 5;
var c = 6;

const name = 'Vardenis';
const surname = "Pavardenis";
const someText = "Lorem ipsum \"dolor\" sit amet.";
const fullName = `${name} ${surname}`;

const notLie = true;
const notTrue = false;

const marks = [10, 2, 6];
const students = ['Jonas', 'Maryte', 'WillNotSay'];
const matrix = [[1, 0], [0, 1]];

const marksByMonth = [
    [10, 2, 6],
    [8, 8],
    [1, 1]
];
console.log(marksByMonth);

const johnyBoyMarks = {
    september: [10, 2, 6],
    october: [8, 8],
    november: [1, 1]
};
console.log(johnyBoyMarks);

const johnyBoy = {
    name: 'Johny',
    surname: 'Boy',
    age: 13,
    marks: johnyBoyMarks
}

console.log(johnyBoy);