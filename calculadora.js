const fs = require('fs'); 
const log = './log.txt'

// const files = fs.readdirSync('./');
// console.log(files)

if (!fs.existsSync('./log.txt')) {
    fs.appendFile('mynewfile.txt', 'Hello Content', function(err) {
            if(err) throw err;
            console.log('creado');
        });
} 



class Calculadora {
    sumar(num1, num2) {
        //fs.writeFile(log, `${num1}+${num2}=${num1+num2}`, function(err) {//sobre escribe
        //fs.appendFile(log, `${num1}+${num2}=${num1+num2}`, function(err) {//anade uno nuevo
        fs.appendFile(log, `${num1}+${num2}=${num1+num2} \r\n` , function(err) {//da un enter y lo anade en la linea de abajo 
            if(err) throw err;
            console.log('creado');
        });
    }
}

module.exports = Calculadora;