

document.querySelector("button").addEventListener("click", function () {
    
    var randomNumber1 = Math.floor((Math.random() * 6) +1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor((Math.random() * 6) +1);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
    document.querySelector(".img1").classList.add("rotateOut");

    setTimeout(() => {
        document.querySelector(".img1").classList.remove("rotateOut");
    }, 1000);

    var player1Wins = new Audio('sounds/Player1Wins.mp3');
    
    player1Wins.play();

} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";

    document.querySelector(".img2").classList.add("rotateOut");

    setTimeout(() => {
        document.querySelector(".img2").classList.remove("rotateOut");
    }, 1000);

    var player2Wins = new Audio('sounds/Player2Wins.mp3');
    
    player2Wins.play();

} else {
    document.querySelector("h1").innerHTML = "Draw!";

    document.querySelector(".img1").classList.add("rubberBand");

    setTimeout(() => {
        document.querySelector(".img1").classList.remove("rubberBand");
    }, 1000);

    document.querySelector(".img2").classList.add("rubberBand");

    setTimeout(() => {
        document.querySelector(".img2").classList.remove("rubberBand");
    }, 1000);

    var draw = new Audio('sounds/draw.mp3');
    
    draw.play();

}

})