// Remember AAA - Arrange, Act, Assess
const enhancer = require('./enhancer.js');

const weapons = [
  {
    name: 'sword',
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
  {
    name: 'greatsword',
    durability: 100,
    enhancement: 20,
  },
];


describe('enhancer', () => {
  describe('repair', () => {
    const { repair } = enhancer;

    it('takes in an item and returns the item back with durability property of 100', () => {
      // arrange
      const expected = 100;

      // act
      const actualResults = weapons.map((weapon) => repair(weapon));

      // assess
      actualResults.forEach((actualResult) => expect(actualResult.durability).toBe(expected));
    });
  });
  describe('fail', () => {
    const { fail } = enhancer;

    // assess
    it('takes in an item and if item\'s enhancement < 15 durability of item is decreased by 5 or 0 whichever is greater', () => {
      // arrange
      const expected = [
        { durability: 40 },
        { durability: 50 },
        { durability: 95 },
        { durability: 0 },
        { durability: 90 },
      ];
      // act
      const actual = weapons.map((weapon) => fail(weapon));
      // // arrange
      actual.forEach((result, idx) => expect(result.durability).toBe(expected[idx].durability));
    });
    // assess
    it('takes in an item and if item\'s enhancement is >= 15 durability decreased by 10', () => {
      // arrange
      const expected = [
        { durability: 40 },
        { durability: 50 },
        { durability: 95 },
        { durability: 0 },
        { durability: 90 },
      ];
      // act
      const actual = weapons.map(((weapon) => fail(weapon)));

      // assess
      actual.forEach((result, idx) => {
        expect(result.durability).toBe(expected[idx].durability);
      });
    });
    // assess
    it('takes in an item and if item\'s enhancement is greater than 16, the enhancement level decreases by 1', () => {
      const expected = [
        { enhancement: 15 },
        { enhancement: 17 },
        { enhancement: 5 },
        { enhancement: 3 },
        { enhancement: 19 },
      ];
      // act
      const actual = weapons.map((weapon) => fail(weapon));
      actual.forEach((result, idx) => {
        expect(result.enhancement).toBe(expected[idx].enhancement);
      });
    });
  });
  describe('success', () => {
    const { success } = enhancer;
    it('should increase the items enhancement by 1 if enchancement level is < 20', () => {
      // arrange
      const expected = [
        { enhancement: 16 },
        { enhancement: 19 },
        { enhancement: 6 },
        { enhancement: 4 },
        { enhancement: 20 },
      ];
      // act
      const actual = weapons.map((weapon) => success(weapon));
      // assess
      actual.forEach((result, idx) => {
        expect(result.enhancement).toBe(expected[idx].enhancement);
      });
    });
  });
  describe('get', () => {
    const { get } = enhancer;
    it('should return the name not modified if the ehancment level is 0', () => {
      // arrange
      const expected = { name: 'sword', enhancement: 0, durability: 100 };
      const weapon = { name: 'sword', enhancement: 0, durability: 100 };
      // act
      const actual = get(weapon);

      // assess
      expect(actual.name).toBe(expected.name);
    });
    it('should return the name modified to include a plus symbol and the ehancement level contained in brackets prior to the item name', () => {
      // arrange
      const expected = [
        {
          name: '[+15] sword',
        },
        {
          name: '[+18] bow',
        },
        {
          name: '[+5] lance',
        },
        {
          name: '[+3] axe',
        },
        {
          name: '[+20] greatsword',
        },
      ];
      // act
      const actual = weapons.map((weapon) => get(weapon));
      // assess
      actual.forEach((result, idx) => {
        expect(result.name).toBe(expected[idx].name);
      });
    });
  });
});
