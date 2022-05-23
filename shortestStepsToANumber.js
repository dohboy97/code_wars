function shortestStepsToNum(num) {
  
    //a step can be x+1 or x*2
    
    let x = 1;
    let counter = 0
    
    
    
    while(x < num){
      
      //add one or divide by two
      
      if (x*2 < num){
        x*=2
      }else{
        x+=1
      }
      
      
      //iterate counter
      counter++
    }
    
    
    return counter
  }