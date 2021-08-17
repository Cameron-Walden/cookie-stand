'use strict';

console.log('take a break, drink some water')

const cityDiv = document.getElementById('cities');

console.log('Take a break, get some water')

function Location(location, minCustomer, maxCustomer, avgSalesPerCust) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSalesPerCust = avgSalesPerCust;
  this.hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.salesPerHour = []; //will get filled once method is called
  this.dailyTotalSales = 0; // will be totaled once method is called
}

Location.prototype.randomNumberOfCustomers = function() {
  let tallySales = 0;
  let hourlySales = [];
  for(let i = 0; i < this.hoursOfOperation.length; i++) {
      let randomNumberOfCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer); //random number of customers per hour
      hourlySales.push(Math.ceil(randomNumberOfCustomers * this.avgSalesPerCust));//muliplies the random customers and avg sales per customer 
      tallySales += (Math.ceil(randomNumberOfCustomers * this.avgSalesPerCust));//tallies total cookie sales
console.log(tallySales);
  }
  this.salesPerHour = hourlySales; //reassigning varible from Location() above
  this.dailyTotalSales = tallySales; //again, reassigning variable from Location() above
};

const seattle = new Location ('Seattle', 23, 65, 6.3);
const tokyo = new Location ('Seattle', 3, 24, 1.2);
const dubai = new Location ('Seattle', 11, 38, 3.7);
const paris = new Location ('Seattle', 20, 38, 2.3);
const lima = new Location ('Seattle', 2, 16, 4.6);


seattle.randomNumberOfCustomers();
tokyo.randomNumberOfCustomers();
dubai.randomNumberOfCustomers();
paris.randomNumberOfCustomers();
lima.randomNumberOfCustomers();


Location.prototype.renderLocation = function() {
  const articleElem = document.createElement('article')
  cityDiv.appendChild(articleElem);

  // const imgElem = document.createElement('img') havent added any photos yet, but here for when I do
  // imgElem.src = this.photo;
  // articleElem(imgElem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  //want to loop through hours of operation to get cookie sales

  for(let i = 0; i < hoursOfOperation.length;  i++) {
    let currentHour = this.hoursOfOperation[i];
    const liElem = document.createElement('li');
    liElem.textContent = currentHour;
    ulElem.appendChild(liElem)
  }
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  const row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  const th1Elem = document.createElement('th');
  th1Elem.textContent = 'Cats';
  row1.appendChild(th1Elem);
  const th2Elem = document.createElement('th');
  th2Elem.textContent = 'Dogs';
  row1.appendChild(th2Elem);
  const th3Elem = document.createElement('th');
  th3Elem.textContent = 'Kids';
  row1.appendChild(th3Elem);
  const row2 = document.createElement('tr');
  tableElem.appendChild(row2);
  const td1Elem = document.createElement('td');
  td1Elem.textContent = this.isGoodWithCats;
  row2.appendChild(td1Elem);
  const td2Elem = document.createElement('td');
  td2Elem.textContent = this.isGoodWithDogs;
  row2.appendChild(td2Elem);
  const td3Elem = document.createElement('td');
  td3Elem.textContent = this.isGoodWithKids;
  row2.appendChild(td3Elem);

}




//trying to add my table to the page. first attempt
// let myTable = document.getElementById('cities')
// let data = ['<td>Store Locations:</td>'];
// let storeLocations = [];

// storeLocations.push(seattle);
// storeLocations.push(tokyo);
// storeLocations.push(dubai);
// storeLocations.push(paris);
// storeLocations.push(lima);

// for(let i = 0; i <storeLocations[0].hoursOfOperation; i++) {
//   data.push ('<td' + storeLocations[0].hours + '</td>'
//   );
//   console.log(data)
// }


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
// renderAllCities();

const cityDiv = document.getElementById('cities');

console.log('Take a break, get some water')

function Location(location, minCustomer, maxCustomer, avgSalesPerCust) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSalesPerCust = avgSalesPerCust;
  this.hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.salesPerHour = []; //will get filled once method is called
  this.dailyTotalSales = 0; // will be totaled once method is called
}

Location.prototype.randomNumberOfCustomers = function() {
  let tallySales = 0;
  let hourlySales = [];
  for(let i = 0; i < this.hoursOfOperation.length; i++) {
      let randomNumberOfCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer); //random number of customers per hour
      hourlySales.push(Math.ceil(randomNumberOfCustomers * this.avgSalesPerCust));//muliplies the random customers and avg sales per customer 
      tallySales += (Math.ceil(randomNumberOfCustomers * this.avgSalesPerCust));//tallies total cookie sales
console.log(tallySales);
  }
  this.salesPerHour = hourlySales; //reassigning varible from Location() above
  this.dailyTotalSales = tallySales; //again, reassigning variable from Location() above
};

const seattle = new Location ('Seattle', 23, 65, 6.3);
const tokyo = new Location ('Seattle', 3, 24, 1.2);
const dubai = new Location ('Seattle', 11, 38, 3.7);
const paris = new Location ('Seattle', 20, 38, 2.3);
const lima = new Location ('Seattle', 2, 16, 4.6);


seattle.randomNumberOfCustomers();
tokyo.randomNumberOfCustomers();
dubai.randomNumberOfCustomers();
paris.randomNumberOfCustomers();
lima.randomNumberOfCustomers();


Location.prototype.renderLocation = function() {
  const articleElem = document.createElement('article')
  cityDiv.appendChild(articleElem);

  // const imgElem = document.createElement('img') havent added any photos yet, but here for when I do
  // imgElem.src = this.photo;
  // articleElem(imgElem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  //want to loop through hours of operation to get cookie sales

  for(let i = 0; i < hoursOfOperation.length;  i++) {
    let currentHour = this.hoursOfOperation[i];
    const liElem = document.createElement('li');
    liElem.textContent = currentHour;
    ulElem.appendChild(liElem)
  }
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  const row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  const th1Elem = document.createElement('th');
  th1Elem.textContent = 'Cats';
  row1.appendChild(th1Elem);
  const th2Elem = document.createElement('th');
  th2Elem.textContent = 'Dogs';
  row1.appendChild(th2Elem);
  const th3Elem = document.createElement('th');
  th3Elem.textContent = 'Kids';
  row1.appendChild(th3Elem);
  const row2 = document.createElement('tr');
  tableElem.appendChild(row2);
  const td1Elem = document.createElement('td');
  td1Elem.textContent = this.isGoodWithCats;
  row2.appendChild(td1Elem);
  const td2Elem = document.createElement('td');
  td2Elem.textContent = this.isGoodWithDogs;
  row2.appendChild(td2Elem);
  const td3Elem = document.createElement('td');
  td3Elem.textContent = this.isGoodWithKids;
  row2.appendChild(td3Elem);

}




//trying to add my table to the page. first attempt
// let myTable = document.getElementById('cities')
// let data = ['<td>Store Locations:</td>'];
// let storeLocations = [];

// storeLocations.push(seattle);
// storeLocations.push(tokyo);
// storeLocations.push(dubai);
// storeLocations.push(paris);
// storeLocations.push(lima);

// for(let i = 0; i <storeLocations[0].hoursOfOperation; i++) {
//   data.push ('<td' + storeLocations[0].hours + '</td>'
//   );
//   console.log(data)
// }
