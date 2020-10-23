console.log('tutorials 17');

document.getElementById('main').addEventListener('click', function (e) {

    // this is a small example of redirecting page...
    // location.href = '//youtube.com';

    let variable;
    console.log('you clicked on heading.');
    variable = e.target;
    variable = e.target.id;
    variable = e.target.className;
    variable = Array.from(e.target.classList);

    variable = e.offsetX;   // offset means how many distance at clicked
    // please click on other words and these distences are differences
    // howlong you clicked realtive element
    variable = e.offsetY;

    variable = e.clientX; // howmany distance click you relative browser

    console.log(variable);
});

// tutorials 18
// more events in javascript.....

let mybtn = document.getElementById('mybtn');
mybtn.addEventListener('click', myFn);
function myFn(e) {
    console.log('You clicked for submit...', e);
    // use this e.preventDefalue for not redirect on none.html
    // because i used form tag, post method so it will be redirecting but use e.prevent default to don't redirect on that page...
    e.preventDefault();
}

document.querySelector('html').addEventListener('mousemove', function (e) {
    // console.log(e.offsetX, e.offsetY)
    document.querySelector('html').style.background = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
    document.querySelector('html').style.transition = 'background 0.5s ease';
    document.querySelector('li').innerText = `${e.offsetX},${e.offsetY}`
});

// 543 => x
// 1090 => y