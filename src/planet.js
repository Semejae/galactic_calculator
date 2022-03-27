'use strict';

export default class Planet {
  constructor(name,year,expectancy) {
    this.name = ['mercury','venus','mars','jupiter','earth'];
    this.year = [.24,.62,1.88,11.86,1];
    this.expectancy = [-2,-3,-4,-5,-1];
    this.name2 = name + year + expectancy;
  }
}

const mercury = {
  name: 'mercury',
  year: .24,
  expectancy: -2,
};
const venus = {
  name: 'venus',
  year: .62,
  expectancy: -3,
};
const mars = {
  name: 'mars',
  year: 1.88,
  expectancy: -4,
};
const jupiter = {
  name: 'jupiter',
  year: 11.86,
  expectancy: -5,
};
const earth = {
  name: 'earth',
  year: 1,
  expectancy: -1,
};
console.log(mercury,venus,mars,jupiter,earth);

// Planet.prototype.checktype = function() {

//   if (this.name === 'mercury') {
//     return true;
//   }
// };


console.log(new Planet);






