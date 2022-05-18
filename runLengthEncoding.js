var runLengthEncoding = function(str){
  
    let arr = str.split ('')
    //turning string into an array to run through a loop
    
      let result = []
    //array for the results to push to
    
    for(let i = 0; i< arr.length; i++){
      let toPush = [1,arr[i]]
      while(arr[i]===arr[i+1]){
        toPush[0] = toPush[0]+1
      }
      result.push(toPush)
    }
    
    
  
    
    
    return result
    
    
    //return 
  }