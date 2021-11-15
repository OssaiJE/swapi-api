import mysql from "mysql";

const db = mysql.createConnection({
  host: "us-cdbr-east-04.cleardb.com",
  user: "ba1a9c8159e7f0",
  password: "fcc8fb46",
//   database: "heroku_01a7a053f210cd7",
});

db.connect((err) => {
  if (!err) {
    console.log("MySQL DB Connected.");
  } else {
    console.log("MySQL failed to connect.");
    throw err;
  }
});
db.on("error", function (err) {
  console.log("db error", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    // Connection to the MySQL server is usually
    db.connect(); // lost due to either server restart, or a
  } else {
    // connnection idle timeout (the wait_timeout
    throw err; // server variable configures this)
  }
});

export default db;
