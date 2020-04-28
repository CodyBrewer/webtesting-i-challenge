// Remember AAA - Arrange, Act, Assess
const enhancer = require('./enhancer.js');

const weapons = [
  {
    type: 'sword',
    durability: 50,
    enhancement: 15,
  },
  {
    name: 'bow',
    durability: 60,
    enhancement: 18,
  },
  {
    name: 'lance',
    durability: 100,
    enhancement: 5,
  },
  {
    name: 'axe',
    durability: 3,
    enhancement: 3,
  },
];


describe('enhancer', () => {
  describe('repair', () => {
    const { repair } = enhancer;

    it('takes in an item and returns the item back with durability property of 100', () => {
      // arrange
      const expectedResult = 100;

      // act
      const actualResults = weapons.map((weapon) => repair(weapon));

      // assess
      actualResults.forEach((actualResult) => expect(actualResult.durability).toBe(expectedResult));
    });
  });
  describe('fail', () => {
    const { fail } = enhancer;

    // assess
    it('takes in an item and if item\'s enhancement < 15 durability of item is decreased by 5 or 0 whichever is greater', () => {
      // arrange
      const expected = [
        { durability: 40, enhancement: 15 },
        { durability: 50, enhancement: 18 },
        { durability: 95, enhancement: 5 },
        { durability: 0, enhancement: 3 },
      ];
      // act
      const actual = weapons.map((weapon) => fail(weapon));
      // // arrange
      actual.forEach((result, idx) => expect(result.durability).toBe(expected[idx].durability));
    });
    // assess
    it('takes in an item and if item\'s enhancement is >= 15 durability decreased by 10', () => {
      // arrange
      const expectedResults = [
        { durability: 40, enhancement: 15 },
        { durability: 50, enhancement: 18 },
        { durability: 95, enhancement: 5 },
        { durability: 0, enhancement: 3 },
      ];
      // act
      const actual = weapons.map(((weapon) => fail(weapon)));

      // assess
      actual.forEach((result, idx) => {
        expect(result.durability).toBe(expectedResults[idx].durability);
      });
    });
    // assess
    it('takes in an item and if item\'s is greater than 16, the enhancement level decreases by 1', () => {
      const expectedResults = [
        { durability: 40, enhancement: 15 },
        { durability: 50, enhancement: 17 },
        { durability: 95, enhancement: 5 },
        { durability: 0, enhancement: 3 },
      ];
      // act
      const actual = weapons.map(((weapon) => fail(weapon)));
      actual.forEach((result, idx) => {
        expect(result.enhancement).toBe(expectedResults[idx].enhancement);
      });
    });
  });
});
