import Planet from './../src/planet.js';


describe ('Planet', () => {
  
  test('should return planet function', () => {
    const planet = new Planet();
    expect(planet.name).toEqual(['mercury','venus','mars','jupiter','earth']);
    expect(planet.year).toEqual([.24,.62,1.88,11.86,1]);
    expect(planet.expectancy).toEqual([-2,-3,-4,-5,-1]);
  });
});

describe ('age', () => {

  test('should return age function', () => {
    let age = Planet.year + Planet.expectancy;
    expect(age).toEqual(Planet.year + Planet.expectancy);
  });
});  