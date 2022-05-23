function shortestStepsToNum(num) {
  
    //a step can be x+1 or x*2
    
    let x = num;
    let counter = 0
    
    
    
    while(x > 1){
      
      //actually need to go backwards from num to find quickest solution. div by 2 if modulous === 0, subtract 1 if not
      
      if (x%2===0){
        x/=2
      }else{
        x-=1
      }
  
      
      //iterate counter
      counter++
    }
    
    
    return counter
  }