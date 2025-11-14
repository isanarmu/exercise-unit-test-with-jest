console.log("Hello World")

const sum = (a,b) => a+b

console.log(sum(5,5))
test("one dollar should be 0.87 / 156.5 pounds", function(){
    const{ fromDollarToYen} = require('./app.js');
    const result = fromDollarToYen(1);
    const expected = 1 / 1.07 *156.5;
    expect(result).toBe(expected);
    
})

test("one yen should be x",function() {
    const { fromYenToPound } = require ('./app.js');
    const result = fromYenToPound(1);
    const expected = 1 / 156.5 * 0.87;
    expect(result).toBe(expected);
} )
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro *  156.5;
    return valueInYen;  
}


const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 156.5
    let valueInPound = valueInEuro * 0.87;
    return valueInPound
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }