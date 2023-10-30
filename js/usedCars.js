const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
    image: "silver_toyota_camry.jpg",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
    image: "white 2016 honda civic.jpg",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
    image: "black_2017_ford_fusion.jpg",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
    image: "blue 2019 nissan altima.jpg",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
    image: "red 2015 chevrolet malibu.jpeg",
  },
  // Additional entries:
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
    image: "gray 2016 volkswagen passat.jpg",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
    image: "silver 2020 hyundai elantra.jpg",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
    image: "green 2014 subaru outback.jpg",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
    image: "blue 2017 mazda cx 5.jpg",
  },
  {
    year: 2018,
    make: "KIA",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
    image: "white 2018 kia sorento.jpg",
  },
  // Five more entries:
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
    image: "black_2015_dodge_challenger.jpg",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
    image: "red 2017 cadillac xt 5.jpg",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
    image: "blue 2018 jaguar f pace.jpg",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
    image: "black 2019 tesla model s.jpg",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
    image: "white 2020 porsche cayenne.jpg",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
    image: "white 2017 lexus es.jpg",
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
    image: "black 2016 bmw 5 series.jpg",
  },
];

submitButton.addEventListener("click", filterCar);

function filterCar() {
  const make = document.getElementById("make-filter").value;
  console.log(make);
  const minYear = document.getElementById("min-Year").value;
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

  let filteredCars = usedCars.filter((car) => {
    return (
      (make === "all" || car.make === make) &&
      car.year >= minYear &&
      car.year <= maxYear &&
      car.mileage >= minMileage &&
      car.mileage <= maxMileage &&
      car.price >= priceMin &&
      car.price <= priceMax &&
      (color === "all" || car.color === color)
    );
  });

  let html = "";
  if (filteredCars.length > 0) {
    for (let i = 0; i < filteredCars.length; i++) {
      const car = filteredCars[i];
      html += `
          <div class="car-card">
            <h2 class="car-name">${car.make} ${car.model}</h2>
            <img src="./images/${car.image}" alt="${car.make} ${car.model}" class="car-image">
            <p class="car-details">Year: <span class="car-year">${car.year}</span></p>
            <p class="car-details">Make: <span class="car-make">${car.make}</span></p>
            <p class="car-details">Model: <span class="car-model">${car.model}</span></p>
            <p class="car-details">Mileage: <span class="car-mileage">${car.mileage}</span></p>
            <p class="car-details">Price: <span class="car-price">${car.price}</span></p>
            <p class="car-details">Color: <span class="car-color">${car.color}</span></p>
            <p class="car-details">Gas Mileage: <span class="car-gasMileage">${car.gasMileage}</span></p>
          </div>
        `;
    }
  } else {
    html = "<p>No cars match the selected criteria.</p>";
  }

  document.getElementById("results").innerHTML = html;
}
