// tutorials 6

const name = 'Abhi';
const greeting = 'Good Morning';
console.log(greeting, name);

// functions in strings...

// there is a method for concate two or many strings...
// like this...

let html;
html = '<h1>This is a heading</h1>' + '<p>This is a paragraph</p>';
console.log(html);
html = '<h1>This is a heading</h1>';
html = html.concat('<p>This is a paragraph</p>', 'this is more than string');
console.log(html);

html = 'This Is A String'
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);  // this is not returning value...

//if
html = html.toLowerCase();
console.log(html);

// indexing in js
html = 'This Is A String';
console.log(html[1]);   // gives first latter
console.log(html.indexOf('A')); // gives starting a at howmany index
console.log(html.lastIndexOf('i')); // gives last i at howmany index
console.log(html.charAt(2));    // like first html[0]

// ends with function retun true or false
// and it means string html is ends with (this?)
console.log(html.endsWith('string'));
console.log(html.endsWith('String'));

// includes function
// means that words is avaulable in your srting ?
// this is also retun ans in true...
console.log(html.includes('Is'));
// if space is available in string?
console.log(html.includes(' '));

// substring function...
// like this type...
console.log(html.substring(0, 12));
console.table(html.substring(2, 6));

// slice function... like substring
// but difference between this is...
// simply slice means != starting (not equals to starting...)
console.log(html.slice(3));
console.log(html.slice(0, 3));
console.log(html.slice(-4));
// nagative means last to start...
// but this nagative is not allowed in substring...

// split function...
console.log(html.split(' '));
// returns in an array...
// if i want to split ti is then...
console.log(html.split('s'));
// and also that word or string is dissapere from array's element...

// replace function...
console.log(html.replace('This', 'that'));
// but this is only replace first this, not all this
console.log(html);
console.log(html.replace('s', 'y'))

// template litterals...
let fruit1 = 'orange';
// let fruit2 = 'app'le';   this is an error but
let fruit2 = 'app\"le';
// in backticks we are easily write '
let myHtml = `<h1> This is an ${fruit1}</h1>
                 <h3>and this is also ${fruit2}</h3>`;
document.getElementById('notes').innerHTML = myHtml;