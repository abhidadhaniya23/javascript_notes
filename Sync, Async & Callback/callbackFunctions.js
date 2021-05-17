// what is call back functions...?

// console.log('start');

// function loginUser(userName, Password){
//     setTimeout(() => {
//         // i am returning an object for only username...
//         return {username: userName};
//     }, 3000);
// }

// let userName=loginUser('abhi07',12345);
// console.log(userName);

// console.log('end');

// what we have the result about userName ??? => its undifined...

// bcoz username returns after 3 seconds

// for that reasons we have to use callback functions method...

console.log('start');

function loginUser(userName, Password, callback) {
    setTimeout(() => {
        // i am returning an object for only username...
        console.log('we have the data of user...');
        // here we have to use callback insted of returns...
        callback({ username: userName });
    }, 3000);
}

// here's the 3rd parameter is callback function from loginUser() function...
let user = loginUser('abhi07', 12345, (user) => {
    console.log(user);
    getUserVideos(user.userName, (videos)=>{
        console.log(videos);
    });
});
// this console.log() returns value when data taken by loginUser()...

console.log('end');

// now if i want to use userVideos functions then its nesteding in callbacks and its not good for me...
// something like this type...

function getUserVideos(email, callback){
    setTimeout(() => {
        callback(['video1','video2','video3']);
    }, 1500);
}