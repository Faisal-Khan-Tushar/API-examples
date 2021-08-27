// //kanye.rest
// const loadQuote = () => {
//   fetch('https://api.kanye.rest/')
//     .then(res => res.json())
//     .then(data => displayQuote(data))
// }

// const displayQuote = data => {
//   const blockquote = document.getElementById('quote');
//   // const p = document.createElement('p')
//   // p.innerText = data.quote;
//   blockquote.innerText = data.quote;

// }
//load users
// const loadUsers = () => {
//   fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(data => displayUsers(data))
// }
// loadUsers()
// const displayUsers = data => {
//   // console.log(data)
//   const div = document.getElementById('users')
//   const users = data.results;
//   for (const user of users) {
//     const p = document.createElement('p');
//     p.innerText = `Name- ${user.name.title} ${user.name.first} ${user.name.last}. Email-${user.email}`;
//     div.appendChild(p);

//   }
// }
//load countries
const loadCountries = () => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries()
const displayCountries = countries => {
  console.log(countries)
  const countriesDiv = document.getElementById('countries');
  // for (const country of countries) {
  //   console.log(country)
  // }
  countries.forEach(country => {
    // console.log(country);
    const div = document.createElement('div')
    div.classList.add('countries')
    div.innerHTML = `
    <h1>${country.name}</h1>
    <h2>${country.capital}</h2>
    <p>${country.demonym}</p>
    <button onclick="loadDetails(${country})">details</button>
    `

    countriesDiv.appendChild(div);
  })
}
const loadDetails = country => {
  const countryDetails = document.getElementById('countries');
  const div = document.createElement('div');
  div.innerHTML = `
  <h1>${country.name}</h1>
  <img src="${country.flag}>
  `;
  countryDetails.appendChild(div);

}