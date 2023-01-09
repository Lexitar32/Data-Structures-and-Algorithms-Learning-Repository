function bestTimeToSellAStock(prices) {
    // Question Breakdown
    // prices array - prices[i] is the price of a given stock on the ith day.
    // I want to maximize profit by choosing a day to buy and sell stock.
    // return the maximum profit from the transaction. if there is no profit, return 0.
    // Profit -> Sell - buy difference.
  
    // Set up variables to track the max profit we've seen (init at 0),
    // the left pointer (init at day 0)
    // and the right pointer (init at day 1, since we can't buy/sell on the same day)
    let max = 0
    let left = 0
    let right = 1
  
    // Keep incrementing the right pointer until we hit the end of the prices array.
    while (right < prices.length) {
  
      // The profit on any given day is the difference between the sell date (represented by right pointer)
      // and buy date (represented by the left pointer)
      const profit = prices[right] - prices[left]
  
      // If we can get a profit higher than we've seen before, set it as our maximum,
      // and we'll keep going.
      if (profit > max) {
        max = profit
      }
  
      // If today would be a loss, it means two things: 
      // 1. We don't have a new maximum.
      // 2. We just found a day on which we could buy at a lower price than before, so we should buy now.
      // 
      // The implication of point two is that we move our left pointer (again, as a sliding window) to be the current day,
      // as represented by the right pointer.
      if (profit < 0) {
        left = right
      }
  
      // Increment the right pointer to keep searching.
      right += 1
    }
  
    // This will return 0 if we had no possible profit, since we initialized at 0,
    // or the maximum profit possible.
    return max
  }
  
  console.log(bestTimeToSellAStock([7, 1, 5, 3, 6, 8]))
  