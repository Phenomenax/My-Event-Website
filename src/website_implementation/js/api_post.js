// global constant variables
const audioFileInputLabel = document.getElementById('audio-file-input-label')
const audioFileInput = document.getElementById('audio-file-input')
const songForm = document.getElementById('songForm')

const my_website_code = "Joe123";

const baseUrl = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/musicians/";
const postMusicAudioMethod = "POST"; 

//  constant functions
const triggerFileInput = () => {
    audioFileInput.click();
};

const handleFileChange = () => {
    let fileName = audioFileInput.files[0].name;

    if (fileName.length > 20) {
        fileName = fileName.substring(0, 17) + "...";
    }

    audioFileInputLabel.textContent = fileName;
};

//  Post function and promise
const handleFormSubmit = event => {
    event.preventDefault();

    let formData = new FormData(event.target);
    formData.append("website_code", my_website_code);

    const requestOptions = {
        method: postMusicAudioMethod,
        body: formData,
        redirect: 'follow'
    }

    fetch(baseUrl, requestOptions)
    .then(response => response.json().then(data => {
        if (!response.ok) {
            console.log("Server response:", data);
            throw new Error("Network response was not ok");
        }
        return data;
    }))
    .then(data => {
        console.log(data);
        alert("Song submitted successfully!");
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error.message);
        alert("Error submitting event. Please try again.");
    });
}

// event listeners
audioFileInputLabel.addEventListener('click', triggerFileInput);
audioFileInput.addEventListener('change', handleFileChange);
songForm.addEventListener("submit", handleFormSubmit);