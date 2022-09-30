const calc = require('../calc');

// Test(s) for sum
test('one plus two is three', () => {
    expect(calc.sum(1,2)).toBe(3);
})

// Test(s) for sub
test('one minus two is negative one', () => {
    expect(calc.sub(1,2)).toBe(-1);
})
