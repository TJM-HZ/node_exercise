const sum = require('../sum').sum;
const sub = require('../sum').sub;

// Tests for sum

test('one plus two is three', () => {
    expect(sum(1,2)).toBe(3);
})

// Tests for sub

test('one minus two is -1', () => {
    expect(sub(1,2)).toBe(-1);
})

