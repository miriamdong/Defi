require('dotenv').config();

module.exports = require('knex')({
  client: 'pg',
  connection: 'postgres://labber:labber@localhost:5432/defi'
});