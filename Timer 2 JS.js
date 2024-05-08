const timeNum = 0;

function addFunction (){
    const input = document.querySelector('.input-add'),
        timeText = document.querySelector('.time-add-text'),
        btn = document.querySelector('.add-final'),
        nextDiv = document.querySelector(`.${timeNum + 1}-div`),
        nextText = document.querySelector(`.${timeNum + 1}-`),
        nextInput = document.querySelector(`.name-${timeNum + 1}`),
        name = document.querySelector(`.input-add`).value;

    
    nextDiv.style.display = 'flex';
    nextInput.innerHTML = name || `untitled.${timeNum +1}`; 
    
    timeNum ++;
}