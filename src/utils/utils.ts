export const formatDecimal: (value: number) => number = (value) => {
  return Math.round(value * 10) / 10;
};

export const formatToLargeNumber: (value: number) => string = (value) => {
  return new Intl.NumberFormat().format(value);
};
