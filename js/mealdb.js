document.getElementById('error-message').style.display = 'none';

const loadFood = () => {
  const inputField = document.getElementById('search-field');
  const inputFieldText = inputField.value;
  const url = `https://www.themealdb.com/api/json/v91/1/search.php?s=${inputFieldText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResults(data.meals))
    .catch(error => displayErrorMessage(error))
  // console.log(url)
  // console.log(inputFieldText)
}
const displayErrorMessage = error => {
  document.getElementById('error-message').style.display = 'block';

}
const displaySearchResults = meals => {
  console.log(meals);
  const mealdiv = document.getElementById('mealDiv');
  meals.forEach(meal => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
        </div>
   `;
    mealdiv.appendChild(div);
  })

}