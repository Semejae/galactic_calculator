'use strict';

export default class Planet {
  constructor(age) {
    this.name = ['mercury','venus','mars','jupiter','earth'];
    this.year = [.24,.62,1.88,11.86,1];
    this.expectancy = 80;
    this.age = age;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.earthAge = 0;
    this.yearsLeftToLive = 0;
    // console.log();
  }

  convertToYears(){
    this.mercuryAge =  parseInt((this.age/.24).toFixed(0));
    this.venusAge = parseInt((this.age/.62).toFixed(0));
    this.marsAge = parseInt((this.age/1.88).toFixed(0));
    this.jupiterAge = parseInt((this.age/11.86).toFixed(0));
    this.earthAge = parseInt((this.age/1).toFixed(0));
    this.yearsLeftToLive = parseInt((this.age).toFixed(0));
  }

  lifeExpectancy(){
    if (this.age < this.expectancy) {
      this.yearsLeftToLive = this.expectancy - this.age;
    } else if (this.age > this.expectancy){
      return alert('you are dead')
    }
  }
}

console.log();
// console.log(mercury,venus,mars,jupiter,earth,age);






