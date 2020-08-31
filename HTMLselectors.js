let select = document.getElementById('main');    // show details of 'main' id... 

// select = select.className;    // print it's class name

// select = select.childNodes;    // show child classes of more details...

// select = select.parentNode;    // show it's parents classes or id's details... but here's none parent class...

select.style.padding = '10px';
select.style.background = 'tomato';
select.style.width = '700px';
select.style.transition = '.5s ease';

function btnClick() {
    select.style.width = '300px';
}

function over() {
    select.style.width = '400px';
}
function out() {
    select.style.width = '700px';
}

// console.log(select);

let div = document.getElementById('main');

div.style.transition = '0.5s ease';

function divOver() {
    div.style.padding = '20px';
}
function divOut() {
    div.style.padding = '10px';
}

// div.innerText = 'Abhi is a good boy.';

// if i want to add some html tags then use innerHTML
// div.innerHTML = '<b>Abhi is a good boy.</b>';

// console.log(div.innerText);

// there are two types of selector in javascript...

// 1.Single element selector

// querySelector is select only one element because this is single element selector
let mySel = document.querySelector('#main');
mySel = document.querySelector('.container');
mySel = document.querySelector('h1');
mySel = document.querySelector('input');
mySel = document.querySelector('div');  // return only first div
// mySel.style.color = 'whitesmoke';
console.log(mySel);


// 2.Multi element selector

let element = document.getElementsByClassName('main');
element = element[0].getElementsByClassName('child');   //it means in main class show child name classes...
element = document.getElementsByTagName('h1');  // return all h1 tags details
element = document.getElementsByTagName('div'); // return all divs form DOM...

// this is one way to print all elenent by using for loop
// for (let i = 0; i < element.length; i++) {
//     console.log(element[i]);
// }

// this is second way to print all elenent by using forEach loop
// Array.from(element).forEach(element => {
//     console.log(element);
// });

console.log(element);