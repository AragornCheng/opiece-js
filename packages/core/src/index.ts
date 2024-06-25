/**
 * @description: 求和函数
 * @param {*}
 * @return {*}
 */

function sum(a: number, b: number) {
  if (typeof a !== 'number') return a
  if (typeof b !== 'number') return b
  return a + b;
}

export { sum }