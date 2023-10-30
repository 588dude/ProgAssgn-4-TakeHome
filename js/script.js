import { usedCars } from "./usedCars.js";

// Grabs the car listing div
const carListing = document.querySelector("car-listing");
const filterForm = document.getElementById("filter-form");
const makeFilter = document.getElementById("make-filter");
const priceFilter = document.getElementById("price-filter");
const submitButton = document.getElementById("submitButton");

//Function to create a car card for each item in array
function createCarCard(car) {
  const card = document.createElement("div");
  card.className = "car-card";
  card.innerHTML = `
    <h2 class="car-name">${car.make} ${car.model}</h2>
    <img src="./images/${car.image}" alt="${car.make} ${car.model}" class="car-image">
    <p class="car-details">Year: <span class="car-year">${car.year}</span></p>
    <p class="car-details">Make: <span class="car-make">${car.make}</span></p>
    <p class="car-details">Model: <span class="car-model">${car.model}</span></p>
    <p class="car-details">Mileage: <span class="car-mileage">${car.mileage}</span></p>
    <p class="car-details">Price: <span class="car-price">${car.price}</span></p>
    <p class="car-details">Color: <span class="car-color">${car.color}</span></p>
    <p class="car-details">Gas Mileage: <span class="car-gasMileage">${car.gasMileage}</span></p>
    `;
  return card;
}

//Want a function to render the cars
function renderCars(cars) {
carListing.innerHTML = ""; //Clears the current car listings
cars.forEach((car) => {
const card = createCarCard(car);
carListing.appendChild(card);
   });
 }

 //Grabs the selected make and price values from the form
 function applyFilter() {
 const selectedMake = makeFilter.value; //Uses value to get the selected option's value
 const maxPrice = Number(priceFilter.value);
   //Want to filter cars based on selected criteria
 const filteredCars = usedCars.filter((car) => {
//Checks that the car's make matches the selected make or "All Makes"
    const makeMatches = selectedMake === "all" || car.make === selectedMake;
// Checks if the car's price is less than or equal to the selected max price
const priceMatches = car.price <= maxPrice;

return makeMatches && priceMatches;
   });

// Used to sort the cars by year
 const sortedCars = sortCarsByYear(filteredCars);
 renderCars(sortedCars);

//Sort cars by year
 function sortCarsByYear(cars) {
 return cars.slice().sort((a, b) => a.year - b.year);
 }

//Initial rendering of all cars
 renderCars(usedCars);

//Add a submit event listener to the filter form
filterForm.addEventListener("submit", function (e) {
 e.preventDefault();
applyFilter();
 });

//Use the Apply Filter button click
submitButton.addEventListener("click", function () {
  applyFilter();
 });
 //Set the initial state of the filter
 makeFilter.value = "all";
 priceFilter.value = ""; //This makes the price filter also empty
 //Apply the initial filter to render all cars
 renderCars(usedCars);

//We want to render the filtered cars
filteredCars.forEach((car) => {
  const card = document.createElement("div");
 card.className = "car-card";
  card.innerHTML = `
    <h2 class="car-name">${car.make} ${car.model}</h2>
   <img src="./images/${car.image}" alt="${car.make} ${car.model}" class="car-image"></img>
   <p class="car-details">Year: <span class="car-year">${car.year}</span></p>
   <p class="car-details">Make: <span class="car-make">${car.make}</span></p>
   <p class="car-details">Model: <span class="car-model">${car.model}</span></p>
   <p class="car-details">Mileage: <span class="car-mileage">${car.mileage}</span></p>
   <p class="car-details">Price: <span class="car-price">${car.price}</span></p>
   <p class="car-details">Color: <span class="car-color">${car.color}</span></p>
   <p class="car-details">Gas Mileage: <span class="car-gasMileage">${car.gasMileage}</span></p>
    `;
  carListing.appendChild(card);
 });

 submitButton.addEventListener("click", filterCar);

 function filterCar() {
  const make = document.getElementById("make-filter").value;
  console.log(make);
   const minYear = document.getElementById("min-year").value;
  console.log(minYear);
  const maxYear = document.getElementById("max-Year").value;
  console.log(maxYear);
 const minMileage = document.getElementById("min-Mileage").value;
   console.log(minMileage);
   const maxMileage = document.getElementById("max-Mileage").value;
   console.log(maxMileage);
  const priceMin = document.getElementById("price-Min").value;
   console.log(priceMin);
  const priceMax = document.getElementById("price-Max").value;
  console.log(priceMax);
  const model = document.getElementById("model").value;
  console.log(model);
   const color = document.getElementById("color").value;
   console.log(color);

   let html = "";
   if (make === "all") {
     console.log("in if");
    const filteredCars = usedCars.filter((car) => car.make === make);
     console.log(filteredCars);
     for (let i = 0; i < filteredCars.length; i++) {
       const car = filteredCars[i];
       const element = `<div> ${car.make} </div>`;
       html = html + element;
     }
     console.log(html);
     document.getElementById("results").innerHTML = html;
   }
 }

// min year-max year
//     car make
//     max threshhold of car mileage
//     min car price
//     color
// console.log(usedCars);
// const filteredCars = usedCars.filter((car) => car.make === "Toyota");
// console.log(filteredCars);
