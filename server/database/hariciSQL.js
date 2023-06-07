const PSQL = require("./psql");


// PSQL.query('SELECT * FROM users WHERE id=1', (err, res) => {
//     console.log("Error: ", err);
//     console.log("Result: ", res.rows[0].user_name)
//     PSQL.end()
// })


const query = "SELECT * FROM users WHERE id=1";
PSQL.query(query, (err, res) => {
    console.log("Error: ", err);
    console.log("Result: ", res.rows[0].user_name)
    PSQL.end()
})