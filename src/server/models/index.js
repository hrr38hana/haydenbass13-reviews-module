var db = require("../db/connection");

module.exports = {
  reviews: {
    get: function(id, callback) {
      db.queryAsync("USE TREK;").then(
        db
          .queryAsync(`SELECT * FROM REVIEWS WHERE product_id = ${id}`)
          .then(results => {
            callback(results[0]);
          })
          .catch(err => console.error(err))
      );
    },
    post: function(review, callback) {
      db.queryAsync("USE TREK;").then(
        db
          .queryAsync(
            `INSERT IGNORE INTO reviews (stars, body, title, recommended, location, gift, email, pros, cons, describe_yourself, best_uses, nickname, created, product_ID)
        VALUES ('${review.stars}', '${review.body}', '${review.title}', '${
              review.recommend
            }', '${review.location}', '${review.gift}', '${review.email}', '${
              review.pros
            }', '${review.cons}', '${review.describe_yourself}', '${
              review.best_uses
            }', '${review.nickname}', '0', '${review.product_ID}')`
          )
          .then(() =>
            db.queryAsync(
              `SELECT * FROM REVIEWS WHERE product_id = ${review.product_ID}`
            )
          )
          .then(results => callback(results[0]))
          .catch(err => console.error(err))
      );
    }
  }
};
