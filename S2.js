let radius =  10;
const pi = 3.14;

//console.log(radius,pi);

//Math operators +, -, *, /, **, %

//console.log(10/2);
//let result = radius % 3;

//let result = pi * radius **2;

//order of operation- BODMAS

//let result = 5 * (10-3)**2;

//let likes = 10;

// Short hand notations:

//like = likes + 1;
//likes++
//likes += 10;
//likes -= 2;
//likes *= 2;
//likes /= 2;

//onsole.log(likes);


// NaN - not a number

//console.log(5 / 'helo');

//let result = 'the blog has' + ' ' + likes + ' ' +'likes';
//console.log(result);

// Template strings

const title = 'Best reads of 2020';
const author = 'shagan';
const liked = '30';

//concatenation way

//let result = 'The blog called ' + title + ' by ' + author + ' has ' + liked + ' likes ';
//console.log(result)

//template string way/template literal

let result = `The blog called ${title}  by ${author} has ${liked} likes`;
console.log(result);

// creating html templates
let html = ` 
<h2> ${title}</h2>
<p> By ${author}</p>
<span>This blog has ${liked} likes </span>
`;

console.log(html);