const chooseStations = function (stations) {
  const goodStations = [];
  for (station of stations) {
    if (station[1] >= 20
      && (station[2] === 'school' || station[2] === 'community centre')) {
        goodStations.push(station[0]);
      }
  }
  return goodStations;
}

// Testing with the arguments from the
// problem description:
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));
console.log("If we got Bright Lights and Moose Mountain, we're good.");