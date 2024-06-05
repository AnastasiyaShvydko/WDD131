

let currentYear = new Date().getFullYear();
let date_element = document.getElementById('currentyear');
date_element.innerHTML = currentYear;

let lastModified = document.lastModified;
let lastModified_element = document.getElementById('lastModified');
lastModified_element.innerHTML = lastModified;

const scores = [99, 88, 93, 70, 84, 69];
const outreach = scores.filter(total => total < 70);
console.log(outreach);
console.log('Hi');

let product = {'id':'455689A','price':23.99,'cost':15,'shelfDate':'10/01/2024'}

let itemcost = product['cost'];
console.log(itemcost);


const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);
console.log(countriesLong);
