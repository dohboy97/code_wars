function spinningRings(innerMax, outerMax) {
    // your code here
    
    //start at 0 for both rings, innerMax and outerMax their respective limits before resetting to 0 
    
    let inner = 0
    
    let outer = 0
    
    let turns = 0 //tracks total turns
    
    while(inner !== outer || turns < 1){
      //conditional that sets rings to 0 after their max
      
      inner <= 0 ? inner = innerMax : inner-=1;
      
      outer >= outerMax ? outer = 0 : outer+=1
      
   
      
      turns++ //keeps track of total turns
    }
    
    
    return turns
}  