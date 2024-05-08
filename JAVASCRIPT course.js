


const todayDate = document.querySelector('.date-displayed');
const formatDate = (date = new Date()) => {
	let days = date.getDate().toString(); 
	if(days.length === 1){
		days = '0' + days;
	};
	let months = (date.getMonth() + 1).toString(); 
	if(months.length === 1){
		months = '0' + months;
	};
	const years = date.getFullYear();
	todayDate.innerHTML = `${days}/${months}/${years}`
}

formatDate();

/*
if(days.split('').lenght === 1){
		days = '0' + days
	}

if(months.split('').length === 1){
		months = '0' + months;
	} 
*/

let cartQuantity = 0; 
const age = 18; 
age >= 18 ? console.log('You can drive !') : console.log("You can't drive !");

let Calculation = localStorage.getItem('Calculation') || '';
let lastNumber = '';

function addNumber(elementCalculator) {
  Calculation += elementCalculator;
  console.log(Calculation);
  document.querySelector('.js-result-calculator').innerHTML = Calculation;
  localStorage.setItem('Calculation', Calculation);
}

function zeroAfterCancel() {
  if (Calculation === '0') {
    Calculation = '';
  }
  console.log(Calculation);
  document.querySelector('.js-result-calculator').innerHTML = Calculation;
  localStorage.setItem('Calculation', Calculation);
}



const subscribeButtonElement = document.querySelector('.js-button-subscribe'); 

function subscribeButtonFunction() {
if (subscribeButtonElement.innerHTML === 'Subscribe'){
subscribeButtonElement.innerHTML = 'Subscribed !'; 
subscribeButtonElement.classList.add('subscribed-class')
} else {
subscribeButtonElement.innerHTML = 'Subscribe';
subscribeButtonElement.classList.remove('subscribed-class')
}
};

function amazonShippingFunction () {
if (document.querySelector('.shopping-free-shipping').value >= 40) {
document.querySelector('.result-free-shipping').innerHTML = 'Free Shipping !' 
} else {
document.querySelector('.result-free-shipping').innerHTML = '10$ Shipping'
};
if(document.querySelector('.shopping-free-shipping').value <= 0) {
document.querySelector('.result-free-shipping').innerHTML = "Error: the cost can't be under 0$"; 
document.querySelector('.result-free-shipping').classList.add('red-error')
} else {
document.querySelector('.result-free-shipping').classList.remove('red-error')
}
}; 


function nameFunction(){
const nameUser = document.querySelector('.name-submit').value;
document.querySelector('.result-name').innerHTML = `Your name is : ${nameUser}`;
if (nameUser === 'Andrea' || nameUser === 'Andre') {
document.querySelector('.result-name').innerHTML = "OMG that's the GOAT (dans le gay sens du terme)" 
}; 
if (nameUser === 'Lorenzo' || nameUser === 'Lore'){
document.querySelector('.result-name').innerHTML = "Your name is Lore SOAT"
}
}; 

function buttonActivationFunction1() {
	document.querySelector('.js-button-only-one-on-1').classList.remove('js-button-activated'); 
	document.querySelector('.js-button-only-one-on-2').classList.remove('js-button-activated'); 
	document.querySelector('.js-button-only-one-on-3').classList.remove('js-button-activated'); 
	document.querySelector('.js-button-only-one-on-1').classList.add('js-button-activated'); 
};

function buttonActivationFunction2() {
	document.querySelector('.js-button-only-one-on-1').classList.remove('js-button-activated'); 
	document.querySelector('.js-button-only-one-on-2').classList.remove('js-button-activated'); 
	document.querySelector('.js-button-only-one-on-3').classList.remove('js-button-activated'); 
	document.querySelector('.js-button-only-one-on-2').classList.add('js-button-activated'); 
};

function buttonActivationFunction3() {
	document.querySelector('.js-button-only-one-on-1').classList.remove('js-button-activated'); 
	document.querySelector('.js-button-only-one-on-2').classList.remove('js-button-activated'); 
	document.querySelector('.js-button-only-one-on-3').classList.remove('js-button-activated'); 
	document.querySelector('.js-button-only-one-on-3').classList.add('js-button-activated'); 
}; 

const arrayToDoList = [];

function TodoListFunction1 (){
	arrayToDoList.push(document.querySelector('.input-Todo-List-1').value);
	console.log(arrayToDoList);
}; 


function funtionAccumulatorPattern () {
	const nums = [1, 1, 3];
let numsDoubled = [];

for (let i = 0; i < nums.length; i++){
	const num = nums[i]; 
	numsDoubled.push(num * 2)
};
console.log(numsDoubled);
console.log('code: line 93')
};


const arrayTodoList2 = [];
let todoListHTML = '';

