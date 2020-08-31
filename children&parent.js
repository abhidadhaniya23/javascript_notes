// tutorials 15

let count = document.querySelector('.container');
console.log(count);
console.log(count.childNodes); // it count newline and other more but
console.log(count.children); // it only count main parts like text,heading... and also this is an HTML collection
// this shows only elements

let myNodeName = count.childNodes;
myNodeName = count.childNodes[3].nodeName;
console.log(myNodeName);

let myNodeType = count.childNodes;
myNodeType = count.childNodes[0].nodeType;
console.log(myNodeType); // ans is 3 but why ?

// Node Type List
/*
1 - element
2 - Attribute
3 - Text Node
8 - Comment
9 - Document
10 - docType
*/

// console.log(myNodeName.children[0].children[2]);
// I am also do this... for graping children's children...

console.log(count.firstChild);
console.log(count.firstElementChild);

console.log(count.lastChild);
console.log(count.lastElementChild);

console.log(count.childElementCount); // in count only 1 is element