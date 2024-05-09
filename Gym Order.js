let workoutsList = JSON.parse(localStorage.getItem('workoutsList')) || ['Forearms','Biceps', 'Back', 'Chest']
 
const workoutDiv = document.querySelector('.workout-1-div')
const secondWorkoutDiv = document.querySelector('.second-workout-div')

function adjustZoom() {
    var windowWidth = window.innerWidth;
    var thresholdWidth = 700; 

    if (windowWidth < thresholdWidth) {
        var zoomScale = windowWidth / (thresholdWidth);
        document.body.style.zoom = zoomScale;
    } else {
        document.body.style.zoom = 1;
    }
}
adjustZoom();
window.addEventListener('resize', adjustZoom);

const workoutsGenerator = ()=>{
    secondWorkoutDiv.innerHTML = ''
    for(i = 0; i< workoutsList.length; i++){
        if(i === 0){
            //workoutDiv.innerHTML = `<div class="workout-1"><p class="workout-1-text">${workoutsList[i]}</p><div class="done-button-div"><button class="done-button-workout done">Done</button></div></div>`
            document.querySelector('.workout-1-text').innerHTML = workoutsList[i]
        }else{
            secondWorkoutDiv.innerHTML += `<div class="workout-${i+1}"><p class="workout-${i+1}-text">${workoutsList[i]}</p></div>`
        } 
    }
    if(workoutsList.length === 1){
        document.querySelector('.workout-1-div').style.borderRadius = '30px';
        document.querySelector('.second-workout-div').style.display = 'none';
    }else{
        document.querySelector('.workout-1-div').style.borderRadius = '30px 30px 0px 0px';
        document.querySelector('.second-workout-div').style.display = 'block';
    }
    if(workoutsList.length >= 4){
        document.documentElement.style.height = 'auto';
    }
    localStorage.setItem('workoutsList', JSON.stringify(workoutsList));
}
workoutsGenerator()

const changeOrder = () => {
    if (workoutsList.length > 0) {
        const firstElement = workoutsList.shift(); // remove 1st value
        workoutsList.push(firstElement);    //push it to the end 
    }
    workoutsGenerator();
    editWorkoutGenerator();
    localStorage.setItem('workoutsList', JSON.stringify(workoutsList));
}

document.querySelector('.done-button-workout').addEventListener('click', ()=> changeOrder())

//document.querySelector('.done-button-workout').addEventListener('click', ()=> changeOrder())
const editDiv = document.querySelector('.edit-div');
const editWorkoutGenerator = ()=> {
    for(i=0; i < workoutsList.length; i++){        
        document.querySelector(`.edit-${i+1}`).classList.add('display-initial')
        document.querySelector(`.edit-input-${i+1}`).placeholder = workoutsList[i].charAt(0).toUpperCase() + workoutsList[i].slice(1).toLowerCase()
    }
}
editWorkoutGenerator()


/*const changeWorkout1 = () => {
    const newName = input1.value.trim(); // trim any whitespace
    if (newName !== '') { 
        workoutsList[0] = newName;
        input1.value = '' // clear the input
        input1.blur();
        workoutsGenerator();
        editWorkoutGenerator();
    } else {
        console.log('Please enter a valid workout name.');
    }
}
*/


const workoutChange = (num)=>{
    const input = document.querySelector(`.edit-input-${num}`)
    const newName = input.value.trim();
    if(newName !== '' && newName){
        workoutsList[num - 1] = newName;
        input.value = '';
        input.blur();
        workoutsGenerator();
        editWorkoutGenerator();
    } else{
        console.log('ERROR')
    }
    localStorage.setItem('workoutsList', JSON.stringify(workoutsList))
}

document.querySelector('.edit-done-1').addEventListener('click', ()=> workoutChange(1))
document.querySelector('.edit-input-1').addEventListener('keydown', event =>{
    if(event.key === "Enter"){ workoutChange(1) }
})
document.querySelector('.edit-done-2').addEventListener('click', ()=> workoutChange(2));
document.querySelector('.edit-input-2').addEventListener('keydown', event =>{
    if(event.key === "Enter"){ workoutChange(2) }
})
document.querySelector('.edit-done-3').addEventListener('click', ()=> workoutChange(3))
document.querySelector('.edit-input-3').addEventListener('keydown', event =>{
    if(event.key === "Enter"){ workoutChange(3) }
})
document.querySelector('.edit-done-4').addEventListener('click', ()=> workoutChange(4));
document.querySelector('.edit-input-4').addEventListener('keydown', event =>{
    if(event.key === "Enter"){ workoutChange(4) }
})
document.querySelector('.edit-done-5').addEventListener('click', ()=> workoutChange(5))
document.querySelector('.edit-input-5').addEventListener('keydown', event =>{
    if(event.key === "Enter"){ workoutChange(5) }
})
document.querySelector('.edit-done-6').addEventListener('click', ()=> workoutChange(6));
document.querySelector('.edit-input-6').addEventListener('keydown', event =>{
    if(event.key === "Enter"){ workoutChange(6) }
})
document.querySelector('.edit-done-7').addEventListener('click', ()=> workoutChange(7))
document.querySelector('.edit-input-7').addEventListener('keydown', event =>{
    if(event.key === "Enter"){ workoutChange(7) }
})
document.querySelector('.edit-done-8').addEventListener('click', ()=> workoutChange(8));
document.querySelector('.edit-input-8').addEventListener('keydown', event =>{
    if(event.key === "Enter"){ workoutChange(6) }
})


// ADD FUNCTION
const addButton = document.querySelector('.add-button');
const inputAdd = document.querySelector('.add-input');
const addWorkout = ()=> {
    const newWorkout = inputAdd.value.trim();
    if(newWorkout !== ''){
        workoutsList.push(newWorkout)
        inputAdd.value = '';
        inputAdd.blur();
        workoutsGenerator();
        editWorkoutGenerator();
    }else{
        console.log('please enter a valid workout name')
    }
    localStorage.setItem('workoutsList', JSON.stringify(workoutsList))
}
addButton.addEventListener('click', ()=>addWorkout());
inputAdd.addEventListener('keydown', (event)=>{
    if(event.key === "Enter"){
        addWorkout()
    }
})
