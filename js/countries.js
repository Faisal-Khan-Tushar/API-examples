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
    // console.log(country)

    const countriesDiv = document.getElementById('countries')
    const div = document.createElement('div')
    div.classList.add('countries');
    div.innerHTML = `
    <h1>${country.name}</h1>
    <h2>${country.capital}</h2>
    <button onclick="loadCountryByName('${country.name}')">Details</button>
    
    `
    // const h1 = document.createElement('h1')
    // h1.innerText = country.name;
    // div.appendChild(h1);
    // const h2 = document.createElement('h2');
    // h2.innerText = country.alpha3Code;
    // div.appendChild(h2);
    // const p = document.createElement('p')
    // p.innerText = country.capital;
    // div.appendChild(p);
    countriesDiv.appendChild(div);
  })
}
const loadCountryByName = name => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
  console.log(url)
}
const displayCountryDetails = country => {
  console.log(country);
  const countriesDiv = document.getElementById('countries');
  countriesDiv.innerHTML = `
  <h1>${country.name}</h1>
  <p>${country.capital}<p>
  <img width="200px" src="${country.flag}">
  `
}