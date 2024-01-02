class Uber {
  constructor(minFare, costPerKm, costPerMin, distance, time) {
    this.minFare = minFare;
    this.costPerKm = costPerKm;
    this.costPerMin = costPerMin;
    this.distance = distance;
    this.time = time;
  }

  CalculatePrice(distanceKm, timeMinutes) {
    const price =
      this.minFare +
      distanceKm * this.costPerKm +
      timeMinutes * this.costPerMin;
    return price;
  }
}

const Calculator = new Uber(5.0, 1.5, 0.2);

const totalPrice = Calculator.CalculatePrice(30, 50);
console.log(totalPrice.toFixed(2));
