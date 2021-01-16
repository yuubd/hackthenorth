const postgres = require('postgres');

const sql = postgres('postgres://postgres:postgres@35.223.169.194:5432/postgres');

module.exports = sql