var moment = require('moment'); 

// let local = moment().format(); 
// let utc = moment().utc().format();

let local = moment(); 
let utc = moment().utc();
let diferencia = moment(utc.diff(local));
let colombia = utc.add(-5, 'hours');
let argentina = utc.add(-3, 'hours')

console.log(local);
console.log(utc);
console.log(local.diff(utc, 'hours'));
console.log(colombia);
console.log(argentina); 