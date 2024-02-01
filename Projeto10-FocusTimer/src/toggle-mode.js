const buttonToggleMode = document.querySelector("#toggle-mode");
const html = document.querySelector("html");
let darkMode = true;

buttonToggleMode.addEventListener('click', (event)=>{
    html.classList.toggle('light');
    
    const mode = darkMode ? 'light' : 'dark';
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`;
    darkMode = !darkMode
})