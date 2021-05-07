const knex = require('../../knexfile');

const getUserById = (id) => {
  console.log(id)
    return knex('users')
        .where('id', id)
        .select('*');
}

module.exports = {
  getUserById
}
