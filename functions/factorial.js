export function factorialJs(i) {
  return i === 0 ? 1 : i * factorialJs(i - 1);
}
