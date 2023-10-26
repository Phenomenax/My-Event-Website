// Base URL of Music API endpoint
const baseUrl = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/musicians/";

const my_website_code = ['Joe123']
const queryParams = {
    website_code: my_website_code
}

// Query parameters and request options
const queryString = new URLSearchParams(queryParams).toString();
const urlWithParams = baseUrl+"?"+queryString;

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// Get functions and DOM manipulations
fetch(urlWithParams, requestOptions)
.then(response => response.json())
.then(data => {
    console.log(data);
    const album_1 = document.getElementById('album_1');
    const album_2 = document.getElementById('album_2');
    const album_3 = document.getElementById('album_3');
    const album_today_description = document.getElementById('album-today-description');
    const album_today_musician = document.getElementById('album-today-musician');
    album_1.innerText = data[4].song_title;
    album_2.innerText = data[5].song_title;
    album_3.innerText = data[6].song_title;
    album_today_description.innerText = data[3].description;
    album_today_musician.innerText = data[3].song_title + '\n' + data[3].name
})
.catch(error => console.log('error', error));