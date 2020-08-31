// tutorials 16

// how to creating and replacing and removing any element using js...

let element = document.createElement('li');
element.className = 'myLi';
element.id = 'createdLi';

// element.innerText = 'This is second text, created by js.'
// this is one way to create innerText... but,

// this is second way...
let text = 'This is second text, created by js.';
element.innerText = text;

element.setAttribute('title', 'mytitle');
// there are some changes like title=onclick, mytitle=myclick()
// like this type

// now garping any class and add this element variable...

let li = document.querySelector('.container');
li.appendChild(element);

console.log(element)