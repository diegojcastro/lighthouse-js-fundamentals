const finalPosition = function (moves) {
  let currentPos = [0,0];
  for (let move of moves) {
    switch (move) {
      case 'north':
        currentPos[1] += 1;
        break;
      case 'south':
        currentPos[1] -= 1;
        break;
      case 'east':
        currentPos[0] += 1;
        break;
      case 'west':
        currentPos[0] -= 1;
        break;
    }
  }
  return currentPos;
}

// Test code:

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log("Should be [-1,4]: "+finalPosition(moves));