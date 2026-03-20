// math.test.js
const { add, subtract, multiply } = require('./math'); 

test('Suma correctamente 2 + 3', () => {
    expect(add(2, 3)).toBe(5);
});

test('Resta correctamente 10 - 4', () => {
    expect(subtract(10, 4)).toBe(6);
});

test('Multiplica correctamente 3 * 4', () => {
    expect(multiply(3, 4)).toBe(12);
});