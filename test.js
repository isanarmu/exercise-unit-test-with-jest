const {sum} = require('./app.js')

test('suma de 5 y 5 debe de ser 10', ()=>{
    let total = sum(5,5);
    expect(total).toBe(10)
});

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