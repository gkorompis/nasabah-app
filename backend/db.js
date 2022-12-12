// const Pool = require('pg');
// import * as pg from 'pg';

const pg = require('pg')
const pool = new pg.Pool({
    user: "nasabah",
    password: "nasabah",
    host: "localhost",
    port: 5432
});
module.exports = pool;