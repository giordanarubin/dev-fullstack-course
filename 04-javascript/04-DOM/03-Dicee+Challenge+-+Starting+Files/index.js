randomNumber1 = Math.floor((Math.random() * 6) + 1);
randomNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);
console.log(randomNumber2);

switch (randomNumber1) {
    case 1: document.getElementById("img1").setAttribute("src", "./images/dice1.png");
    break;
    case 2: document.getElementById("img1").setAttribute("src", "./images/dice2.png");
    break;
    case 3: document.getElementById("img1").setAttribute("src", "./images/dice3.png");
    break;
    case 4: document.getElementById("img1").setAttribute("src", "./images/dice4.png");
    break;
    case 5: document.getElementById("img1").setAttribute("src", "./images/dice5.png");
    break;
    default: document.getElementById("img1").setAttribute("src", "./images/dice6.png");
}

switch (randomNumber2) {
    case 1: document.getElementById("img2").setAttribute("src", "./images/dice1.png");
    break;
    case 2: document.getElementById("img2").setAttribute("src", "./images/dice2.png");
    break;
    case 3: document.getElementById("img2").setAttribute("src", "./images/dice3.png");
    break;
    case 4: document.getElementById("img2").setAttribute("src", "./images/dice4.png");
    break;
    case 5: document.getElementById("img2").setAttribute("src", "./images/dice5.png");
    break;
    default: document.getElementById("img2").setAttribute("src", "./images/dice6.png");
}
/* outra forma de fazer os passos acima (switch):

var randomImage = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",  randomImage);
document.querySelectorAll("img")[1].setAttribute("src",  randomImage);
*/

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
