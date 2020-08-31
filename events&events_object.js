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