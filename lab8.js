
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
