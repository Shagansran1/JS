let age = 25;
let year = 2019;

//camel case:
let My_Age = 21.5; 
let myBirthYear = 2004;

console.log(age);
age = 30;
console.log(age);

const points = 100; 
console.log(points);

var score = 75;

console.log(score);

console.log(My_Age, myBirthYear );

/* Number, Stering, Boolean, Null, 
Undefined, object, Symbol */

//Strings Chapter 2

//String

console.log('Hello, World');

let email = "Shagansran782@gmail.com";

// String Concatenation
let firstname = "Shagan";
let lastname = "Sran";

let fullname = firstname + ' ' + lastname;

console.log(fullname);

//getting characters goes from 0 to infinity

console.log(fullname[2]);

//Stinrg lenght
console.log(fullname.length);

//string methods
console.log(fullname.toUpperCase());
let result = fullname.toLowerCase();

console.log(result, 'concated as well u sucker'+ ' '+ fullname);
//index works to get lenght till a character
let index = email.indexOf('2');
console.log(index);

// common string methonds
let email2 = 'shagansran782@gmail.com';
//let result2 = email.lastIndexOf('n');

//console.log(result2);

//slice
//let result2 = email2.slice(0,10);

//let result2 = email.substring(6,10);

//let result2 = email.replace('an', 'x',);
let result2 = email.replace('','');
console.log(result2);