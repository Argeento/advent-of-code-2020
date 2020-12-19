/**
 * @param calc function that calculates equation without brackets
 */
export function createCalc(calc: (equation: string) => number) {
  return function (equation: string): number {
    while (equation.includes('(')) {
      equation = equation.replace(
        /\([^(]*?\)/g,
        simple => `${calc(simple.slice(1, -1))}`
      )
    }

    return calc(equation)
  }
}
