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
export function truncateString(str: string | undefined, num: number) {
  if (!str) return;
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

// export function convertMsToMinutesAndSeconds(ms: number) {
//   const minutes = Math.floor(ms / 60000);
//   const seconds = Number(((ms % 60000) / 1000).toFixed(0));
//   return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
// }

// create function to change ms to number and sting for minutes and seconds example 56mins 23secs
export function convertMsToMinutesAndSeconds(ms: number) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Number(((ms % 60000) / 1000).toFixed(0));
  return `${minutes} min ${seconds} sec`;
}
