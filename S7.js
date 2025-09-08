/*document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.background = 'linear-gradient(135deg, #6dd5ed, #2193b0)';

const welcomeDiv = document.createElement('div');
welcomeDiv.style.background = 'rgba(255,255,255,0.9)';
welcomeDiv.style.padding = '40px 60px';
welcomeDiv.style.borderRadius = '16px';
welcomeDiv.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1)';
welcomeDiv.style.textAlign = 'center';

const heading = document.createElement('h1');
heading.textContent = 'Welcome!';
heading.style.marginBottom = '16px';
heading.style.color = '#2193b0';

const subheading = document.createElement('p');
subheading.textContent = 'Thank you for visiting our page. Enjoy your stay!';
subheading.style.fontSize = '1.2em';
subheading.style.color = '#333';

welcomeDiv.appendChild(heading);
welcomeDiv.appendChild(subheading);
document.body.appendChild(welcomeDiv);

const para = document.querySelector('div.error');
console.log(para);
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para);
});
const errors = document.querySelectorAll('.error');
console.log(errors);
//get an element by ID:
const title = document.getElementById('page-title');
console.log(title);

//get elements by their class name:
const errors = document.getElementsByClassName('error');
console.log(errors);

//get elements by their tag name:
const paras = document.getElementsByTagName('p');
console.log(paras)


const paras = document.getElementsByTagName('p');
console.log(paras[0]);
;

const para = document.querySelector('p');
console.log(para.innerText);
para.innerText += ' This is new text added.';
console.log(para.innerText);


const paras = document.querySelectorAll('p');
paras.forEach (para => {
    console.log(para.innerText);
    para.innerText = ' new text';
});
const content = document.querySelector('.content');
content.innerHTML += '<h2>This is a new h2</h2>';
console.log(content.innerHTML);*/

const content = document.querySelector('.content');

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML  += `<p>${person}</p>`;
});
