export function initStyleButtonStar(){
    const buttonStar = document.querySelector("#search button img");
    const button = document.querySelector("#search button");
    
    //Event
    button.addEventListener("mouseenter",()=>{
        buttonStar.src = "./assets/StarGreen.png";
    });

    button.addEventListener("mouseleave",()=>{
        buttonStar.src = "./assets/star.svg";
    });
}

//Tag
