function mygcd(x,y){
    //your code here
    let xVal = x
    
    let yVal = y
    let divisor
    
    for (let i = 1; i < x+y ;i++){ 
      if(x%i === 0 && y%i === 0){
        divisor = i
      }
      
    }
    return divisor
  }