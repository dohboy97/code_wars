function queueTime(customers, n) {
    //TODO
    let toReduce = customers
    let mostTime=0
    let result = 0
    let sum = 0
    for(let i = 0; i<customers.length;i++){
      if(customers[i]>mostTime){
        mostTime = customers[i]
      }
    }
    if(customers.length === 0){
      return 0
    }
    
    
    
    if(customers.length>=n){
     sum = toReduce.reduce((prev,curr) => prev + curr, 0
      )
      return sum/n
    }else{
      return mostTime
    }
    
  }