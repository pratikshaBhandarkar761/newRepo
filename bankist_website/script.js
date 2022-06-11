'use strict';
console.log(document.documentElement);;
const allSection = document.querySelectorAll('.section');
console.log('gfdg', allSection);
const footer = document.querySelector(".footer")
const header = document.querySelector('.header');
document.getElementById('section--1');
// document.getElementsByClassName('');
const allbuttons = document.getElementsByTagName('p');
// console.log(allbuttons);
// console.log(document.getElementsByClassName('btn'));

//creating and insertingelements
const message = document.createElement("div");
console.log(message);
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = 'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie"> Got it! </button>';
// header.prepend(message);
// header.append(message);
// footer.append(message.cloneNode(true));
footer.after(message);
//delete elements
document.querySelector('.btn--close-cookie')
    .addEventListener('click', function() {
        message.parentElement.removeChild(message);
    });

//styles
message.style.backgroundColor = 'black';
message.style.width = '100%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';