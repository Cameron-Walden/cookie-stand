'use strict';

console.log('Take a break, drink some water.');

const mySalesTable = document.getElementById('salesTable');
const newUser = document.getElementById('userForm');

const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Location(name, minCustomer, maxCustomer, avgSalePerCust) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSalePerCust = avgSalePerCust;
  this.hourlySalesArray = [];

  Location.allLocations.push(this);
}

Location.allLocations = [];
// Location.hourlySalesArray =[];

Location.prototype.randomNumberOfCustomers = function() {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
}

Location.prototype.fillHourlySalesArray = function() {
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
    this.hourlySalesArray.push(Math.ceil(salesPerHour));
  }
}

const seattle = new Location ('Seattle:', 23, 65, 6.3);
const tokyo = new Location ('Tokyo:', 3, 24, 1.2);
const dubai = new Location ('Dubai:', 11, 38, 3.7);
const paris = new Location ('Paris:', 20, 38, 2.3);
const lima = new Location ('Lima:', 2, 16, 4.6);

function fillHourlySalesArrayAllLocations() {
  for (let i = 0; i < Location.allLocations.length; i++) {
    const currentLocation = Location.allLocations[i];
    currentLocation.fillHourlySalesArray();
  }
}

fillHourlySalesArrayAllLocations();


function _makeElement(tag, parent, text) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;
}

Location.prototype.renderCity = function(body) {
  let total = 0;
  const tableRowElem = document.createElement('tr');
  body.appendChild(tableRowElem);
  // make a th with the city name
  const thElem = _makeElement('th', tableRowElem, this.name);
  // all cookies per hour should be tds
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let cookiesThisHour = this.hourlySalesArray[i];
    total += cookiesThisHour;
    _makeElement('td', tableRowElem, cookiesThisHour);
  }
  _makeElement('td', tableRowElem, total)
}

function renderAllCities() {
  let tbodyElem = _makeElement('tbody', mySalesTable, null);
  for (let i = 0; i < Location.allLocations.length; i++) {
    Location.allLocations[i].renderCity(tbodyElem);
  }
}
// working on making a thead with all times 6am-7pm
function makeTableHead() {
  const tHeadElem = _makeElement('thead', mySalesTable, null); 
  const rowElem = _makeElement('tr', tHeadElem, null);
  _makeElement('th', rowElem, "Hours:");
    for(let i = 0; i < hoursOfOperation.length; i++) {
       _makeElement('td', rowElem, hoursOfOperation[i]);
      }
  _makeElement('th', rowElem, "Grand Totals:")
  } 



function makeTableFooter() {
  const tfootElem = _makeElement('tfoot', mySalesTable, null);
  const rowElem = _makeElement('tr', tfootElem, null);
  _makeElement('th', rowElem, 'Total for all stores per hour:');
  let hourlySales = 0;
  let grandTotal = 0;
  for (let i = 0; i < hoursOfOperation.length; i++) {
    for (let j = 0; j < Location.allLocations.length; j++) {
      let currentLocation = Location.allLocations[j];
      hourlySales += currentLocation.hourlySalesArray[i]
    }
    _makeElement('td', rowElem, hourlySales);
    grandTotal += hourlySales;
    hourlySales = 0;
  }
  _makeElement('td', rowElem, grandTotal);
}

function handleSubmit(event) {
  event.preventDefault();
  const target = event.target
  let name = event.target.name.value;
  let minCustomer = target.minCustomer.value;
  minCustomer = parseInt(minCustomer);
  let maxCustomer = target.maxCustomer.value;
  maxCustomer = parseInt(maxCustomer);
  let avgSalePerCust = target.avgSalePerCust.value;
  avgSalePerCust = parseInt(avgSalePerCust)
  //dont think i need hours of operation now
  let hoursOfOperation = event.target.hoursOfOperation.value;
  const newStore = new Location(name, minCustomer, maxCustomer, hoursOfOperation, avgSalePerCust);
  // newStore.randomNumberOfCustomers();
  newStore.grandTotal();
  newStore.renderCity();
  makeTableFooter();
  document.getElementById('userForm').reset();
//need a way to append new store to my table
}
renderAllCities();
makeTableHead();
makeTableFooter();
//do i need to call this here?
// handleSubmit();
const submit = doucment.getElementById('userForm');
submit.addEventListener('submit', handleSubmit);














//what I learned in class. Working off of this


