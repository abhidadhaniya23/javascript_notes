// tutorials 10

// first of all...

// why function is used ?

// if

console.log('Hello world');

// if this sentence write many times or some conditions and more than value and other more is available in this...
// then use function like this...

function fn() {
    console.log('Hello world');
}
// this is the first type of structure of function...

// now calling function...
fn();

// this is second type of perameter passing function...

function greet(name) {
    console.log(`Good morning ${name}`);
}
greet('Abhi');  // use '' for declare any parameter...
greet('varun');

// if i want to store this {greet('Abhi)} in a variable then use return...

// if i don't use return then...

let val = greet('Margin');
// console.log(val);   // print undifined...

// so use return... like this type...

function greeting(name, thank) {
    let message = `Happy birthday ${name} and ${thank}`;
    return message;
}

// now i store in variables...

let mes = greeting('Margin', 'Thankyou very much...');
console.log(mes);

greeting('Abhi');
// if i only use name parameter and don't use thank then it print undifined...
// and thet is very bad...
// then what to do ?

function myGreet(name, thank = 'Thank you') {
    myMsg = `Happy birthday ${name} and ${thank}`;
    return myMsg;
}
let valu = myGreet('Dev', 'Thanks a lot');
console.log(valu);

valu = myGreet('Dev')
console.log(valu);  // print dev para. and thank you default parameter.....

// now if i want to store any function in a variable... then...
// a function storing in any variable then don't declare that function name...

const myGreeting = function () {
    console.log('This function is stored in myGreeting variable...');
}
myGreeting();
// like this type...

// In object, I also made a function like this type...

let myObj = {
    name: 'Rohan',
    game: function () {
        return 'GTA 5';
    }
}
console.log(`${myObj.name}'s Favourite game is ${myObj.game()}.`);

let arr = ['Fruits', 'Toys', 'Chairs'];
arr.forEach(function (element, index, array) {
    console.log(index + 1, element);
    console.log(index + 1, element, array);
})