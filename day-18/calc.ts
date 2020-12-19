/**
 * @param simpleCalc function that calculates equation without brackets
 */
export function createCalc(
  simpleCalc: (equation: string) => number
): (equation: string) => number {
  return function (equation: string): number {
    while (equation.includes('(')) {
      equation = equation.replace(
        /\([^(]*?\)/g,
        simple => `${simpleCalc(simple.slice(1, -1))}`
      )
    }

    return simpleCalc(equation)
  }
}
