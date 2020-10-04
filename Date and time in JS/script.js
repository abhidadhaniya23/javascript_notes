setInterval(() => {
    document.body.innerHTML = `<h2>${new Date().toLocaleTimeString()}</h2>`
}, 1000);

let days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]
let months = [
    'january', 'fabuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];


let time = new Date();
// console.log(time)
// console.log(time.toDateString()); // day MMDDYY
// console.log(time.toLocaleString()); // date and time
// // time.setDate(7 / 7 / 2002);
// console.log(days[time.getDay()]);
// console.log(months[time.getMonth()]);
// console.log(time.getDate());
// console.log(time.getFullYear());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());


/*
let time = new Date(`7-6-2002`);
console.log(days[time.getDay()]);
console.log(time.getFullYear());
*/

let myBdate = new Date();

// myBdate.setFullYear(2002);
// myBdate.setDate(6);
// myBdate.setMonth(7);
console.log(new Date());
// console.log(myBdate.getTime() / 1000 / 60 / 60 / 24 / 365);

myBdate = new Date('7/6/2002');
// let a = myBdate.getTime() / 1000 / 60 / 60 / 24 / 365;
let a = myBdate.getFullYear();
let b = new Date().getFullYear();
console.log(`you are ${b - a} years old.`);
console.log(`(Birth-year:${a.toFixed(0)}, Current-year:${b})`);

// console.log(myBdate.getFullYear());
// console.log(myBdate.getDate());
// console.log(myBdate.getMonth());