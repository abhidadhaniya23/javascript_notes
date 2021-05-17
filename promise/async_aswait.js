// how to use async || await...?

console.log('start');

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
//     .then(user => getUserVideos(user.email))    // now this is also returns a promise... so,
//     .then(videos => videoDetails(videos[0]))
//     .then(details => console.log(details));

async function displaUser() {
    let loggedUSer = await loginUser('ABhi',098765);
    let videos = await getUserVideos(loggedUSer.userEmail);
    let details=await videoDetails(videos[0]);
    console.log(details);
}
displaUser();

console.log('end');