"use strict";

function skaitmenuKiekisSkaiciuje( number ) {
    let text = ''+number,
        size = text.length;

    if ( number % 1 !== 0 ) {
        size--;
    }

    if ( number < 0 ) {
        size--;
    }

    return size;
}

console.log( skaitmenuKiekisSkaiciuje( 5 ), '->', 1 );
console.log( skaitmenuKiekisSkaiciuje( 781 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ), '->', 11 );
console.log( skaitmenuKiekisSkaiciuje( 3.14 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( -5 ), '->', 1 );
console.log( skaitmenuKiekisSkaiciuje( -781 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( -37060123456 ), '->', 11 );
console.log( skaitmenuKiekisSkaiciuje( -3.14 ), '->', 3 );

console.log( skaitmenuKiekisSkaiciuje( 1000000000000000000000 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 1000000000000000000000.2 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 1000000000000000000005 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 165161651616546484889 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 0.000000000000000000001 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 0.0000000000000000000014515195851655 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 100000000000.000000000014515195851655 ), '->', 3 );

// console.log( skaitmenuKiekisSkaiciuje( true ) );
// console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );