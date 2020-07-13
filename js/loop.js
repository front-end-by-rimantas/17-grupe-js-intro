"use strict";

// loop -> proceduru kartojimas iki kol bus tenkinama salyga

// const marks = [10, 2, 6, 8, 8, 1, 1, 10];
// const marksCount = marks.length;
// let sum = 0,
//     average = 0;

// for ( let i=0; i<marksCount; i++ ) {
//     sum += marks[i];
// }

// console.log('Vidurkis:',  Math.round(sum / marksCount) );






const marks = [10, 2, 6, 8, 8, 1, 1, 10];
let target = 9,
    marksCount = marks.length,
    sum = 0,
    average = 0,
    tensCount = 0;

for ( let i=0; i<marksCount; i++ ) {
    sum += marks[i];
}

average = Math.round(sum / marksCount);

while ( average < target ) {
    tensCount++;
    sum += 10;
    marksCount++;
    average = Math.round(sum / marksCount);
    console.log(tensCount, average);
}