import mysql from "mysql";

const db = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "ba1a9c8159e7f0",
  password: "fcc8fb46",
});


db.query("select 1 + 1", (err, rows) => {
  /* */
});

export default db;
