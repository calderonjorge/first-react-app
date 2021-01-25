export function calcularTotal(amount, term) {

  let totalAmount;

  if (amount <= 1000) {
    totalAmount = amount * 0.25;
  } else if (amount > 1000 && amount <= 5000) {
    totalAmount = amount * 0.20;
  } else if (amount > 5000 && amount <= 10000) {
    totalAmount = amount * 0.15;
  } else {
    totalAmount = amount * 0.10;
  }

  // Calcular el plazo
  let totalTerm = 0;
  switch (term) {
    case 3:
      totalTerm = amount * 0.05;
      break;
    case 6:
      totalTerm = amount * 0.10;
      break;
    case 12:
      totalTerm = amount * 0.15;
      break;
    case 24:
      totalTerm = amount * 0.20;
      break;
    default:
      break;
  }

  return totalTerm + totalAmount + amount;
}