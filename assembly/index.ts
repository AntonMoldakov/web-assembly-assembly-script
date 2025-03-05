// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function factorial(i: i32): i32 {
  if (i < 0) throw new Error('Factorial undefined for negative numbers');
  if (i === 0) return 1;
  return i * factorial(i - 1);
}
