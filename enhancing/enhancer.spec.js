// Remember AAA - Arrange, Act, Assess
const enhancer = require('./enhancer.js');

const weapons = [
  {
    type: 'sword',
    durability: 50,
    enhancement: 3,
  },
  {
    name: 'bow',
    durability: 60,
    enhancement: 2,
  },
  {
    name: 'lance',
    durability: 100,
    enhancement: 0,
  },
];

describe('repair', () => {
  const { repair } = enhancer;

  it('takes in an item and returns the item back with durability property of 100', () =>{
    // arrange
    const expectedResult = 100;

    // act
    const actualResults = weapons.map((weapon) => repair(weapon));

    // assess
    actualResults.forEach((actualResult) => expect(actualResult.durability).toBe(expectedResult));
  });
});
