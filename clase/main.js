// let calculadora = function (n1, n2, callback){
//     return callback(n1, n2);
// }
let calculadora = (n1, n2, callback) => callback(n1, n2); //mas corto
//Calculadora con el callback inline
console.log(calculadora(7, 5, function(n1, n2){return n1 - n2}));
console.log(calculadora(7, 5, function(n1, n2){return n1 + n2}));
console.log(calculadora(7, 5, function(n1, n2){return n1 * n2}));
console.log(calculadora(7, 5, function(n1, n2){return n1 / n2}));