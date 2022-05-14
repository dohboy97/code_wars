function mygcd(x,y){
    //your code here
    let xVal = x
    
    let yVal = y
    
    let forSlowDown 
        
        if(xVal > yVal){
          forSlowDown = xVal/2
        }else{
          forSlowDown = yVal/2
        }
    
    let divisor
    
    for (let i = 1; i < forSlowDown ;i++){ 
      if(x%i === 0 && y%i === 0){
        divisor = i
      }
      
    }
    return divisor
  }