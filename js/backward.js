"use strict";

function backwards( text ) {
    if ( typeof text !== 'string' ) {
        return 'ERROR: ne tekstas';
    }
    
    let backwardsText = '';
    const textSize = text.length;

    if ( textSize < 1 ) {
        return 'ERROR: per trumpas tekstas';
    }

    for ( let i=textSize-1; i>=0; i-- ) {
        backwardsText += text[i];
    }

    // for ( let i=0; i<textSize; i++ ) {
    //     backwardsText += text[ textSize - 1 - i ];
    // }

    return backwardsText;
}

console.log( backwards(5) );
console.log( backwards(NaN) );
console.log( backwards(Infinity) );
console.log( backwards(backwards) );
console.log( backwards([]) );
console.log( backwards({}) );
console.log( backwards(true) );
console.log( backwards(false) );
console.log( backwards(''), '' );

console.log( backwards('a'), 'a' );
console.log( backwards('ab'), 'ba' );
console.log( backwards('abc'), 'cba' );
console.log( backwards('sula'), 'alus' );
console.log( backwards('sedek uzu kedes'), 'sedek uzu kedes' );
console.log( backwards('sula' + 'sula'), 'alusalus' );
console.log( backwards('    '), '    ' );


console.log( 'Labas rytas!'.split('').reverse().join('') )