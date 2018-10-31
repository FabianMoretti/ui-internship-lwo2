/* eslint "require-jsdoc": 0 */
export const formatWorkingHours = (workdays) => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const byDay = workdays.reduce((acc, {
    day, from, to,
  }) => (
    Object.assign(acc, {
      [day.toUpperCase()]: `${from} - ${to}`,
    })
  ), {});
  const table = [];
  for (let i = 1; i <= days.length; i++) {
    let [prev, cur, next] = [days[i - 1], days[i], ''];
    if (byDay[prev]) {
      while (byDay[prev] === byDay[cur]) {
        [next, cur] = [cur, days[++i]];
      }
      const format = prev + (next && ` - ${next}`);
      table.push(`${format}: ${byDay[prev]}`);
    }
  }
  return table.length ? table : [];
};
