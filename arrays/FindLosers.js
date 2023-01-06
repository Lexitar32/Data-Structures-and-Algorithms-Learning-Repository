function Losers(matches) {
    let loserMap = {};
    let resultArray = [[], []];
  
    for (let [winner, loser] of matches) {
      loserMap[winner] = (loserMap[winner] || 0);
      loserMap[loser] = (loserMap[loser] || 0) + 1;
    }
  
    for (let player in loserMap) {
      if (loserMap[player] === 0) resultArray[0].push(player);
      else if (loserMap[player] === 1) resultArray[1].push(player);
    }
  
    return resultArray;
  }
  
  console.log(findWinners([[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]))