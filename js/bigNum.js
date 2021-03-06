"use strict";

function bigNum( list ) {
    if ( !Array.isArray( list ) ) {
        return 'ERROR: duotas ne sarasas';
    }
    if ( list.length < 1 ) {
        return 'ERROR: tuscias sarasas';
    }
    
    let big = -Infinity,
        size = list.length;

    // randame kuris is atrinktuju yra didziausias
    for ( let i=0; i<size; i++ ) {
        const number = list[i];
        if ( typeof number !== 'number' ||
             !isFinite(number) ) {
            continue;
        }

        if ( big < number ) {
            big = number;
        }
    }

    if ( big === -Infinity ) {
        return 'ERROR: sarase nebuvo nei vieno normalaus skaiciaus';
    }

    return big;
}

console.log( bigNum( 65161 ) );
console.log( bigNum( 'asdasd' ) );
console.log( bigNum( {} ) );
console.log( bigNum( [] ) );
console.log( bigNum( [ -Infinity, 'asd', [], {}, true, false ] ) );

console.log( bigNum( [ 1 ] ), '->', 1 );
console.log( bigNum( [ 2 ] ), '->', 2 );
console.log( bigNum( [ 2, 3, 4, 9, 6, 4 ] ), '->', 9 );
console.log( bigNum( [ 1, 2, 3 ] ), '->', 3 );
console.log( bigNum( [ -5, 78, 14, 0, 18 ] ), '->', 78 );
console.log( bigNum( [ 69, 69, 69, 69, 66 ] ), '->', 69 );
console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -1 );
console.log( bigNum( [ -6, -1, -2, -3, -4, -5, -7, -8 ] ), '->', -1 );

console.log( bigNum( [ 6, 'as', 8 ] ), '->', 8 );
console.log( bigNum( [ 6, 8, 'as' ] ), '->', 8 );
console.log( bigNum( [ 'as', 6, 8 ] ), '->', 8 );
