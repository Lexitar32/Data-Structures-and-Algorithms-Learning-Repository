function getRevenue(purchases) {
  let revenue = 0;
  let purchaseMap = {};

  for (let purchase of purchases) {
    let [date, item] = purchase.split(",");

    if (purchaseMap[date]) {
      purchaseMap[date][item] = purchaseMap[date][item]
        ? purchaseMap[date][item] + 1
        : 1;
    } else {
      purchaseMap[date] = { [item]: 1 };
    }
  }

  for (let date in purchaseMap) {
    let items = purchaseMap[date];
    let cokeCount = items.coke || 0;
    let chipsCount = items.chips || 0;
    let bundleCount = Math.min(cokeCount, chipsCount);
    revenue +=
      bundleCount * 9 +
      (cokeCount - bundleCount) * 7 +
      (chipsCount - bundleCount) * 2.5;
  }

  return revenue;
}

getRevenue(["2022-06-01,chips", "2022-06-01,coke"]);
