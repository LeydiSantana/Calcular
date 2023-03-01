function daysInBudget(budget, hourlyRate) {
    const hoursPerDay = 8; // asumiendo una jornada laboral de 8 horas al día
    const dailyRate = hourlyRate * hoursPerDay; // tarifa diaria
    const days = Math.floor(budget / dailyRate); // número de días de trabajo
    return days;
  }
  
  console.log(daysInBudget(20000, 89)); // salida: 28
  