import { Calculator } from '../math';

const calc = new Calculator();

describe('add()', () => {
  test('adds two positive numbers',        () => { expect(calc.add(2, 3)).toBe(5);          });
  test('adds positive and negative',        () => { expect(calc.add(10, -4)).toBe(6);        });
  test('adds two zeros',                    () => { expect(calc.add(0, 0)).toBe(0);           });
  test('adds floating point numbers',       () => { expect(calc.add(1.5, 2.5)).toBeCloseTo(4); });
});

describe('multiply()', () => {
  test('multiplies two positive numbers',  () => { expect(calc.multiply(3, 4)).toBe(12);    });
  test('multiplies by zero',               () => { expect(calc.multiply(99, 0)).toBe(0);    });
  test('multiplies negative numbers',      () => { expect(calc.multiply(-3, -3)).toBe(9);   });
  test('multiplies positive and negative', () => { expect(calc.multiply(5, -2)).toBe(-10);  });
});

describe('divide()', () => {
  test('divides two positive numbers',     () => { expect(calc.divide(10, 2)).toBe(5);                        });
  test('divides with decimal result',      () => { expect(calc.divide(7, 2)).toBeCloseTo(3.5);                });
  test('divides negative numbers',         () => { expect(calc.divide(-9, 3)).toBe(-3);                       });
  test('divides a number by itself',       () => { expect(calc.divide(5, 5)).toBe(1);                         });
  test('returns error for division by 0',  () => { expect(calc.divide(10, 0)).toBe('Error: Division by zero'); });
});
