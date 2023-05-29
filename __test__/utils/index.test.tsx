import '@testing-library/jest-dom';
import {
  convertMsToMinutesAndSeconds,
  intToString,
  truncateString,
} from '@utils/index';

describe('truncateString', () => {
  it('truncates a string correctly', () => {
    expect(truncateString('hello world', 5)).toEqual('hello...');
    expect(truncateString('foo', 10)).toEqual('foo');
    expect(truncateString(undefined, 5)).toBeUndefined();
  });
});

describe('intToString', () => {
  it('converts small numbers to strings correctly', () => {
    expect(intToString(0)).toEqual('0');
    expect(intToString(42)).toEqual('42');
    expect(intToString(999)).toEqual('999');
  });

  it('converts large numbers to strings correctly', () => {
    expect(intToString(1000)).toEqual('1K');
    expect(intToString(123456789)).toEqual('123.46M');
    expect(intToString(999999999999)).toEqual('1000B');
    expect(intToString(1000000000000000)).toEqual('1P');
    expect(intToString(1500000000000000000)).toEqual('1.5E');
    expect(intToString(2000000000000000000000)).toEqual('2000E');
  });
});

describe('convertMsToMinutesAndSeconds', () => {
  it('converts 0ms to "0 min 0 sec"', () => {
    expect(convertMsToMinutesAndSeconds(0)).toEqual('0 min 0 sec');
  });

  it('converts 1ms to "0 min 0 sec"', () => {
    expect(convertMsToMinutesAndSeconds(1)).toEqual('0 min 0 sec');
  });

  it('converts 59000ms to "0 min 59 sec"', () => {
    expect(convertMsToMinutesAndSeconds(59000)).toEqual('0 min 59 sec');
  });

  it('converts 60000ms to "1 min 0 sec"', () => {
    expect(convertMsToMinutesAndSeconds(60000)).toEqual('1 min 0 sec');
  });

  it('converts 61000ms to "1 min 1 sec"', () => {
    expect(convertMsToMinutesAndSeconds(61000)).toEqual('1 min 1 sec');
  });

  it('converts 3600000ms to "60 min 0 sec"', () => {
    expect(convertMsToMinutesAndSeconds(3600000)).toEqual('60 min 0 sec');
  });
});
