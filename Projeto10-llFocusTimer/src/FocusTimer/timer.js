import * as el from "./elements.js";
import state from "./state.js";
import { reset } from "./actions.js";

export function startCountdown(){
    clearTimeout(state.countdownId)

    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--
    
    if(seconds < 0) {
        seconds = 59
        minutes--
    }
    
    if (minutes < 0) {
        reset()
        return
    }
    
    state.minutes = minutes;
    state.seconds = seconds;
    
    updateDisplay(minutes,seconds)

    state.countdownId = setTimeout(() => startCountdown(), 1000)
}

export function updateDisplay(minutes,seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(state.minutes).padStart(2,0);
    el.seconds.textContent = String(state.seconds).padStart(2,0);
}
