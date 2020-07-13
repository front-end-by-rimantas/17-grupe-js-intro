"use strict";

// if, switch, ternary

// if () {}
// if () {} else {}
// if () {} else if {} else {}
// if () {} else if {}

// if ( akys === 'melynos' ) {
//     console.log('Atspejai 😎');
// } else if ( akys === 'zalios' ) {
//     console.log('Samanos!!!!');
// } else {
//     console.log('[Tai kas po kamsteliu...]');
// }

const akys = 'asd';

if ( akys === 'melynos' ) {
    console.log('Melynos!!!');
} else {
    if ( akys === 'zalios' ) {
        console.log('Zalios!!!');
    } else {
        console.log('Ne zalios...');
    }
    console.log('Ne melynos...');
}


const day = 'Tuesday';

switch ( day ) {
    case 'Monday':
        console.log('🤨');
        break;

    case 'Tuesday':
        console.log('😑😑😑');
        break;

    case 'Wednesday':
    case 'Friday':
        console.log('LOL');
        break;

    default:
        console.log('...........');
        break;
}

const stop = 'a';

switch ( stop ) {
    case 'a':
        console.log('a');
    case 'b':
        console.log('b');
    case 'c':
        console.log('c final');
        break;
    case 'd':
        console.log('d');
    case 'e':
        console.log('e');
    default:
        console.log('f final');
        break;
}