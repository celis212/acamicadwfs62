var moment = require('moment'); 

// let local = moment().format(); 
// let utc = moment().utc().format();

let local = moment(); 
let utc = moment().utc();

console.log(local);
console.log(utc);
console.log(local.diff(utc, 'hours'));