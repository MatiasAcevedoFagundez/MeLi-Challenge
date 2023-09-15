const formatAmount = (amount, currency) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0
    }).format(amount);

export default formatAmount;