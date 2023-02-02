export function randomizeArray<T>(array: Array<T>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function intToString(num: number): string {
  const numToString = num.toString().replace(/[^0-9.]/g, '');

  if (num < 1000) {
    return numToString;
  }
  const si = [
    { v: 1e3, s: 'K' },
    { v: 1e6, s: 'M' },
    { v: 1e9, s: 'B' },
    { v: 1e12, s: 'T' },
    { v: 1e15, s: 'P' },
    { v: 1e18, s: 'E' },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index]!.v) {
      break;
    }
  }
  return (
    (num / si[index]!.v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') +
    si[index]!.s
  );
}

// function to truncate a string and add an ellipsis
export function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}
