import {parsePastedDate} from './parsePastedDate';

test('it parses an ISO date', () => {
  expect(parsePastedDate('2050-01-02', false)).toBe('2050-01-02');
});

test('it pads single-digit month and day', () => {
  expect(parsePastedDate('2050-1-2', false)).toBe('2050-01-02');
});

test('it parses an ISO datetime when time is requested', () => {
  expect(parsePastedDate('2050-01-02T09:05', true)).toBe('2050-01-02T09:05');
  expect(parsePastedDate('2050-01-02 09:05', true)).toBe('2050-01-02T09:05');
});

test('it drops the time part when time is not requested', () => {
  expect(parsePastedDate('2050-01-02T09:05', false)).toBe('2050-01-02');
});

test('it defaults the time to midnight when none is provided', () => {
  expect(parsePastedDate('2050-01-02', true)).toBe('2050-01-02T00:00');
});

test('it trims surrounding whitespace', () => {
  expect(parsePastedDate('  2050-01-02  ', false)).toBe('2050-01-02');
});

test('it returns null for an empty string', () => {
  expect(parsePastedDate('', false)).toBeNull();
});

test('it returns null for a non-date string', () => {
  expect(parsePastedDate('not a date', false)).toBeNull();
});

test('it returns null for an out-of-range date', () => {
  expect(parsePastedDate('2050-02-31', false)).toBeNull();
});

test('it returns null for an out-of-range time', () => {
  expect(parsePastedDate('2050-01-02T24:00', true)).toBeNull();
  expect(parsePastedDate('2050-01-02T20:70', true)).toBeNull();
});

test('it returns null when extra characters trail a valid date', () => {
  expect(parsePastedDate('2050-01-02xyz', false)).toBeNull();
  expect(parsePastedDate('2050-01-02T09:05:30Z', true)).toBeNull();
});

test('it rejects locale-ambiguous slash formats', () => {
  expect(parsePastedDate('01/02/2050', false)).toBeNull();
});
