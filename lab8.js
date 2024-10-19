//function get random cat images from the `the cat api`
function getRandomCat() {
    fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(response => response.json())
    .then (data => {
        console.log(data);
        let catImg = data[0].url;
        document.getElementById(`catImage`).src = catImg;
    })
    .catch(error => console.error(`Error fretching data: `, error));
}

//call the getRandomCat function to display random cat images
getRandomCat();

//add eventlistener to click button --> get random cat image when click
document.getElementById(`next`).addEventListener(`click`, getRandomCat);