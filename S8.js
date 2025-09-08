


/*
link.setAttribute('href', 'https://www.bing.com');
link.innerText = 'Go to Bing';

console.log(link.getAttribute('href'));

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'error');
const content = document.querySelector('p');
//add remove classes
console.log(content.classList);
content.classList.add('error');*/

const paras = document.querySelectorAll('p');
paras.forEach(p => {
   if(p.textContent.includes('error'));
});
