export const convertNumerToCurrency = (value: number) => (
  `R$ ${Math.floor(value).toFixed(2).toString().replace('.', ',')}`
);
