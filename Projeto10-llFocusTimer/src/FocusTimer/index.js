import * as event from "./event.js"
import * as el from "./elements.js"
import state from './state.js'


export function startTimer(minutes,seconds){
    state.minutes = minutes;
    state.seconds = seconds;
}