function TodoListFunction2 () {
  const taskInput = document.querySelector('.input-Todo-List-2');
  const task = taskInput.value.trim();
  
  if (task !== '') {
    arrayTodoList2.push(task);
  }
  
  taskInput.value = '';
  
  todoListHTML = '';
  for (let i = 0; i < arrayTodoList2.length; i++) {
    const todo = arrayTodoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  
  document.querySelector('.todo-list-result').innerHTML = todoListHTML;
}; 


function addOne (array) {
	let newArray = []; 
	for (i = 0; i < array.length; i++) {
		const number = array[i];
		newArray.push(number + 1);
	}	
	console.log(newArray)
}; 

function addArray (array1, array2) {
	let newArray = []; 
	for (i = 0; i < array1.length; i++) {
		const number1 = array1[i];
		const number2 = array2[i];
		newArray.push(number1 + number2);
	}	
	console.log(newArray)
}; 

/*
function calculationAddOne () {
	addOne([document.querySelector('.calculate-addOne-js').value])
}
*/

function functionFinished() {
	 document.querySelector('.finish-button').innerHTML = 'Finished !' 
}

let isFinished = false 

function oneSecondDelayFinished(){
	if(isFinished === false) { 
	setTimeout( () =>{
		document.querySelector('.finish-button').innerHTML = 'Finished !' 
	}, 2000 );
	isFinished = true;
	document.querySelector('.finish-button').innerHTML = 'Loading...'
} else
	document.querySelector('.finish-button').innerHTML = 'Finish'; 
	isFinished = false
}

document.querySelector('.finish-button').addEventListener('click', () => { oneSecondDelayFinished()})

/*
console.log([2, 14, -7].map((value, index) => {
  let calculation = 0; 
	if(index === 0){
		calculation = value; 
	} else {
		calculation *= value;
	}
	console.log(calculation) 
}))
*/

const multiplyBro = (a, b) => a * b  

console.log(multiplyBro(3, -7));

const countPositive = (array) => {
	let numberPositive = 0;
	array.forEach((value) => {
		if(value >= 0){
			numberPositive ++
		}
	}); 
	console.log(`${numberPositive} numbers out of ${array.length} are positive numbers`); 
}

countPositive([1, -5, -8, 6, 7, -98, 1])

const addNum = (array, num) => console.log(array.map(value =>{return value + num}))

addNum([1, 6, 9, 2], 3); 


const food = ['ham', 'apple', 'ice cream', 'pasta', 'egg']

const removeFood = toBeRemoved => console.log(food.filter( value => value !== toBeRemoved ))
/*if(value !== toBeRemoved){
			return true                             this is the long code
		} else {
			return false
		}*/
	
/* 					this code was causing problem

document.querySelector('.pasta').addEventListener('click', () => removeFood('pasta'));
document.querySelector('.ice-cream').addEventListener('click', () => removeFood('ice cream'));
document.querySelector('.ham').addEventListener('click', () => removeFood('ham'));
document.querySelector('.egg').addEventListener('click', () => removeFood('egg'));
document.querySelector('.apple').addEventListener('click', () => removeFood('apple'));
*/

let selectQuantity = 0;
document.querySelector('.select-quantity').innerHTML = `Quantity: 0`

function selectFunction(){
	const selectedValue = parseInt(document.getElementById('select').value)
	selectQuantity += selectedValue; 
	document.querySelector('.select-quantity').innerHTML = `Quantity: ${selectQuantity}`
}


const addedText = document.querySelector('.not-added-text');
const timeoutAdded = setTimeout(()=> {
		addedText.classList.remove('added-text');
	}, 1700); 

document.querySelector('.select-add').addEventListener('click', () => selectFunction())
const buttonAdded = document.querySelector('.add-button-exercise');



function addedTextFunction () {
	addedText.classList.add('added-text'); 
	timeoutAdded();
	buttonAdded.addEventListener('click', 
		clearTimeout(timeoutAdded))
	buttonAdded.addEventListener('click', 
		timeoutAdded());
}



document.querySelector('.add-button-exercise').addEventListener('click', () => addedTextFunction())

const products = [
	{
		productId: 'N-S-B-1',
		productName: 'Nike Snickers Black',
		priceCents: 4900,
		productColor: 'black'
	},
	{
		productId: 'I-14-W-1',
		productName: 'Iphone 14 White',
		priceCents: 150000,
		productColor: 'white'
	},
	{
		productId: 'F-C-U-1',
		productName: 'Fast charger USB-C',
		priceCents: 1500,
		productColor: 'white'
	},
	{
		productId: 'L-M-1',
		productName: 'Logitech mouse',
		priceCents: 3500,
		productColor: 'black'
	},
];


products.forEach((product)=> {
	const htmlProducts = `
	<div class="product-1">
  <button class="product-name">${product.productName}</button>
  <p class="product-price">${(product.priceCents / 100).toFixed(2)} €</p>
  <p class="product-color">color: <strong>${product.productColor}</strong> </p>
</div>`;
	const productsHtmlDiv = document.querySelector('.generate-HTML-div');
	productsHtmlDiv.innerHTML += htmlProducts;
}); 

let quantityNumber = 2; 
const quantityText = document.querySelector('.quantity-update');
quantityText.innerHTML = `Quantity : ${quantityNumber}`;


const quantityDiv = document.querySelector('.quantity-container');

document.querySelector('.update-quantity')
.addEventListener('click', ()=> quantityDiv.classList.add('is-editing-quantity')); 

function saveNewQuantity (){
	quantityDiv.classList.remove('is-editing-quantity');
	const valueInputQuantity = parseInt(document.querySelector('.quantity-input').value);
	if(!isNaN(valueInputQuantity)){
		quantityNumber = valueInputQuantity;
		quantityText.innerHTML = `Quantity : ${quantityNumber}`
	}
}

document.querySelector('.save-quantity-link').addEventListener('click', ()=> saveNewQuantity());
document.querySelector('.quantity-input').addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    saveNewQuantity();
  }
}); 

