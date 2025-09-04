/*Functions:

//Function declaration:

function greet(){
    console.log('hello, there');
}

//function expression
const speak = function(name = 'jatt', time = 'night'){
    console.log(`good ${time} ${name}`);
};

greet();
greet();
greet();

speak('Shaun', ); 

const calcArea = function(radius){
    return  3.14 * radius ** 2;

}

const area = calcArea(5);
console.log(area); 

// arrow function:
const calcArea = radius => 3.14 * radius ** 2;

const area = calcArea(5);
console.log('area is', area); 


const greet = () => `hello, world`;

const result = greet();
console.log(result);

const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i]*tax;
    }
    return total;
}

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i]*tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2));
const Name = 'shaun';

//functions:
const greet = () => `Hello`;

let resultOne = greet();
console.log(resultOne);

//methods:

let resultTwo= Name.toUpperCase();
console.log(resultTwo);


//callbacks and foreach

    const myFunc = (callbackFunc) => {
        //do something
        let value = 50;
        callbackFunc(value);

    };

    myFunc(value => {
        //do something
        console.log(value);
    });

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);
*/
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun','chun-li'];

let html = ``;

people.forEach(person => {
//create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;