import * as el from "./elements.js";
import state from "./state.js";

export function updateDisplay(minutes,seconds){
    el.minutes.innerText = String(state.minutes).padStart(2,0);
    el.seconds.innerText = String(state.seconds).padStart(2,0);
}

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
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000)
}
