// console.log('done');

/*
promise is basically an object
Promise : give me this data 	// This is a simple promise
resolve,
reject,
panding
*/

function fun1() {
    return new Promise(function(resolve, reject) {
        // here we set setTimeOut function but in real timing here what are actually processing
        // here, pulling data form the server...
        setTimeout(() => {
        	// In real time, Here we have to check http request status code..
        	// if it's 200 then its means all are okay...
                const error = false;
                if (error) {
                    console.log('function: your promise has been resolved.');
                    resolve();
                }
                else{
                	console.log('function: your promise has been rejected.');
                	reject('Sorry, can not fill fatched');
                }
            }, 2000) // 2 sec. to bring data from the servers...
    })
}

// there are 2 methods of promise...
// 1. then is for resolve function and 2. catch is for reject function
fun1().then(function(){		// if resolve then its runs this runction otherwise catch.
	console.log('Abhi: Thanks for rasolving.');
}).catch(function(error){	// passing reject() function as an argument...
	console.log(`Abhi: very bad.  Reason: ${error}`);
})

// inside then - resolve
// inside catch - reject