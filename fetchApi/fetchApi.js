console.log('done');

// https://reqres.in/api/users

// console.log(fetch('https://reqres.in/api/users'));

// function getData(){
//     fetch('https://reqres.in/api/users')
//     .then(response=>{return response.json()})
//     .then(data=>{
//         console.log(data.data);
//         Array.from(data.data).forEach((e)=>{
//             let imgElm=document.createElement('img');
//             let divElm=document.createElement('div');
//             imgElm.src=e.avatar;
//             divElm.append(imgElm);
//             document.body.appendChild(divElm);
//         });
//     });
// }

// getData();




async function getData(){
    const response=await fetch('https://api.github.com/users');
    const user= await response.json();
    return user;
}

let data=getData();
data.then(data=>{
    console.log(data);
    Array.from(data).forEach(e=>{
        // console.log(parseInt(Math.random()*255));
        let anchorTag=document.createElement('a');
        let divElm=document.createElement('div');
        let imgElm=document.createElement('img');
        let color=`rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
        anchorTag.href=`${e.html_url}`;
        imgElm.src=e.avatar_url;
        imgElm.style.border=`3px solid ${color}`;
        divElm.classList.add('divElm');
        divElm.style.background=`${color}`;
        imgElm.onload=()=>{
            anchorTag.append(imgElm);
            divElm.append(anchorTag);
            document.body.append(divElm);
        }
    })
}).catch(error=>{console.error('Data is not coming'+error)});

window.onscroll=function(event){
    console.log(event);
}