const easyExercise = (one, two) => one === 100 || two === 100 || one + two === 100;

console.log(easyExercise(55, 45))

/*const string = 'Lorenzo';
console.log(string.split(''))*/

const first3Last3Exercise = string => 
	/*if(string.length < 3){
		return string 
	} else{
		const arrayString = string.split(''); 
		return arrayString[0] + arrayString[1] + arrayString[2] + arrayString[arrayString.length - 3] + arrayString[arrayString.length - 2] + arrayString[arrayString.length - 1]
	}           The code I wrote */
	string.length < 3 ? string : string.slice(0, 3) + string.slice(-3)


console.log(first3Last3Exercise('Lorenzo est stré')); 
console.log(first3Last3Exercise('Lor')); 

const firstHalfAndLenght = string => 
	string.slice(0, string.length / 2 ) + `| length: ${string.length}`;
	
	console.log(firstHalfAndLenght('Andrea et Gus aux toilettes'));

const skip1stCharacter = (a, b) => 
/* a.slice(-(a.length - 1)) + b.slice(-(b.length - 1));  The code I wrote*/
a.slice(1) + b.slice(1);

console.log(skip1stCharacter('Lorenzo', 'Strété'))

const closerTo100 = (a, b) => Math.abs(100 - a) < Math.abs(100 - b) ? a : b; 
console.log(closerTo100(101, 2)); 
console.log(closerTo100(45, -60)); 
console.log(closerTo100(10001, 105)); 
console.log(closerTo100(95, 95))

const letterFrequency = (str, letter) =>
	// str.split('')[letter].length >= 2 & str.split('')[letter].length < 4 ? true : false;
	str.split('').filter((value => value === letter)).length >= 2 
	&& str.split('').filter((value => value === letter)).length  <=4

console.log(letterFrequency('Lorenzo', 'o')); 
console.log(letterFrequency('Andrea è gay alla spiaggia', 'a')); 

const howManyEven = array => array.filter( value => value % 2 === 0).length; 

console.log(howManyEven([1,3,7,8,9,5,34,23,6])); 
console.log(howManyEven([1, 3, 7, 25])); 

const ascendingOrder = array => {
	for(i = 1; i < array.length; i++){
		if(array[i] < array[i -1]){
			return false
		}
	}return true
}

console.log(ascendingOrder([1,2,3,4,5,6,7,8,9])); 
console.log(ascendingOrder([1,2,3,4,5,6,7,8,9,9])); 
console.log(ascendingOrder([1,2,3,4,5,6,7,8,9])); 

const getLargestEven = arr => {
	let highest = arr[0];
	for(i = 1; i < arr.length; i++){
		if(arr[i] % 2 === 0){
			if(arr[i] > highest){
				highest = arr[i]
			}
		}
	}
	return highest
}

console.log(getLargestEven([1,2,22,3,4,5,6,7,8,9])); 

const isLeapYear = date => date % 4 === 0;
console.log(isLeapYear(2023)); 
console.log(isLeapYear(2022));
console.log(isLeapYear(2024));

const isAllTrue = (arr) => {
	arr.forEach(value => {if(value >= 100 ){ return false}});
}

console.log(isAllTrue([1,2,3,4,5,7,9,55]))	

let stringa = 'lore-min e andre';
if(stringa.indexOf('min') !== -1){
	let autoSeconds = stringa.split('min')[1].slice(0, -1);
	console.log(autoSeconds)
	}
