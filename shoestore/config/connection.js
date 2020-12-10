const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'livecodep1w3',
  password: 'postgres',
  port: 5432,
})


module.exports = pool