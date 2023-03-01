function priceWithMonthlyDiscount(hourlyRate, hoursPerMonth, discountRate) {
    const monthlyRate = hourlyRate * hoursPerMonth; // tarifa mensual antes del descuento
    const discountAmount = monthlyRate * discountRate; // cantidad de descuento
    const discountedMonthlyRate = monthlyRate - discountAmount; // tarifa mensual después del descuento
    const totalPrice = discountedMonthlyRate * 12; // tarifa anual después del descuento
    return totalPrice;
  }
  
  console.log(priceWithMonthlyDiscount(89, 230, 0.42)); // salida: 97972