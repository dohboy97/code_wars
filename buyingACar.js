function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    //your code here
    
    let oldCarVal = startPriceOld
    let newCarVal = startPriceNew
    let percentLoss = percentLossByMonth
    let monthCounter = 0
    let savings = 0
    let arr = [0,0]
    // loop for while savings < price of new car
    
    while(savings < newCarVal - oldCarVal){
      if(monthCounter % 2 === 0){
        percentLoss += .5
      }
      savings+= savingperMonth
      oldCarVal = oldCarVal - (oldCarVal * percentLoss)
      newCarVal = newCarVal - (newCarVal * percentLoss)
      monthCounter++
      arr[0]=monthCounter
        arr[1]= savings - (newCarVal - oldCarVal)
    }
    return arr
  }