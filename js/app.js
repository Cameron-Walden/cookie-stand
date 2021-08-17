'use strict'

const cookieDiv = document.getElementById('citySales');

let hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
    location: 'Seattle',
    cookieSalesPerHour: [],
    customersPerHour: [],
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSales: 6.3,
    totalCookies: null,
    getCustomersPerHour: function() {
        for(let i = 0; i < hoursOfOperation.length; i++) {
            this.customersPerHour.push(_randomCustomersPerHour(this.minCustomer, this.maxCustomer));
        }
    },
    getCookieSalesPerHour: function() {
        for(let i = 0; i < hoursOfOperation.length; i++) {
            this.cookieSalesPerHour.push(this.customersPerHour[i] * this.avgCookieSales);
        }
    },
    getTotalCookies: function() {
        let totalCookies = 0;
        for(let i = 0; i < this.cookieSalesPerHour.length;i++) {
            this.totalCookies += this.cookieSalesPerHour[i];
        }
    },
}
seattle.getCustomersPerHour();
seattle.getCookieSalesPerHour();
seattle.getTotalCookies();

let tokyo = {
    location: 'Tokyo',
    cookieSalesPerHour: [],
    customersPerHour: [],
    minCustomer: 3,
    maxCustomer: 24,
    avgCookieSales: 1.2,
    totalCookies: null,
    getCustomersPerHour: function() {
        for(let i = 0; i < hoursOfOperation.length;i++) {
            this.customersPerHour.push(_randomCustomersPerHour(this.minCustomer, this.maxCustomer));
        }
    },
    getCookieSalesPerHour: function() {
        for(let i = 0; i < hoursOfOperation.length; i++) {
            this.cookieSalesPerHour.push(this.customersPerHour[i] * this.avgCookieSales);
        }
    },
    getTotalCookies: function() {
        let totalCookies = 0;
        for(let i = 0; i < this.cookieSalesPerHour.length;i++) {
            this.totalCookies += this.cookieSalesPerHour[i]
        }
    },
}
tokyo.getCustomersPerHour();
tokyo.getCookieSalesPerHour();
tokyo.getTotalCookies();

let dubai = {
    location: 'Dubai',
    cookieSalesPerHour: [],
    customersPerHour: [],
    minCustomer: 11,
    maxCustomer: 38,
    avgCookieSales: 3.7,
    totalCookies: null,
    getCustomersPerHour: function() {
        for(let i = 0; i < hoursOfOperation.length;i++) {
            this.customersPerHour.push(_randomCustomersPerHour(this.minCustomer, this.maxCustomer));
        }
    },
    getCookieSalesPerHour: function() {
        for(let i = 0; i < hoursOfOperation.length; i++) {
            this.cookieSalesPerHour.push(this.customersPerHour[i] * this.avgCookieSales);
        }
    },
    getTotalCookies: function() {
        let totalCookies = 0;
        for(let i = 0; i < this.cookieSalesPerHour.length;i++) {
            this.totalCookies += this.cookieSalesPerHour[i]
        }
    },
}
dubai.getCustomersPerHour();
dubai.getCookieSalesPerHour();
dubai.getTotalCookies();

let paris = {
    location: 'Paris',
    cookieSalesPerHour: [],
    customersPerHour: [],
    minCustomer: 20,
    maxCustomer: 38,
    avgCookieSales: 2.3,
    totalCookies: null,
    getCustomersPerHour: function() {
        for(let i = 0; i < hoursOfOperation.length;i++) {
            this.customersPerHour.push(_randomCustomersPerHour(this.minCustomer, this.maxCustomer));
        }
    },
    getCookieSalesPerHour: function() {
        for(let i = 0; i < hoursOfOperation.length; i++) {
            this.cookieSalesPerHour.push(this.customersPerHour[i] * this.avgCookieSales);
        }
    },
    getTotalCookies: function() {
        let totalCookies = 0;
        for(let i = 0; i < this.cookieSalesPerHour.length;i++) {
            this.totalCookies += this.cookieSalesPerHour[i]
        }
    },
}
paris.getCustomersPerHour();
paris.getCookieSalesPerHour();
paris.getTotalCookies();

let lima = {
    location: 'Lima',
    cookieSalesPerHour: [],
    customersPerHour: [],
    minCustomer: 2,
    maxCustomer: 16,
    avgCookieSales: 4.6,
    totalCookies: null,
    getCustomersPerHour: function() {
        for(let i = 0; i < hoursOfOperation.length;i++) {
            this.customersPerHour.push(_randomCustomersPerHour(this.minCustomer, this.maxCustomer));
        }
    },
    getCookieSalesPerHour: function() {
        for(let i = 0; i < hoursOfOperation.length; i++) {
            this.cookieSalesPerHour.push(this.customersPerHour[i] * this.avgCookieSales);
        }
    },
    getTotalCookies: function() {
        let totalCookies = 0;
        for(let i = 0; i < this.cookieSalesPerHour.length;i++) {
            this.totalCookies += this.cookieSalesPerHour[i]
        }
    },
}
lima.getCustomersPerHour();
lima.getCookieSalesPerHour();
lima.getTotalCookies();

function _randomCustomersPerHour(minCustomer, maxCustomer) {
    let randomNumber = Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
    return randomNumber;
}

function getCookiesPerHour(a, b) {
    let number = a * b;
    return number;
}

const cities = [seattle, tokyo, dubai, paris, lima]

function getAllCitiesCookieSalesPerHour() {
    for(let i = 0; i < cities.length; i++) {
        let currentCity = cities[i];
        currentCity.getCookieSalesPerHour;
        console.log(`${currentCity.location} has ${currentCity.cookieSalesPerHour} sales per hour`);
    }
}
getAllCitiesCookieSalesPerHour();

function renderCity(city) {
    const articleElem = document.createElement('article');
    cookieDiv.appendChild(articleElem);
    
    const imgElem = document.createElement('img');
    // imgElem.src = ;
    articleElem.appendChild(imgElem);

    const h2Elem = document.createElement('h2');
    h2Elem.textContent = city.name;
    articleElem.appendChild(h2Elem);

    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < cities.hoursOfOperation.length; i++) {
        let currentHour = cities.hoursOfOperation[i];
        const liElem = document.createElement('li');
        liElem.textContent = currentHour;
        UlElem.appendChild(liElem)
    }
}


function renderAllCities() {
    for(let i = 0; i < cities.length; i++) {
        let currentCity = cities[i];
        renderCity(currentCity);
    }
}
renderAllCities();