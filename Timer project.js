let numberTimers = 0;
const displayManualSet = document.querySelector('.display-manually'); 
const divManual = document.querySelector('.div-add-new-timer');
let isEditing = 0;


displayManualSet.addEventListener('click', () => {
  if(isEditing === 0){
  displayManualSet.innerHTML = '<';
  divManual.classList.add('div-manually-activated');
  isEditing = 1;
} else {
  displayManualSet.innerHTML = '>'; 
  divManual.classList.remove('div-manually-activated'); 
  isEditing = 0;
}
})
/*  if(!document.querySelector('manually-timer-minutes-js')){
let manualMinutes = document.querySelector('manually-timer-minutes-js').value;
let manualSeconds = document.querySelector('manually-timer-seconds-js').value;
}  */


const selectOptionNewTimer = document.querySelector('.select-minutes-timer');
const addTimerButton =  document.querySelector('.add-timer');
const setNewNameTimer = document.querySelector('.name-timer');


function addNewTimer(){
  if (setNewNameTimer) {
    let typedName = setNewNameTimer.value;}
    
//<img src="${pauseOrPlay} for Timer.${pngOrjpg}"> 
//<p class="name-timer-displayed">${typedName}</p>

    if (isEditing === 0) {
      let selectedOption = selectOptionNewTimer.value;
      numberTimers++;

  if(String(selectedOption).indexOf('min') !== -1){
     let autoMinutes = parseInt(String(selectedOption).split('min')[0].slice(0, -1));
     let autoSeconds = parseInt(String(selectedOption).split('min')[1].slice(0, -1));
     }
}
  
  
 if(isEditing === 1){
  numberTimers++;
  let manualMinutes = document.querySelector('manually-timer-minutes-js').value;
  let manualSeconds = document.querySelector('manually-timer-seconds-js').value;
  //let manualTime = (manualMinutes * 60 + manualSeconds) * 1000 
 }


 if(!typedName){
  typedName = `untitled Timer.${numberTimers}`
  }
  document.querySelector('.one-timer').innerHTML = newTimerHTML;
  document.querySelector('.timers-div').classList.add('one-timer-all');
  if(!manualMinutes || !manualSeconds){ console.log('timer time set with dropdown list')
 }


 if(isEditing === 0) { document.querySelector('.countdown').innerHTML = `${autoMinutes}:${manualSeconds}` }
 else {document.querySelector('.countdown').innerHTML = `${manualMinutes}:${manualSeconds}`}

 document.querySelector('.name-timer-displayed').innerHTML = `<p class="name-timer-displayed">${typedName}</p>`;
  //name of the timer
};

addTimerButton.addEventListener('click', ()=>  addNewTimer())


let pauseOrPlay = 'Pause'; 
document.querySelector('.pause-timer').innerHTML = `<img class="image-play-pause" src="Pause for Timer.png">`;
document.querySelector('.pause-timer').classList.add('PAUSE-timer');
document.querySelector('.pause-timer').addEventListener('click', ()=>{
  if(pauseOrPlay === 'Pause'){
    pauseOrPlay = 'Play'; 
    document.querySelector('.pause-timer').innerHTML = `<img class="image-play-pause" src="Play for Timer.png">`;
  } else {
    pauseOrPlay = 'Pause';
    document.querySelector('.pause-timer').innerHTML = `<img class="image-play-pause" src="Pause for Timer.png">`  
  }
})

