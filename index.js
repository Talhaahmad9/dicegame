var no1 = Math.floor((Math.random()*6)+1);

var image1 = "./images/dice" +no1+ ".png";
document.querySelectorAll("img")[0].setAttribute("src", image1);

var no2 = Math.floor((Math.random()*6)+1);

var image2 = "./images/dice" +no2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);

if(no1>no2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(no2>no1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}