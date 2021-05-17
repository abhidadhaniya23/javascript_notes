// promise is basically an object...

// it has to most important factor(parameter)
// and those are resolve and reject...

// if any promise complate task which is given by us (or user) then it's resolve
// if its not resolve then its reject...
// and third state is panding statement...
/*
const promise = new Promise((resolve, reject)=>{
    // assume this response bringing from an api or any database...
    setTimeout(() => {
        reject(new Error(`user not logged in...`))
        console.log('we got data of user');
        // resolve({user: 'abhi'});
    }, 2000);
})
promise.then(user=>{
    console.log(user);
}).catch(err=>{
    // its show full error with its content...
    // console.error(err);
    // but you want to show only error msg.
    console.log(err.message);
});
*/




console.log('start');

// ==>  how to solve callbackFunctions.js user code using promises...?

// function userData(email, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ username: email });
//         }, 2000);
//     });
// }


function loginUser(userName, Password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ username: userName });
        }, 3000);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
        }, 1500);
    })
}

function videoDetails(videos) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve('Title of video is this...');
        }, 1000);
    })
}

// loginUser('abhi07', 123456)
// .then(user => getUserVideos(user.email) )    // now this is also returns a promise... so,
// .then(videos => videoDetails(videos[0]) )
// .then(details => console.log(details) );

// how Promise.all works ...?

const yt=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('getting videos from yt...');
        resolve({ videos:[1,2,3,4,5] });
    }, 2000);
})
const fb=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('getting from fb...');
        resolve({ user:'username' });
    }, 2000);
})

// so, this is the use of promise.all
Promise.all([yt,fb])
.then(result=>console.log(result));

console.log('end');