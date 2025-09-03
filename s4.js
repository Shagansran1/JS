//for Loops tutorial 3
/*for(let i = 0; i < 1; i++ ){
console.log('in loop:' , i);
};

console.log('loop ends');

const names = ['shaun', 'mario', 'luigi', 'jatt' ];


for(let i = 0; i < names.length; i++){
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
};

//while loops:
let i = 0;
while(i < 5){
    console.log('in loop:', i);
    i++;
};


const names = ['shaun', 'mario', 'luigi', 'jatt' ];

let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}


//do while loops

let i = 3;

do {console.log('val of i is:', i);
    i++;
}
while(i < 10);

//if statements:
const age = 280;

if( age > 20){console.log('you are over 20 years old')};

const ninjas = ['shagan', 'thomas', 'rupi', 'chobbar'];
if(ninjas.length > 5){
    console.log("thats a lot of ninjas");
}


const password = 'p@sswordss';

if(password.length >= 8){console.log('that password is long enough!')};



// else if statements
// if ,else if , else 

//logical operators - OR || and AND &&
const password = 'Phhh@s';

if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
    } else if(password.length >= 8 || password.includes('@') && password.length >= 5 ){
        console.log('the password is strong enough');
    } else { console.log('password is not long enough');

    }


//Logical Not (1)

let users = false;

if (users){
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){
    
    if(scores[i] === 0){
        continue;
    }
    
    
    console.log('your score:', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}*/

//switch statements:
const grade = 'A';

// using if statements:
/*if(grade === 'A'){

} else if(grade === 'B'){

} else if(grade === 'C'){

} else if(grade === 'D'){

}else if(grade === 'E'){

} else {

}

switch(grade){
    case 'A':
    console.log('you got an A!');
    break;
    case 'B':
    console.log('you got an B!');
    break;
    case 'C':
    console.log('you got an C!');
    break;
    case 'D':
    console.log('you got an D!');
    break;
    case 'E':
    console.log('you got an E!');
    break;
    default:
        console.log('not a valid grade');

}*/

//variables & block scope
let age = 30;
// root will have global scope for all the file 

// same will work with constant in here.
if(true){
   let age = 40;
   let name = 'shagan'
    console.log('inside 1st code block:', age, name);
    
    if(true){
        let age = 50; 
    console.log('inside 2nd code block:', age);
    }
}

console.log('outside code block:', age, name);