const Promise = require('bluebird');

module.exports = function createTables(db) {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  // Create products table
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER AUTO_INCREMENT NOT NULL,
      name VARCHAR(48) NOT NULL ,
      PRIMARY KEY (id)
    );`)
    .then(() => {
      // Create reviews table
      return db.queryAsync(`
      CREATE TABLE IF NOT EXISTS reviews(
        id INTEGER AUTO_INCREMENT,
        stars INTEGER(1) NOT NULL,
        title VARCHAR(60) NOT NULL,
        body VARCHAR(2000) NOT NULL,
        recommended INTEGER(1) NOT NULL,
        location VARCHAR(40) NOT NULL,
        gift INTEGER(1) NOT NULL,
        email VARCHAR(40) NOT NULL,
        pros VARCHAR(48) NULL,
        cons VARCHAR(48) NOT NULL,
        describe_yourself VARCHAR(48) NULL,
        best_uses VARCHAR(48) NULL,
        nickname VARCHAR(48) NOT NULL,
        created INT(3) NOT NULL,
        product_ID INTEGER NOT NULL,
        PRIMARY KEY(id)
        );`);
    })
    .then(() => {
      // create foreign keys
      return db.queryAsync(`
      ALTER TABLE reviews ADD FOREIGN KEY(product_ID) REFERENCES products(id);
        `);
    }).then(() => {
      for (var i = 1; i < 101; i++) {
        db.queryAsync(`INSERT IGNORE INTO products (name) VALUES ('Product Number ${i}')`);
      }
    }).then(() => {
      const dummyNames = [
        "Liam",
        "Emma",
        "Noah",
        "Olivia",
        "William",
        "Ava",
        "James",
        "Isabella",
        "Oliver",
        "Sophia",
        "Benjamin",
        "Charlotte",
        "Elijah",
        "Mia",
        "Lucas",
        "Amelia",
        "Mason",
        "Harper",
        "Logan",
        "Evelyn",
        "Alexander",
        "Abigail",
        "Ethan",
        "Emily",
        "Jacob",
        "Elizabeth",
        "Michael",
        "Mila",
        "Daniel",
        "Ella",
        "Henry",
        "Avery",
        "Jackson",
        "Sofia",
        "Sebastian",
        "Camila",
        "Aiden",
        "Aria",
        "Matthew",
        "Scarlett",
        "Samuel",
        "Victoria",
        "David",
        "Madison",
        "Joseph",
        "Luna",
        "Carter",
        "Grace",
        "Owen",
        "Chloe",
        "Wyatt",
        "Penelope",
        "John",
        "Layla",
        "Jack",
        "Riley",
        "Luke",
        "Zoey",
        "Jayden",
        "Nora",
        "Dylan",
        "Lily",
        "Grayson",
        "Elanor",
        "Levi",
        "Hannah",
        "Issac",
        "Lillian",
        "Gabriel",
        "Addison",
        "Julian",
        "Aubrey",
        "Mateo",
        "Ellie",
        "Anthony",
        "Stella",
        "Jaxon",
        "Natalie",
        "Lincoln",
        "Zoe",
        "Joshua",
        "Leah",
        "Christopher",
        "Hazel",
        "Andrew",
        "Violet",
        "Theodore",
        "Aurora",
        "Caleb",
        "Savannah",
        "Ryan",
        "Audrey",
        "Asher",
        "Brooklyn",
        "Nathan",
        "Bella",
        "Thomas",
        "Claire",
        "Leo",
        "Skylas",
        "Isaiah",
        "Lucy",
        "Charles",
        "Paisley",
        "Josiah",
        "Everly",
        "Hudson",
        "Annah",
        "Christian",
        "Caroline",
        "Hunter",
        "Nova",
        "Connor",
        "Genesis",
        "Eli",
        "Emilia",
        "Ezra",
        "Kennedy",
        "Aaron",
        "Samantha",
        "Landon",
        "Maya",
        "Adrian",
        "Willow",
        "Jonathan",
        "Kinsley",
        "Nolan",
        "Naomi",
        "Jeremiah",
        "Aaliyah",
        "Easton",
        "Elena"
      ];

      const cities = [
        "Montgomery, AL",
        "Juneau, AK",
        "Phoenix, AZ",
        "Little Rock, AR",
        "Sacramento, CA",
        "Denver, CO",
        "Hartford, CT",
        "Dover, DE",
        "Tallahassee, FL",
        "Atlanta, GA",
        "Honolulu, HI",
        "Boise, ID",
        "Springfield, IL",
        "Indianapolis, IN",
        "Des Moines, IA",
        "Topeka, KS",
        "Frankfort, KY",
        "Baton Rouge, LA",
        "Augusta, ME",
        "Annapolis, MD",
        "Boston, MA",
        "Lansing, MI",
        "Saint Paul, MN",
        "Jackson, MS",
        "Jefferson City, MO",
        "Helena, MT",
        "Lincoln, NE",
        "Carson City, NV",
        "Concord, NH",
        "Trenton, NJ",
        "Santa Fe, NM",
        "Albany, NY",
        "Raleigh, NC",
        "Bismarck, ND",
        "Columbus, OH",
        "Oklahoma City, OK",
        "Salem, OR",
        "Harrisburg, PA",
        "Providence, RI",
        "Columbia, SC",
        "Pierre, SD",
        "Nashville, TN",
        "Austin, TX",
        "Salt Lake City, UT",
        "Montpelier, VT",
        "Richmond, VA",
        "Olympia, WA",
        "Charleston, WV",
        "Madison, WI",
        "Cheyenne, WY"
      ];

      const positiveRevs = [
        "WOW!",
        "Love it!",
        "No Complaints",
        "Love at first sight",
        "<3",
        "Bought one for my wife too",
        "Game Changer",
        "Very Happy with this purchase",
        "Super Fun"
      ];

      const negativeRevs = [
        "Waste of money",
        "its okay but...",
        "could definitely be improved",
        "let down",
        "avoid this product",
        "Immediately returned!",
        "Thumbs Down!",
        "Not the best, not the worst",
        "Go with Cannondale instead",
        "Hard Pass!"
      ];

      const dummyText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

      const randomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const optData = () => {
        let num = randomNumber(0, 1);
        if (num === 1) {
          let text = dummyText.slice(
            randomNumber(5, 20),
            randomNumber(20, 150)
          );
          return text.length < 38 ? text : text.slice(0, 38);
        }
        if (num === 0) {
          return "";
        }
      };
      for (var i = 1; i < 101; i++) {
        let revNum = randomNumber(0, 10);
        for (var j = 0; j < revNum; j++) {
          //add a review for product i
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
          db.queryAsync(`
          INSERT IGNORE INTO reviews (stars, body, title, recommended, location, gift, email, pros, cons, describe_yourself, best_uses, nickname, created, product_ID)
          VALUES ('${stars}', '${body}', '${title}', '${recommended}', '${location}', '${gift}', '${email}', '${pros}', '${cons}', '${describe_yourself}', '${best_uses}', '${nickname}', '${created}', '${i}');
          `)
        }
      }
    }
    )
    .error(err => {
      console.log(err);
    });
};


