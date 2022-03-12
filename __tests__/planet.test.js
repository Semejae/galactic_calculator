import Planet from './../src/planet.js';

describe ('Planet', () => {

  test('should return planet function', () => {
    let planet = new Planet();
    expect(planet.name).toEqual('');
    expect(planet.years).toEqual[1,.24,.62,1.88,11.86]
  });
});