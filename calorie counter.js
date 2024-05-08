const Eggs = {
  calories: 120,
  protein: 120,
}

const Bacon = {
  calories: 120,
  protein: 120,
}

const Toast = {
  calories: 120,
  protein: 120,
}

const Milk = {
  calories: 120,
  protein: 120,
}

const Yogurt = {
  calories: 120,
  protein: 120,
}

const Oats = {
  calories: 120,
  protein: 120,
}

const PancakeMix = {
  calories: 120,
  protein: 120,
}

const MapleSyrup = {
  calories: 120,
  protein: 120,
}

const OrangeJuice = {
  calories: 120,
  protein: 120,
}

const Bananas = {
  calories: 120,
  protein: 120,
}

const Blueberries = {
  calories: 120,
  protein: 120,
}

const Honey = {
  calories: 120,
  protein: 120,
}

const Butter = {
  calories: 120,
  protein: 120,
}

const Cheese = {
  calories: 120,
  protein: 120,
}

const Ham = {
  calories: 120,
  protein: 120,
}

const Tomatoes = {
  calories: 120,
  protein: 120,
}

const Avocado = {
  calories: 120,
  protein: 120,
}

const Sausages = {
  calories: 120,
  protein: 120,
}

const breakfastFood =[
  Eggs,
  Bacon,
  Toast,
  Milk,
  Cereal,
  Yogurt,
  Oatmeal,
  PancakeMix,
  MapleSyrup,
  OrangeJuice,
  Strawberries,
  Bananas,
  Blueberries,
  Honey,
  Butter,
  Cheese,
  Ham,
  Tomatoes,
  Avocado,
  Sausages
 ]

 

let ingredient; 


const resultHtml = `
<p class="macros">${ingredient.calories}</p>
<p class="macros">${ingredient.protein}</p>`

let test1 = 'ciaio';
const displayResult = document.querySelector('.result-breakfast')

const searchBreakfast = () => {
  breakfastFood.forEach(value =>{
   if(value == true){
    if(value === document.querySelector('.search-breakfast').value){
      ingredient = value;
      displayResult.innerHTML = resultHtml;
      document.querySelector('.search-breakfast').value = '';
    }
  }})

  ingredient; 

  console.log(ingredient);

}

document.querySelector('.add-breakfast').addEventListener('click', searchBreakfast());
document.querySelector('.search-breakfast').addEventListener('key', (event) => {
  if(event.key === 'Enter'){
    searchBreakfast()
  }})




