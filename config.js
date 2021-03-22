require('dotenv').config();

const hostname = process.env.HOST;
const database = process.env.DATABASE;
const port = process.env.PORT;

console.log(hostname);

module.exports = {
    hostname,
    database, 
    port
}