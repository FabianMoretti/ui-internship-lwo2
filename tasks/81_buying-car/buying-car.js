/* eslint "require-jsdoc": 0 */
export const nbMonths = (startPriceOld, startPriceNew,
    savingsPerMonth, percentLossByMonth) => {
  let _old = startPriceOld;
  let _new = startPriceNew;
  if (_old >= _new) {
    return [0, _old - _new];
  }
  let months = 0;
  let savings = 0;
  let loss = percentLossByMonth;
  while ((savings + _old) < _new) {
    months++;
    if (months % 2 === 0) {
      loss += 0.5;
    }
    savings += savingsPerMonth;
    _old -= _old * (loss / 100);
    _new -= _new * (loss / 100);
  }
  return [months, Math.round(savings + _old - _new)];
};
