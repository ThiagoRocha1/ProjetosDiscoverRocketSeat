import * as el from './elements.js';
import * as command from './actions.js'

export function captureControls(event){
    const action = event.target.dataset.action;

    if(typeof command[action] != "function") {
        return;
    }

    command[action]();
}

el.controls.addEventListener('click',captureControls);

export function setMinutes(){
    
}