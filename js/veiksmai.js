"use strict";

const a = 2;
const b = 5;
const c = a + b;

console.log(a, b, c);

const s1 = 'Labas';
const s2 = 'rytas';
const sayHi = s1 + ' ' + s2 + '!';

console.log(sayHi);

const lang = 'en';
const good = {
    en: 'Good',
    lt: 'Labas'
};
const morning = {
    en: 'morning',
    lt: 'rytas',
    0: 'ads'
};
const gmEn = good.en + ' ' + morning.en + '!';
const gmLt = good.lt + ' ' + morning.lt + '!';
const goodMorning = good[lang] + ' ' + morning[lang] + '!';

console.log(goodMorning);

const marks = [1, 2, 3];

console.log(marks);


const sample = 1 + 2 + (3 + 'asd');
console.log(sample);

const sample2 = 'asd' + (1 + 2 * 3);
console.log(sample2);


const age = null;

