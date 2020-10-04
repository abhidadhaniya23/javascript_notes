// there are many type of DOM Traversal Methods...

/* 

parentNode => 
parentElement => 
Children => returns inner HTML collections of selected selector
childNodes => returns  all like spaces or comments
firstChild => firstelement
firstElementChild => 
lastChild => last element
lastElementChild => 
nextElementSibling => 
nextSibling => 
previousElementSibling => 
previousSibling => 

*/

// nodes basically returns bodelist of targeted element....
// in node list (included) ==> h2, p, div, id, class, any many more...

// and without node returns HTML collection...

// let's start understanding....

// let anyNode = document.getElementById('abhi').parentElement;

// anyNode = document.getElementById('inner').parentElement;

// anyNode = document.getElementById('inner').parentNode;

// console.log(anyNode)

// returns same value... that means these are almost same but the exatly different between parentElement and parentNode is...
// parentElement return sometime null value but parentNode never return null value

// and these are retuening null value when you need html tag parentElement....


// use of children and childNodes...

// anyNode = document.getElementById('inner').children;
// anyNode = document.getElementById('ininner').children[2].style.background = 'cyan';
// anyNode = document.getElementById('inner').children[1];
// anyNode = document.getElementById('outer').childNodes;
// console.log(anyNode);
// 'Cascadia Code', Consolas, 'Courier New', monospace
//Consolas, 'Courier New', monospace

// childnodes retuen blackspace and comment from HTML...
// and that is not return by children... 


// now the meaning of first child and last child...

// if in a div some textNodes or some others... then,
// firstChild return first Node or element...
// lastChild return last Node or element...

// anyNode = document.getElementById('ininner').firstChild;
// console.log(anyNode);



// code with harry...

// childNode and children

let cont = document.querySelector('.container');
console.log(cont.children);// returns html collections
console.log(cont.childNodes);// return free spaces and collection...

console.log(cont.children[1].children);