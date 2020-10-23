// create element, remove element, replace element and more methods using js...
let txtNode = document.createTextNode('I am created text Node');
// console.log(txtNode);

let element = document.createElement('div');
element.className = 'main';
element.id = 'in5';
element.setAttribute('title', 'New created element');
// element.innerText = '5';
// append child use => its add to that selector 
element.appendChild(txtNode)
// element.innerText = txtNode; => its return object text... but i don't know what is this !
console.log(element);

let oldElm = document.querySelector('#ininner');

oldElm.appendChild(element);
console.log(oldElm);

let textNode2 = document.createTextNode('I am second elem. text')

// now how to replace any element to other element...
let element2 = document.createElement('h3');
element2.className = 'main';
element2.id = 'in5';
element2.setAttribute('title', '2nd created element');
element2.appendChild(textNode2);
console.log(element2);

// replace element...
element.replaceWith(element2)

// remove any element...
document.getElementById('ininner').removeChild(document.getElementById('in3'));
// its remove 3rd div...

// get attribute function...
console.log(document.querySelector('h3').getAttribute('class'));
console.log(document.querySelector('h3').getAttribute('id'));
// want to know that attribute it means getAttribute...

console.log(document.querySelector('h3').hasAttribute('id'));
// return true or false => class is available ? => that means true...
// but if...
console.log(document.querySelector('h3').hasAttribute('onclick()')); // false

// remove attribute...
console.log(document.querySelector('h3').removeAttribute('id'), document.querySelector('h3'));
// removed id...

// directly reaplace any first element to second element...
// document.getElementById('ininner').replaceChild(document.getElementById('in1'), document.getElementById('in4'));