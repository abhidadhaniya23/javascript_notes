// tutorials 7

// property____
// method()
// method is changing the value of array or string....

let marks = [34, 89, 40, 90, 78];
const fruits = ['orange', 'apple', 'banana', 'grapes'];
const mixed = ['str', 89, 20, [23, 'abhi']];

// making array with the help of array instractor...
const arr = new Array(23, 89, 47);
console.log(arr);
console.log(mixed);
console.log(marks[2]);

// array property...
console.log(mixed.length);

arr[0] = 'Abhi';
console.log(arr);

let value = marks.indexOf(89);
console.log(value); // return 1 because 89 is placed at first

console.log(marks);

// muted or modifying arrays...
marks.push(100);
console.log(marks); // add this element to last place in array

marks.unshift(75);
console.log(marks); // add this element to first place in array

marks.pop();
console.log(marks); // last element remove

marks.shift();
console.log(marks); // remove first element

marks.splice(1, 2);
console.log(marks); // remove first place to second place elenents

// marks.slice();

marks.reverse();
console.log(marks); // reverse array...

let marks2 = [1, 2, 3];

console.log('this marks is before concat', marks);
marks = marks.concat(marks2);  // joint other array
console.log(marks);

// objects in js
// showing any property in array use : not =

let myObj = {
    name: 'Abhi',
    'last name': 'Dadhaniya',
    isAvtive: true,
    myMarks: [2, 10, 39]
}
console.log(myObj);
console.log(myObj.name);
console.log(myObj['last name']);
console.log(myObj.myMarks);
console.log(myObj['myMarks']);  // this is one also method to acess any object property...
