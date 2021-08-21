'use strict';

console.log('Take a break, drink some water.');

const mySalesTable = document.getElementById('salesTable');
// const newUser = document.getElementById('userForm');
const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const submit = document.getElementById('formSection');

function Location(name, minCustomer, maxCustomer, avgSalePerCust) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSalePerCust = avgSalePerCust
  this.hourlySalesArray = [];

  Location.allLocations.push(this);
}

Location.allLocations = [];
Location.hourlySalesArray =[];

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
  const thElem = _makeElement('th', tableRowElem, this.name);
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

// const submit = document.getElementById('formSection');

function handleSubmit(event) {
  event.preventDefault();
  const target = event.target;
  let name = target.name.value;
  let minCustomer = target.minCustomer.value;
  minCustomer = parseInt(minCustomer);
  let maxCustomer = target.maxCustomer.value;
  maxCustomer = parseInt(maxCustomer);
  let avgSalePerCust = target.avgSalePerCust.value;
  avgSalePerCust = parseInt(avgSalePerCust)
  let newStore = new Location(name, minCustomer, maxCustomer, avgSalePerCust);
  newStore.randomNumberOfCustomers();
  newStore.fillHourlySalesArray();
  mySalesTable.innerHTML = '';
  makeTableHead();
  renderAllCities();
  makeTableFooter();
  event.target.reset();
}
submit.addEventListener('submit', handleSubmit);
makeTableHead();
renderAllCities();
makeTableFooter();
