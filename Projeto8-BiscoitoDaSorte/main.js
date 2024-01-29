//Consts
const closedCookie = document.querySelector("#closed-cookie");
const button = document.querySelector("button");
let divClosed = document.querySelector(".closed");
let divOpen = document.querySelector(".open");
let sorteText =document.querySelector(".sorte p");
let textArray = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A solidão é a sorte de todos os espíritos excepcionais.",
    "Não ser amado é falta de sorte, mas não amar é a própria infelicidade.",
    "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
    "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho."
]

//Functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function handleClickClosedCookie(){
    let randomNumber =  getRandomInt(0,4);

    divClosed.style.display = "none";
    sorteText.innerText= `${textArray[randomNumber]}`;
    divOpen.style.display = "flex";
}

function handleClickButton(event){

    if(event == "Enter"){
        divClosed.style.display = "flex";
        divOpen.style.display = "none";
    }

    divClosed.style.display = "flex";
    divOpen.style.display = "none";
}

//Events
closedCookie.addEventListener('click',handleClickClosedCookie);
button.addEventListener('click',handleClickButton);
button.addEventListener("mousedown",handleClickButton(event));