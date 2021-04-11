var moment = require('moment');
const cool = require("images");
const fs = require('fs');

const log = './log.txt';

let log_date = (date) => {
    if(!fs.existsSync(log)) {
        fs.appendFile(log, '', function (err) {
            if (err) throw err;
        })
    }

    fs.appendFile(log, `${date}\r\n`, function (err) {
        if (err) throw err;
    })
}
/*
// let local = moment().format(); 
// let utc = moment().utc().format();

//let local = moment(); 
//let utc = moment().utc();
//let diferencia = moment(utc.diff(local));
//let colombia = utc.add(-5, 'hours');
//let argentina = utc.add(-3, 'hours')*/

class action {
    time (zone) {
        if (zone == 'argentina') {
            let argentina = moment().format('YYYY-MM-DD HH:mm:ss');
            log_date(argentina);
        }

        if (zone == 'colombia') {
            let colombia = moment().utc().add(-5, 'hours').format('YYYY-MM-DD HH:mm:ss');
            log_date(colombia);
        }
    }

    image (number) {
        const ima = cool.many(600, 800, number);
        ima.forEach( response => log_date(response) );
    }
}

module.exports = action;
/*
//console.log(local);
//console.log(utc);
//console.log(local.diff(utc, 'hours'));
//console.log(colombia);
//console.log(argentina); */