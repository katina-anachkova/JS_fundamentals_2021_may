function bitcoin(minedGold) {
    let boughtBitcoin = 0;
    let days = 0;
    let money = 0;
    let firstDay = 0;
    for (let i = 0; i < minedGold.length; i++) {
      days++;
      let gold = minedGold[i];
      if (days % 3 === 0) {
        money += (gold - gold * 0.3) * 67.51;
      } else {
        money += gold * 67.51;
      }
      while (money >= 11949.16) {
        if (firstDay === 0) {
          firstDay = days;
        }
        money -= 11949.16;
        boughtBitcoin++;
      }
    }
    console.log(`Bought bitcoins: ${boughtBitcoin}`);
    if (boughtBitcoin >= 1) {
      console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
  }
bitcoin([3124.15, 504.212, 2511.124])