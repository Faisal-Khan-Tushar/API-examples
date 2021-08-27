const loadCountries = () => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries()
const displayCountries = countries => {
  console.log(countries)
  // for (const country of data) {
  //   console.log(country)
  // }
  countries.forEach(country => {

    const countriesDiv = document.getElementById('countries')
    const div = document.createElement('div')
    div.classList.add('countries');
    const h1 = document.createElement('h1')
    h1.innerText = country.name;
    div.appendChild(h1);
    const h2 = document.createElement('h2');
    h2.innerText = country.alpha3Code;
    div.appendChild(h2);
    const p = document.createElement('p')
    p.innerText = country.capital;
    div.appendChild(p);
    countriesDiv.appendChild(div);
  })
}