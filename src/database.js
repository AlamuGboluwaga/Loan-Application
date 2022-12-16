const { Pool } = require('pg')

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "perntodo",
    password: "oyewola@202",
    port: 1234
  });

module.exports = pool

