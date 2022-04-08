
const low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');

db = low(adapter);

// If file.json doesn't exist, db.data will be null
db.data ||= { users: [] }             // Node >= 15.x

module.exports = db;