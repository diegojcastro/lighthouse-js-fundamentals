const carPassing = function (cars, speed) {
  let newCar = {
    time: Date.now(),
    newSpeed: speed
  };
  cars.push(newCar);
  return cars;
}