//working on new form?
// function handleSubmitNew(submittedForm) {
//   let infoIsValid = true;
//   if (submittedForm.locationName.value == "") {
//     alert("Please enter all required info");
//     infoIsValid = false;
//   }
//   if (submittedForm.minnCustomer.value == "") {
//     alert("Please enter all required info");
//     infoIsValid = false;
//   }
//   if (submittedForm.maxxCustomer.value == "") {
//     alert("Please enter all required info");
//     infoIsValid = false;
//   }
//   if (submittedForm.avggCookieSale.value == "") {
//     alert("Please enter all required info");
//     infoIsValid = false;
//   }
//   let locationName = submittedForm.locationName.value;           
//   let minCustomer = parseInt(submittedForm.minCustomer.value);
//   let maxCustomer = parseInt(submittedForm.maxCustomer.value);
//   let avgCookieSale = parseInt(submittedForm.avgCookieSale.value);
//   if (infoIsValid){
//     var newLocation = new Location (locationName, minCustomer, maxCustomer, avgCookieSale); 
//     renderAllCities(newLocation);                              
// }

// handleSubmit();


// Old code for make table body? keeping here for reference as well as old code. 

// function makeTableBody() {
//   let body = document.getElementById('cities');
//   let tableElem = document.createElement('table');
//   let tableBody = document.createElement('tbody');
//   for(let i = 0; i < Location.locationArray.length; i++) {
//      let currentLocation = Location.locationArray[i];
//      console.log(currentLocation)
//     let rowElem = document.createElement('tr');
//     tableBody.appendChild(rowElem);
//     let tdElem = document.createElement('td');
//     let cityCell = currentLocation.location;
//     tdElem.textContent = cityCell;
//     rowElem.appendChild(tdElem);
//     for(let j = 0; j < currentLocation.hoursOfOperation.length; j++) {
//       let cellElem = document.createElement('td');
//       cellElem.textContent = currentLocation.salesPerHour[j];
//       rowElem.appendChild(cellElem);
//     }
//     tableBody.appendChild(rowElem);
//   }
//   tableElem.appendChild(tableBody);
//   body.appendChild(tableElem);
//   tableElem.setAttribute("border", "2");
// }
// makeTableBody();

// OLD OLD code from first day working on this. Don't think i'll need it, but keeping as a reference to go back to for now.

// const cityDiv = document.getElementById('cities');

// const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// const seattle = {
//   city: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgSalePerCust: 6.3,
//   hourlySalesArray: [],
//   randomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//   },
//   fillHourlySalesArray: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
//       this.hourlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// const tokyo = {
//   city: 'Tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgSalePerCust: 1.2,
//   hourlySalesArray: [],
//   randomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//   },
//   fillHourlySalesArray: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
//       this.hourlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// const dubai = {
//   city: 'Dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgSalePerCust: 3.7,
//   hourlySalesArray: [],
//   randomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//   },
//   fillHourlySalesArray: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
//       this.hourlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// const paris = {
//   city: 'Paris',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgSalePerCust: 2.3,
//   hourlySalesArray: [],
//   randomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//   },
//   fillHourlySalesArray: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
//       this.hourlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }

// const lima = {
//   city: 'Lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgSalePerCust: 4.6,
//   hourlySalesArray: [],
//   randomNumberOfCustomers: function() {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//   },
//   fillHourlySalesArray: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let salesPerHour = this.randomNumberOfCustomers() * this.avgSalePerCust;
//       this.hourlySalesArray.push(Math.ceil(salesPerHour));
//     }
//   }
// }


// function _makeElement(tag, parent, text) {
//   const element = document.createElement(tag);
//   parent.appendChild(element);
//   if (text) {
//     element.textContent = text;
//   }
//   return element;
// }

// function renderCity(city) {
//   let total = 0;
//   const articleElem = _makeElement('article', cityDiv, null);
//   _makeElement('h3', articleElem, location.city);
//   const ulElem = _makeElement('ul', articleElem, null);
//   for (let i = 0; i < hoursOfOperation.length; i++) {
//     const text = `${hoursOfOperation[i]}: ${city.hourlySalesArray[i]} cookies`;
//     total += city.hourlySalesArray[i];
//     _makeElement('li', ulElem, text);
//   }
//   let totalsString = `Total: ${total} cookies`;
//   _makeElement('li', ulElem, totalsString);
// }

// const locationsArray = [seattle, tokyo, dubai, paris, lima]; 

// // loop through all locations and call these functions
// function renderAllCities() {
//   for (let i = 0; i < locationsArray.length; i++) {
//     const currentLocation = locationsArray[i];
//     currentLocation.fillHourlySalesArray()
//     renderCity(currentLocation);
//  