import mysql from "mysql";

const db = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "ba1a9c8159e7f0",
  password: "fcc8fb46",
  //   database: "heroku_01a7a053f210cd7",
});

// db.connect((err) => {
//   if (!err) {
//     console.log("MySQL DB Connected.");
//   } else {
//     console.log("MySQL failed to connect.");
//     throw err;
//   }
// });
db.query("select 1 + 1", (err, rows) => {
  /* */
});

export default db;
