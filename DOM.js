// tutorials 11

// DOM - Document Object Model

// console.log(window);

console.log(document);

// let a = confirm('Do you want to close it ??');

// console.log(Number(a));

// if (a == true) {
//     console.log('ok clicked');
// }
// else {
//     console.log('cancle clicked');
// }

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location);
// i can write only innnerwidth or other more without window...

console.log('My window size is ', innerHeight, '*', innerWidth);

console.log(outerHeight);
console.log(outerWidth);

console.log(scrollX);
console.log(scrollY);

// this is my logic for...

// when any user scroll in y axis then alert is given below...

// function myScroll() {
//     if (scrollY > 0) {
//         alert('Hey dont scroll...');
//     }
// }

// setInterval(() => {
//     if (scrollY > 0) {
//         alert(`Hey don't scroll more`);
//     }
//     else if (scrollY == 0) {
//         console.log(`Hello dont scroll people......... ${scrollX}`);
//     }
// }, 2000);

// there are some codes for console...

// location.reload()

console.log(location.href);
// location.href = '//codewithharry.com';
console.log(history);
// history.go(-1) for go backword
// history.go(1) for go forword

// here i can also use toString() function...



// tutorials 12

let a = document;
a = document.all;
a = document.body;
a = document.form;
// a = document.form[0];
a = document.links;
console.log(a);

// i can also use this tags...

document.images;
document.scripts;

let dom;
dom = document.all;
dom = Array.from(dom);    // means make an array with using dom-(variable)...
console.log(dom);

dom.forEach(function (element) {
    console.log(element);
});

// Because only forEach is don't run on HTML collection...