export function setBackgroundAndNavStyle (){
    const {pathname} = window.location;

    if(pathname == "/"){
        document.querySelector("nav a:nth-child(1)").classList.add("selected-route");
        document.querySelector("body").style.backgroundImage = "url(./assets/mountains-universe.png)"

    }else if(pathname== "/Universe"){
        document.querySelector("nav a:nth-child(2)").classList.add("selected-route");
        document.querySelector("body").style.backgroundImage = "url(./assets/mountains-universe-2.png)"

    }else if(pathname== "/Explore") { 
        document.querySelector("nav a:nth-child(3)").classList.add("selected-route");
        document.querySelector("body").style.backgroundImage = "url(./assets/mountains-universe-3.png)"
    }else{
        document.querySelector("body").style.backgroundImage = "url(./assets/mountains-universe.png)"
        return;
    }
}