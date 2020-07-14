"use strict";

function divSum( from, until, step ) {
    if ( typeof from !== 'number' ||
         !isFinite(from) ||
         from % 1 !== 0 ) {
        return 'ERROR: "from" ne sveikas teigiamas skaicius';
    }
    if ( typeof until !== 'number' ||
         !isFinite(until) ||
         until % 1 !== 0 ) {
        return 'ERROR: "until" ne sveikas teigiamas skaicius';
    }
    if ( typeof step !== 'number' ||
         !isFinite(step) ||
         step % 1 !== 0 ) {
        return 'ERROR: "step" ne sveikas teigiamas skaicius';
    }
    if ( from > until ) {
        return 'ERROR: "from" negali buti didesnis uz "until"';
    }

    let count = 0;

    for ( let i=from; i<=until; i++ ) {
        if ( i % step === 0 ) {
            count++;
        }
    }

    return `Skaičių intervale tarp ${from} ir ${until}, besidalijančių be liekanos iš ${step} yra ${count} vienetai.`;
}

// console.log( divSum('asd', 31, 7) );
// console.log( divSum(8, Infinity, 7) );
// console.log( divSum(8, 31, 7.7) );

// console.log( divSum(0, 11, 3) );
// console.log( divSum(0, 11, 5) );
// console.log( divSum(0, 11, 7) );
// console.log( divSum(8, 31, 3) );
// console.log( divSum(8, 31, 5) );
// console.log( divSum(8, 31, 7) );