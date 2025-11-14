const {sum} = require('./app.js')

test('suma de 5 y 5 debe de ser 10', ()=>{
    let total = sum(5,5);
    expect(total).toBe(10)
});