// tutorials 5

// convertions in javascript...
// let myVar;
// myVar = 34;
// console.log(myVar, typeof myVar);
// myVar = String(34);
// console.log(myVar, typeof myVar);

// typeof dates is objects...

let booleanVar = true;
console.log(booleanVar);
booleanVar = String(booleanVar);
console.log(booleanVar, typeof booleanVar);

let myDate = new Date();
myDate = String(new Date());
console.log(myDate);

let myArr = [1, 3, 5, 7, 4];
// this is an inportant thing...
console.log(myArr.length, myArr);
myArr = String(myArr);
console.log(myArr.length, myArr);

// convert in string using tostring() method...
let i = 23;
console.log(i, typeof i);
console.log(i.toString(), typeof i); // because i don't declare in string... so that typeof is number...
i = i.toString();
console.log(i.toString(), typeof i);

// string to number convertion...
let stri = "343";
console.log(stri, typeof stri);
stri = Number(stri);
console.log(stri, typeof stri);

// if
let myNum = "3t45";
console.log(myNum, typeof myNum);
myNum = Number(myNum);
console.log(myNum, typeof myNum);
// NaN means "Not A Number"...
// where a string is convert in number then if any alphabat is available in string then it is NaN...
myNum = Number(true);
console.log(myNum, typeof myNum);
// because the value of bool ture is 1...

let myNumber = 34.908;
// parse float means it is not an integer because it have point value..
console.log(parseFloat(myNumber));
console.log(parseInt(myNumber));
console.log(Number(myNumber));

// use of to fixed function...
myNumber = myNumber.toFixed(2);
console.log(myNumber, typeof myNumber);
// it means if you used tofixed function then that number convert in string...

let my1 = "344";
let my2 = 56;
console.log(my1 + my2); // this is string
console.log(my1, my2);
// , means print that variable right side with that type...
// and + means thta is joint with that variable...  it use for concentinition...
// that is the biggest difference between + and , for concantinate...

console.log(Number(my1) + my2);