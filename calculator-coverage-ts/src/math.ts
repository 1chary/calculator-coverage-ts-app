// math.ts — TypeScript source
// Instrumented by Istanbul via babel-plugin-istanbul during build.
// window.__coverage__ will contain JS line numbers but inputSourceMap
// will map them back to these TypeScript line numbers.

export class Calculator {

  add(a: number, b: number): number {
    return a + b;
  }

  multiply(a: number, b: number): number {
    console.log('multiplication called with', a, b);
    if (false) {
      console.log('This was executed');
    } else {
      console.log('This was NOT executed');
    }
    return a * b;
  }

  divide(a: number, b: number): number | string {
    if (b === 0) {
      return 'Error: Division by zero';
    }
    return a / b;
  }
}
