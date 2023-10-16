const z = require('./script');

test('z(0.5) => 2.12', () =>{
    expect(z(0.5)).toBeCloseTo(2.12, 2);
})
test('z(1.8) => 0.32', () =>{
    expect(z(1.8)).toBeCloseTo(0.32 ,2);
})