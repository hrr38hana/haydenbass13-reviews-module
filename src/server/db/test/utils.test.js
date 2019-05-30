const utils = require("../utils");
const data = require("../data");

describe("utility methods for database seeding", () => {
  describe("randomNumber", () => {
    test("should return a random number between a given min and max (inclusive", () => {
      let random = utils.randomNumber(0, 10);
      expect(random).not.toBeGreaterThan(10);
      expect(random).not.toBeLessThan(0);
    });
    test("should be inclusive of min and max", () => {
      let random = utils.randomNumber(0, 1);
      expect(random).not.toBeGreaterThan(1);
      expect(random).not.toBeLessThan(0);
    });
    test("should work for negative numbers", () => {
      let random = utils.randomNumber(-5, -1);
      expect(random).not.toBeGreaterThan(-1);
      expect(random).not.toBeLessThan(-5);
    });
  });

  describe("optData", () => {
    test("should return a string", () => {
      let data = utils.optData();
      expect(typeof data).toBe("string");
    });
  });

  describe("createReviewQuery", () => {
    let query = utils.createReviewQuery(1, 5);

    test("should return a string", () => {
      expect(typeof query).toBe("string");
    });
    test("The string should begin with 'INSERT IGNORE INTO'", () => {
      let array = query.split(" ");
      let section = [array[0], array[1], array[2]].join(" ");
      expect(section).toBe("INSERT IGNORE INTO");
    });
    // test("Should contain string data from seed data", () => {
      
    // })
  });
});
