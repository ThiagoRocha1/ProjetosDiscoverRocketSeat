import * as el from './elements.js';
import * as command from './actions.js'

export function captureControls(){
    el.controls.addEventListener('click',(event)=>{
        const action = event.target.dataset.action;

    if(typeof command[action] != "function") {
        return;
    }

    console.log(action);

    command[action]();
    });  
}

export function captureSoundClicked(){
    el.natureSound.addEventListener('click',command.playForestAudio);
    el.rainSound.addEventListener('click',command.playRainAudio);
    el.cafeteriaSound.addEventListener('click',command.playCafeteriaAudio);
    el.campfireSound.addEventListener('click',command.playCampfireAudio);
}