let calmodule = require('./calculadora')

let sumar = new calmodule.CalcSum();
let restar = new calmodule.CalcRest();
let multiplicar = new calmodule.CalcMult();
let dividir = new calmodule.CalcDiv();

sumar.suma(10, 30);
restar.resta(10, 30);
multiplicar.multi(10, 30);
dividir.div(10, 30);