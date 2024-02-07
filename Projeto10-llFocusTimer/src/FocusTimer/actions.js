import state from './state.js';
import { updateDisplay } from './timer.js';
import * as el from "./elements.js";
import * as timer from './timer.js';
import * as audio from './audios.js';

export function start (){
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.startCountdown();
}

export function increaseTime (){
    let minutes = Number(el.minutes.innerText);

    if(!state.isRunning){
        if(minutes < 120){
            minutes += 5;
            state.minutes = minutes;
            updateDisplay(minutes,state.seconds);
            return;
        }else{
            alert('Limite máximo atingido!')
            return;
        }
    }
    
}

export function decreaseTime (){
    let minutes = Number(el.minutes.innerText);

    if(!state.isRunning){
        if(minutes > 0 && ((minutes-5) > 0)){
            minutes -= 5;
            state.minutes = minutes;
            updateDisplay(minutes,state.seconds);
            return;
        }else if ((minutes-5) < 0){
            return;
        }
        else{
            alert('Limite mínimo atingido!');
            return;
        }
    }  
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay() 
}

export function playForestAudio(event){
    if(!state.isNatureSoundPlaying){
        state.isNatureSoundPlaying = true;

        audio.natureAudio.loop = true;
        audio.natureAudio.play();

        el.natureSound.classList.add("selected-box");
    }else{
        el.natureSound.classList.remove("selected-box")

        state.isNatureSoundPlaying = false;

        audio.natureAudio.pause();
    }
}

export function playRainAudio(){
    if(!state.isRainSoundPlaying){
        state.isRainSoundPlaying = true;

        audio.rainAudio.loop = true;
        audio.rainAudio.play();

        el.rainSound.classList.add("selected-box");
    }else{
        el.rainSound.classList.remove("selected-box")
        
        state.isRainSoundPlaying = false;

        audio.rainAudio.pause();
    }
}

export function playCafeteriaAudio(){
    if(!state.isCafeteriaSoundPlaying){
        state.isCafeteriaSoundPlaying = true;

        audio.cafeteriaAudio.loop = true;
        audio.cafeteriaAudio.play();

        el.cafeteriaSound.classList.add("selected-box");
    }else{
        el.cafeteriaSound.classList.remove("selected-box")
        
        state.isCafeteriaSoundPlaying = false;

        audio.cafeteriaAudio.pause();
    }
}

export function playCampfireAudio(){
    if(!state.isCampfireSoundPlaying){
        state.isCampfireSoundPlaying = true;

        audio.campfireAudio.loop = true;
        audio.campfireAudio.play();

        el.campfireSound.classList.add("selected-box");
    }else{
        el.campfireSound.classList.remove("selected-box")
        
        state.isCampfireSoundPlaying = false;

        audio.campfireAudio.pause();
    }
}