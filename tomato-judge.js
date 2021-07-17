const judgeVegetable = function (vegetables, metric) {
  let currentWinnerIndex;
  let currentWinnerValue = 0;
  vegetables.forEach( function(entry, index) {
    if (entry[metric] > currentWinnerValue) {
      currentWinnerValue = entry[metric];
      currentWinnerIndex = index;
    }
  })
  return vegetables[currentWinnerIndex].submitter;
}

// Test
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric) + '?= Old Man Franklin');