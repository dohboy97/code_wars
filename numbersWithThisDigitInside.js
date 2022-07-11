function numbersWithDigitInside(x, d) {
  
    let results = []
    let testingArray=[]
    let realResults = []
    
    for(let i = 1; i<=x; i++){
      testingArray.push(i.toString())
    }
    
    for(let i = 0; i<testingArray.length; i++){
      if(testingArray[i].includes(d)){
        results.push(testingArray[i])
      }
    }
    
     console.log(results)
    for(let i = 0; i<results.length; i++){
      results[i]=Number(results[i])
    }
    
    realResults.push(results.length)
    let product = 0;
    let sum = 0
    for(let i = 0; i< results.length; i++){
      sum+= results[i]
    }
    realResults.push(sum)
    
    for(let i = 0; i< results.length;i++){
      if(i === 0){
        product = results[i]
      }else{
        product*= results[i]
      }
    }
    realResults.push(product)
    
   
    return(realResults)
   
  }