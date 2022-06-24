/*  Función para formatear los precios.*/

export const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat(currency).format(amount);
};
