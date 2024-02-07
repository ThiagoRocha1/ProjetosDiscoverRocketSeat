import state from './state.js'
import * as event from "./event.js"
import * as timer from "./timer.js"


export function startTimer(minutes,seconds){
    state.minutes = minutes;
    state.seconds = seconds;

    timer.updateDisplay()

    event.captureControls()
    event.captureSoundClicked()
}