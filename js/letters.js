"use strict";

function isrinktiRaides( text, step ) {
    if ( typeof step !== 'number' ||
         !isFinite(step) ||
         step === 0 ||
         step % 1 !== 0 ) {
        return 'ERROR: Antrasis kintamasis turi būti sveikasis skaicius kuris yra ne lygus nuliui.'
    }
    if ( typeof text !== 'string' ||
         text.length === 0 ) {
        return 'ERROR: Pirmasis turi buti ne tuscias tekstas';
    }
    if ( text.length < step ) {
        return 'ERROR: tekstas turi buti ilgesnis uz zingsni';
    }

    let filteredText = '',
        size = text.length;

    if ( step > 0 ) {
        for ( let i=step-1; i<size; i=i+step ) {
            filteredText += text[i];
        }
    } else {
        for ( let i=size+step; i>=0; i=i+step ) {
            filteredText += text[i];
        }
    }

    return filteredText;
}

console.log( isrinktiRaides( 'abcdefg', 2 ), '->', 'bdf' );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ), '->', 'cfil' );
console.log( isrinktiRaides( 'abcdefghijkl', -3 ), '->', 'jgda' );
console.log( isrinktiRaides( 'abcdefg', -2 ), '->', 'fdb' );

// console.log( isrinktiRaides( 'abcdefghijkl', 3.5 ), '->', 'cfil' );