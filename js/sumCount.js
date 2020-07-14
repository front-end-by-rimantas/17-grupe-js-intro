"use strict";

// 0 - 0        ->  0
// 0 - 4        ->  10
// 0 - 10       ->  55
// 0 - 100      ->  5050
// 0 - 1000     ->  500500
// 574 - 815    ->  labai didelis teigiamas
// -50 - 50     ->  0
// -70 - 30     ->  nedidelis neigiamas


function sumCount( from, untill ) {
    // validacija
    if ( from === undefined ) {
        return 'ERROR: neduotas pirmas skaicius';
    }
    if ( untill === undefined ) {
        return 'ERROR: neduotas antrasis skaicius';
    }
    if ( typeof from !== "number" ) {
        return 'ERROR: pirmasis ne skaicius';
    }
    if ( typeof untill !== "number" ) {
        return 'ERROR: antrasis ne skaicius';
    }
    if ( isFinite(from) === false ) {
        return 'ERROR: pirmas turi buti normalus skaicius';
    }
    if ( isFinite(untill) === false ) {
        return 'ERROR: antras turi buti normalus skaicius';
    }
    if ( from > untill ) {
        return 'ERROR: pirmas negali buti didesnis uz antra';
    }
    if ( from % 1 !== 0 ) {
        return 'ERROR: pirmas turi buti sveikas skaicius';
    }
    if ( untill % 1 !== 0 ) {
        return 'ERROR: antras turi buti sveikas skaicius';
    }

    // logika
    let sum = 0;

    for ( let i=from; i<=untill; i++ ) {
        sum += i;
    }

    // vienas is daliu reikalinga perrasyti naudojant formule
    // 1) sum = ( (untill - from) * (untill - from + 1) ) / 2;

    // graziname rezultata
    return sum;
}

// console.log( sumCount('a', 7) );
// console.log( sumCount(7, 'a') );
// console.log( sumCount('v', 'a') );
// console.log( sumCount(574) );
// console.log( sumCount() );
// console.log( sumCount(-Infinity, 0) );
// console.log( sumCount(0, Infinity) );
// console.log( sumCount(-Infinity, Infinity) );
// console.log( sumCount(-NaN, 0) );
// console.log( sumCount(0, NaN) );
// console.log( sumCount(-NaN, NaN) );
// console.log( sumCount(null, 5) );
// console.log( sumCount(5, null) );
// console.log( sumCount(null, null) );
// console.log( sumCount([], 5) );
// console.log( sumCount(5, []) );
// console.log( sumCount([], []) );
// console.log( sumCount({}, 5) );
// console.log( sumCount(5, {}) );
// console.log( sumCount({}, {}) );
// console.log( sumCount(4, sumCount) );
// console.log( sumCount(sumCount, 5) );
// console.log( sumCount(sumCount, sumCount) );
// console.log( sumCount(0, 3.141592654) );
// console.log( sumCount(-3.141592654, 3.141592654) );
// console.log( sumCount(-3.141592654, 0) );
// console.log( sumCount(true, 0) );
// console.log( sumCount(0, false) );
// console.log( sumCount(4, 0) );
// console.log( sumCount(4, -4) );
// console.log( sumCount(-4, -8) );

console.log( sumCount(0, 0), 0 );
console.log( sumCount(0, 4), 10 );
console.log( sumCount(2, 5), 14 );
console.log( sumCount(0, 10), 55 );
console.log( sumCount(0, 1000), 500500 );
console.log( sumCount(-50, 50), 0 );
console.log( sumCount(-70, 30) );
console.log( sumCount(574, 815) );

// performance issue
// console.log( sumCount(0, 10000000000000000000000000000000000000000) );