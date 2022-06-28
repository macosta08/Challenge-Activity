import { formatCurrency } from '../utils/formatter';

describe('Prueba de formatCurrency  en /utils/formatter', () => {
  test('formatCurrency debe retornar un string con numero formateado', () => {
    const number = 123456.789;
    const currency = 'de-DE';
    expect(formatCurrency(number, currency)).toBe('123.456,789');
  });
});
