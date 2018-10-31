/* eslint "require-jsdoc": 0 */
import {greatestCommonDivisor,
} from '../100_greatest-common-divisor/greatest-common-divisor';
export const leastCommonMultiple = (a, b) => {
  return (!a || !b) ? 0 : (a * b) / greatestCommonDivisor(a, b);
};
