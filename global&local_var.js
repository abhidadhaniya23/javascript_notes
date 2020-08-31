// continue in tutorials 10...

// what is global and local variables...?

// let/const has block level scop...
// and var has function scop

var i = 777;
// this i is an global variable...

function myFn() {
    // var i = 100;
    // this i is an local variabel...
    // console.log(i);
    // if
    i = 200;
    // then it is modified global i (line no. 5)
}
myFn();
console.log(i);

// now using let...

let a = 234;

function fn() {
    // let a = 450;
    // console.log(a);

    a = 450;    // this modifide line no. 24th a...
    console.log(a);
}
fn();
console.log(a);

// if

{
    // if let
    // let x = 700;
    // console.log(x);  

    // if var then
    var x = 700;
    console.log(x);
}
console.log(x);

// x is undifined error when i use let...
// it means let is block level scop and var is global level scop...