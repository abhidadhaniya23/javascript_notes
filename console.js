// tutorials 2

console.log("Hello world");
console.warn("Thid is a warning.");
console.error("This is an error.");

// timing function in javascript for console...
console.time("startTime");
console.log("Testing data of javascript");
console.timeEnd("startTime");

console.log([1, 43, 87, 'abhi']);
console.table([1, 43, 87, 'abhi']); // for view in table..

console.table({    // this is an object..
    name: 'abhi',
    marks: 90
})

console.clear();  // clear the console

// console.assert(condition, throw error);
// if this condition is false then print error...
console.assert(12 < 90, 'this is right');
console.assert(12 > 90, 'this is wrong');

// use of backticks - (`)

let name = "abhi";
name = 'dev';
// this are equals but...

name = `oran
        ge`
// this featchere is available in ``
// it means one line break and you write in second line...