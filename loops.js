// foreach loop

let myArr = [1, 49, 'Abhi', null, undefined];

myArr.forEach(function (element) {
    console.log(element);
})

// don't forget syntex(stracture) of foreach loop...

let obj = {
    name: 'Abhi',
    age: 18,
    type: 'programmer',
    os: 'windows'
}

// now if i want to print all detaile of object in loop then...

for (key in obj) {
    console.log(`The ${key} of object is ${obj[key]}.`);
}