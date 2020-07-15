"use strict";

function daugyba( a, b ) {
    if ( typeof a !== 'number' ||
         !isFinite(a) ) {
        return 'ERORR: pirmas ne normalus skaicius';
    }
    if ( typeof b !== 'number' ||
         !isFinite(b) ) {
        return 'ERORR: antras ne normalus skaicius';
    }
    return a * b;
}

console.log( daugyba(2, 2), '->', 4 );
console.log( daugyba(3, 2), '->', 6 );
console.log( daugyba(-3, 2), '->', -6 );
console.log( daugyba(-3, -2), '->', 6 );
console.log( daugyba(3, -2), '->', -6 );
console.log( daugyba(3.1, 2), '->', 6.2 );
console.log( daugyba(-3.1, 2), '->', -6.2 );
console.log( daugyba(-3.1, -2.1), '->', 6.51 );
console.log( daugyba(3, -2.1), '->', -6.3 );
console.log( '------------------------------' );
console.log( daugyba(3, 'a') );
console.log( daugyba(3, [5, 6]) );
console.log( daugyba(3, {}) );
console.log( daugyba(3, {a:1}) );
console.log( daugyba(3, {1:1}) );
console.log( daugyba(3, daugyba) );
console.log( daugyba(3, NaN) );
console.log( daugyba(3, undefined) );
console.log( daugyba(3) );
console.log( daugyba() );
console.log( daugyba(3, '8s') );
console.log( daugyba(3, 's8') );
console.log( '------------------------------' );
console.log( daugyba(3, null) );
console.log( daugyba(3, '8') );
console.log( daugyba(3, true) );
console.log( daugyba(3, false) );
console.log( daugyba(3, []) );
console.log( daugyba(3, [5]) );
console.log( daugyba([-3], [5]) );
console.log( daugyba(3, Infinity) );
console.log( daugyba(3, -Infinity) );