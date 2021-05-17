// sync javascript
// here all console.log displays one by one execution...

function fn(){
    console.log('We are inside function...');
}

console.log('Start');

fn();

console.log('End');


// async javascript
// its exicution something like this type...

console.log('start');

setTimeout(() => {
    console.log('We are inside setTimeout function...');
}, 1500);

console.log('End');

// 1st start console.log, 2nd end console.log after all that process settimeout function ran...