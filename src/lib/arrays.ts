export const getNumbersRange = (from = 0, to?: number) => {
  if (to === undefined) {
    if (from < 0) {
      throw Error(`getNumbersRange: from: ${from} less than 0`);
    }
    return Array.from(Array(from).keys(), (item) => item + 1);
  }

  if (from > to) {
    throw Error(`getNumbersRange: from: ${from} greater than to: ${to}`);
  }
  return Array.from(Array(to - from + 1).keys(), (item) => item + from);
};
