import mysql from "mysql";


    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
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
