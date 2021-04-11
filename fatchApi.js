
const myBtn=document.getElementById('myBtn');
const content=document.getElementById('content');

// myBtn.addEventListener('click',getData);


function getData(){
	console.log('started getData function()');
	url='https://jsonplaceholder.typicode.com/todos/1';
	fetch(url).then((response)=>{
		return response.text();
	}).then((data)=>{
		console.log(data);
	})
}
console.log('before getData function()');
getData();
console.log('after getData function()');