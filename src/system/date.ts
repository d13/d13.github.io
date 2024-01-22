const dateTimeFormats = new Map<Intl.DateTimeFormatOptions, Intl.DateTimeFormat>();
export function getDateTimeFormat(options: Intl.DateTimeFormatOptions) {
  let dateTimeFormat = dateTimeFormats.get(options);
  if (!dateTimeFormat) {
    dateTimeFormat = new Intl.DateTimeFormat(undefined, options);
    dateTimeFormats.set(options, dateTimeFormat);
  }
  return dateTimeFormat;
}

const relativeTimeFormats = new Map<Intl.RelativeTimeFormatOptions, Intl.RelativeTimeFormat>();
export function getRelativeTimeFormat(options: Intl.RelativeTimeFormatOptions) {
  let relativeTimeFormat = relativeTimeFormats.get(options);
  if (!relativeTimeFormat) {
    relativeTimeFormat = new Intl.RelativeTimeFormat(undefined, options);
    relativeTimeFormats.set(options, relativeTimeFormat);
  }
  return relativeTimeFormat;
}

type DateOrNumber = Date | number;
export function toDate(date: DateOrNumber) {
  return typeof date === 'number' ? new Date(date) : date;
}

export function toNumber(date: DateOrNumber) {
  return typeof date === 'number' ? date : date.getTime();
}

const defaultDateTimeFormatOptions: Intl.DateTimeFormatOptions = Object.freeze({
  year: 'numeric',
  month: 'long',
});

export function formatDate(date: DateOrNumber, options: Intl.DateTimeFormatOptions = defaultDateTimeFormatOptions) {
  return getDateTimeFormat(options).format(date);
}

export function formatDateRange(startDate: DateOrNumber, endDate: DateOrNumber, options: Intl.DateTimeFormatOptions) {
  return getDateTimeFormat(options).formatRange(startDate, endDate);
}

const defaultRelativeTimeFormatOptions: Intl.RelativeTimeFormatOptions = Object.freeze({
  numeric: 'auto',
});

export function formatRelativeTime(
  value: number,
  unit: Intl.RelativeTimeFormatUnit,
  options: Intl.RelativeTimeFormatOptions = defaultRelativeTimeFormatOptions,
) {
  return getRelativeTimeFormat(options).format(value, unit);
}

const TIME_SECOND = 1000;
const TIME_MINUTE = TIME_SECOND * 60;
const TIME_HOUR = TIME_MINUTE * 60;
const TIME_DAY = TIME_HOUR * 24;
const TIME_WEEK = TIME_DAY * 7;
const TIME_MONTH = TIME_DAY * 30;
const TIME_YEAR = TIME_DAY * 365;
const TIME_QUARTER = TIME_YEAR * 4;

const relativeTimeFormatUnits = Object.freeze(
  new Map<Intl.RelativeTimeFormatUnit, number>([
    ['year', TIME_YEAR],
    ['years', TIME_YEAR],
    ['quarter', TIME_QUARTER],
    ['quarters', TIME_QUARTER],
    ['month', TIME_MONTH],
    ['months', TIME_MONTH],
    ['week', TIME_WEEK],
    ['weeks', TIME_WEEK],
    ['day', TIME_DAY],
    ['days', TIME_DAY],
    ['hour', TIME_HOUR],
    ['hours', TIME_HOUR],
    ['minute', TIME_MINUTE],
    ['minutes', TIME_MINUTE],
    ['second', TIME_SECOND],
    ['seconds', TIME_SECOND],
  ]),
);

export function findBestRelativeTimeUnit(elapsed: number) {
  const absElapsed = Math.abs(elapsed);
  for (const [unit, unitValue] of relativeTimeFormatUnits) {
    if (absElapsed >= unitValue) return unit;
  }
  return 'second';
}

export function getDateDifference(startDate: DateOrNumber, endDate: DateOrNumber): number {
  const start = toNumber(startDate);
  const end = toNumber(endDate);
  return end - start;
}

type RelativeTimeFormatUnit = Intl.RelativeTimeFormatUnit | 'auto';

export function getUnitDifference(difference: number, unit: RelativeTimeFormatUnit = 'auto'): number {
  if (unit === 'auto') {
    unit = findBestRelativeTimeUnit(difference);
  }

  const unitValue = relativeTimeFormatUnits.get(unit);
  if (unitValue === undefined) return difference;

  return Math.floor(difference / unitValue);
}

const defaultDateFromOptions: Intl.RelativeTimeFormatOptions = Object.freeze({
  localeMatcher: 'best fit',
  numeric: 'always',
  style: 'narrow',
});

export function getFromDate(
  startDate: DateOrNumber,
  endDate: DateOrNumber,
  unit: RelativeTimeFormatUnit = 'auto',
  options: Intl.RelativeTimeFormatOptions = defaultDateFromOptions,
) {
  const difference = getDateDifference(startDate, endDate);
  const bestUnit = findBestRelativeTimeUnit(difference);
  const unitDifference = getUnitDifference(difference, unit);

  return formatRelativeTime(unitDifference, bestUnit, options);
}

export function getFromNow(
  date: DateOrNumber,
  unit: RelativeTimeFormatUnit = 'auto',
  options: Intl.RelativeTimeFormatOptions = defaultDateFromOptions,
) {
  return getFromDate(date, Date.now(), unit, options);
}
