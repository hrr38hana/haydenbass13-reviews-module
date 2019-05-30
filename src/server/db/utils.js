const {
  dummyNames,
  cities,
  positiveRevs,
  negativeRevs,
  dummyText
} = require("./data.js");
const db = require("./connection");

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const optData = () => {
  let num = randomNumber(0, 1);
  if (num === 1) {
    let text = dummyText.slice(randomNumber(5, 20), randomNumber(20, 150));
    return text.length < 38 ? text : text.slice(0, 38);
  }
  if (num === 0) {
    return "";
  }
};

const createReviewQuery = (i, j) => {
  let stars = randomNumber(1, 5);
  let body = dummyText.slice(0, randomNumber(10, dummyText.length));
  let title = stars > 2 ? positiveRevs[j] : negativeRevs[j];
  let recommended = stars > 2 ? 1 : 0;
  let location = cities[randomNumber(0, 49)];
  let gift = randomNumber(0, 1);
  let email = "apersonsemail@gmail.com";
  let pros = optData();
  let cons = optData();
  let describe_yourself = optData();
  let best_uses = optData();
  let nickname = dummyNames[randomNumber(0, dummyNames.length - 1)];
  let created = randomNumber(1, 30);

  return `INSERT IGNORE INTO reviews (stars, body, title, recommended, location, gift, email, pros, cons, describe_yourself, best_uses, nickname, created, product_ID)
  VALUES ('${stars}', '${body}', '${title}', '${recommended}', '${location}', '${gift}', '${email}', '${pros}', '${cons}', '${describe_yourself}', '${best_uses}', '${nickname}', '${created}', '${i}');
  `;
};

const seed = () => {
  for (var i = 1; i < 101; i++) {
    let revNum = randomNumber(0, 10);
    for (var j = 0; j < revNum; j++) {
      let review = createReviewQuery(i, j);
      db.queryAsync(review);
    }
  }
};

module.exports = {
  randomNumber,
  optData,
  createReviewQuery,
  seed
};
