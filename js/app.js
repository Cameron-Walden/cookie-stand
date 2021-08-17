'use strict';

console.log('take a break, drink some water')

const cityDiv = document.getElementById('cities');

const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = {
  city: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgSalePerCust: 6.3,
  hourlySalesArray: [],
  randomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const tokyo = {
  city: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgSalePerCust: 1.2,
  hourlySalesArray: [],
  randomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const dubai = {
  city: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgSalePerCust: 3.7,
  hourlySalesArray: [],
  randomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const paris = {
  city: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgSalePerCust: 2.3,
  hourlySalesArray: [],
  randomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const lima = {
  location: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgSalePerCust: 4.6,
  hourlySalesArray: [],
  randomNumberOfCustomers: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}


function _makeElement(tag, parent, text) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;
}

function renderCity(city) {
  let total = 0;
  const articleElem = _makeElement('article', cityDiv, null);
  _makeElement('h3', articleElem, location.city);
  const ulElem = _makeElement('ul', articleElem, null);
  for (let i = 0; i < hoursOfOperation.length; i++) {
    const text = `${hoursOfOperation[i]}: ${city.hourlySalesArray[i]} cookies`;
    total += city.hourlySalesArray[i];
    _makeElement('li', ulElem, text);
  }
  let totalsString = `Total: ${total} cookies`;
  _makeElement('li', ulElem, totalsString);
}

const locationsArray = [seattle, tokyo, dubai, paris, lima]; 

// loop through all locations and call these functions
function renderAllCities() {
  for (let i = 0; i < locationsArray.length; i++) {
    const currentLocation = locationsArray[i];
    currentLocation.fillHourlySalesArray()
    renderCity(currentLocation);
  }
}
renderAllCities();
