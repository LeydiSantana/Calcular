function dayRate(hourlyRate) {
    const hoursPerDay = 8; //asumiendo una jornada laboral de 8 horas al día
    const dailyRate = hourlyRate * hoursPerDay;
    return dailyRate;
  }
  
  console.log(dayRate(89)); // salida: 712