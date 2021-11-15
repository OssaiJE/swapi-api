import mysql from "mysql";


    const db = mysql.createConnection({
      host: `${process.env.CLEARDB_DATABASE_URL}`,
      user: "ba1a9c8159e7f0",
      password: "fcc8fb46",
    });

    db.connect( (err) => {
        if (!err) {
            console.log("MySQL DB Connected.");
        } else {
            console.log("MySQL failed to connect.");
            throw err;
        }
    });


export default db;
