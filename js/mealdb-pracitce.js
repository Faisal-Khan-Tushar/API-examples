const loadFood = () => {
  const searchField = document.getElementById('search-field');
  const searchFieldText = searchField.value;
  if (searchFieldText == '') {
    alert('no result found');
  }
  else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
    searchFieldText.value = ' ';
    fetch(url)
      .then(res => res.json())
      .then(data => displayMeals(data.meals))

    // console.log(searchFieldText);
  }
}
const displayMeals = meals => {
  const mainDiv = document.getElementById('search-resulst')
  mainDiv.textContent = '';
  meals.forEach(meal => {
    console.log(meal)
    const div = document.createElement('div');
    div.classList.add = 'col';
    div.innerHTML = `
    <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>
    `;
    mainDiv.appendChild(div);
  })
}
const loadMealDetails = mealId => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
  console.log(meal)
  const showDetails = document.getElementById('show-details');
  showDetails.textContent = ' ';
  const div = document.createElement('div')
  div.classList.add('card')
  div.innerHTML = `
  <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"${meal.strMeal}></h5>
    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
`;
  showDetails.appendChild(div);
}