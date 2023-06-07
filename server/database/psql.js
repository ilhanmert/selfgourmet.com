const { Pool } = require("pg");
require("dotenv").config();

const PSQL = new Pool({
    database: process.env.DATABASE_NAME,
    port: 5432,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
});

module.exports = PSQL;