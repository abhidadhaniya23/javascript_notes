console.log('done');

let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log('clicked fetch btn...');

    // craete an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    // xhr.open('get/post' ,'data from where','blocking or non blocking')
    // xhr.open('get/post' ,'data from where','synchronous or asynchronous')
    // xhr.open('get/post' ,'data from where','false or true')
    // xhr.open('GET', 'https://api.covid19api.com/live/country/india', true);

    // use this for post request...
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // xhr.getResponseHeader('Content-type', 'application/x-www-form-urlencoded');
    // use this when your content type is json...
    xhr.getResponseHeader('Content-type', 'application/json');
    // this is a response header..
    // it means we aare sending form data data in url...


    // get => only fetch data...
    // post => fetch data and send other data to server...

    // what to do on progress...
    // aslo optional
    xhr.onprogress = function () {
        // use this progress when you want to use loading animations....
        // console.log('data is progressing...');
    }

    // optional portion...
    xhr.onreadystatechange = function () {
        console.log('ready state change is : ' + xhr.readyState);
    }
    //raedy state values...
    /*
    0 => unsent
    1 => opened
    2 => send called...
    3 => loading
    4 => opration complete (done)....
    */

    // xhr.onload means you reached 4th ready state value...

    // when response ready...
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(JSON.parse(this.responseText));
        }
        else {
            console.error('Data not found...');
        }
        // watch this all status list...
        // https://www.restapitutorial.com/httpstatuscodes.html
    }

    // parameters for post data...
    params = { "name": "test", "salary": "123", "age": "23" };
    xhr.send(params)

    // send request...
    // xhr.send();

}

// this is an simple example for poppulate button... to learn something by myself...

let popBtn = document.getElementById('popBtn');

popBtn.addEventListener('click', popButtonHandler);

function popButtonHandler() {

    const xhr = new XMLHttpRequest();

    // xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

    xhr.onload = function () {
        let json = JSON.parse(this.responseText);
        console.log(json);
        Array.from(json.data).forEach(function (e) {
            document.querySelector('.container').innerHTML += `
            <div class="person">
                <img src='${e.avatar}'>
                <p>Name : ${e.first_name}</p>
                <p>Email : ${e.email}</p>
            </div>
            `;
        });
    }
    xhr.send();
}