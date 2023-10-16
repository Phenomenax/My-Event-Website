// Base URL of Music API endpoint
const baseUrl = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/musicians/";

// const my_website_code = ['Pete123',"not provided"]
// const queryParams = {
//     website_code: my_website_code
// }

// const queryString = new URLSearchParams(queryParams).toString();
// const urlWithParams = baseUrl+"?"+queryString;

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(baseUrl, requestOptions)
.then(response => response.json())
.then(data => {
    console.log(data);
    const album_1 = document.getElementById('album_1');
    const album_2 = document.getElementById('album_2');
    album_1.innerText = data[0].song_title;
    album_2.innerText = data[1].song_title
})
.catch(error => console.log('error', error));