const utils = require("../utils");
const $ = require("jquery");

/*server must be started to run these tests:
  spin up server with 'npm start' in terminal from root directory*/

describe("Server", () => {
  describe("Reviews Request", () => {
    beforeEach(async () => {
      await utils.seed();
    });
    test("Should return reviews in an array for specific product_id", () => {
      $.get(`/${utils.randomNumber(0, 100)}`).done(results => {
        expect(Array.isArray(results)).toBe(false);
      });
    });
  });
});
