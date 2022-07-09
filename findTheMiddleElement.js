function gimme (triplet) {
  
    let organizedTriplet=[]
    
      for(let i = 0; i<triplet.length; i++){
        organizedTriplet.push(triplet[i])
      }
      organizedTriplet.sort(function(a,b){return a - b})
      
    
    let midVal = organizedTriplet[1]
    
    
    
    for(let i = 0; i < 3; i++){
      if(midVal === triplet[i]){
        return i
      }
    }
      
    }