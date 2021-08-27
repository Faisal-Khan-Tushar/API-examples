const loadFood = () => {
  const inputField = document.getElementById('search-field');
  const inputFieldText = inputField.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldText}`
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
  // console.log(url)
  // console.log(inputFieldText)
}