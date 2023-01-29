let myImg = document.createElement('img');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function randomSrc() {
    let a = getRandomIntInclusive(1, 9);
    return `img/${a}.jpg`
}


myImg.src = randomSrc();

document.body.appendChild(myImg);