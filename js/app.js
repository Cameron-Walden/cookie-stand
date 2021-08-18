'use strict';

// console.log('take a break, drink some water')
// console.log('as of rn these #s are the tallied up sales per hour for each city:')

const cityDiv = document.getElementById('cities');

function Location(location, minCustomer, maxCustomer, avgSalesPerCust) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSalesPerCust = avgSalesPerCust;
  this.hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.salesPerHour = []; //will get filled once method is called
  this.dailyTotalSales = 0; // will be totaled once method is called
  Location.locationArray.push(this)
}

Location.locationArray = [];

Location.prototype.getCookieSales = function() {
  let tallySales = 0;
  let hourlySales = [];
  for(let i = 0; i < this.hoursOfOperation.length; i++) {
      let randomNumberOfCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer); //random number of customers per hour
      hourlySales.push(Math.ceil(randomNumberOfCustomers * this.avgSalesPerCust));//muliplies the random customers and avg sales per customer 
      tallySales += (Math.ceil(randomNumberOfCustomers * this.avgSalesPerCust));//tallies total cookie sales
      // console.log(tallySales);
  }
  this.salesPerHour = hourlySales; //reassigning varible from Location() above
  this.dailyTotalSales = tallySales; //again, reassigning variable from Location() above
};


const seattle = new Location ('Seattle', 23, 65, 6.3);
const tokyo = new Location ('Tokyo', 3, 24, 1.2);
const dubai = new Location ('Dubai', 11, 38, 3.7);
const paris = new Location ('Paris', 20, 38, 2.3);
const lima = new Location ('Lima', 2, 16, 4.6);

// console.log(Location.locationArray);

seattle.getCookieSales();
tokyo.getCookieSales();
dubai.getCookieSales();
paris.getCookieSales();
lima.getCookieSales();


function makeTable() {
  let body = document.getElementById('cities');
  let tableElem = document.createElement('table');
  let tableBody = document.createElement('tbody');
  for(let i = 0; i < Location.locationArray.length; i++) {
     let currentLocation = Location.locationArray[i];
     console.log(currentLocation)
    let rowElem = document.createElement('tr');
    tableBody.appendChild(rowElem);
    let tdElem = document.createElement('td');
    let cityCell = currentLocation.location;
    tdElem.textContent = cityCell;
    rowElem.appendChild(tdElem);
    for(let j = 0; j < currentLocation.hoursOfOperation.length; j++) {
      let cellElem = document.createElement('td');
      cellElem.textContent = currentLocation.salesPerHour[j];
      rowElem.appendChild(cellElem);
    }
    tableBody.appendChild(rowElem);
  }
  tableElem.appendChild(tableBody);
  body.appendChild(tableElem);
  tableElem.setAttribute("border", "2");
}
makeTable();

// below are my old functions. keeping as reference for now.

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
//   }
// }
