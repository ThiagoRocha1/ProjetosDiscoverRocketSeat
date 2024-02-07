import state from './state.js';
import * as el from "./elements.js";
import { updateDisplay } from './timer.js';
import * as timer from './timer.js'

export function startCountdown (){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.startCountdown();
}

export function stopCountdown (){}

export function increaseTime (){
    let minutes = Number(el.minutes.innerText);

    if(minutes < 120){
        minutes += 5;
        state.minutes = minutes;
        updateDisplay(minutes,seconds);
        return;
    }else{
        alert('Limite máximo atingido!')
        return;
    }
}

export function decreaseTime (){
    let minutes = Number(el.minutes.innerText);

    if(minutes > 0){
        minutes -= 5;
        state.minutes = minutes;
        updateDisplay(minutes,seconds);
        return;
    }else{
        alert('Limite mínimo atingido!');
        return;
    }
}