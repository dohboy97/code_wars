function takeWhile (arr, pred) {
    function takeWhile (arr, pred) {
  
        let results = []
        let switchFlip = true
        //loop - while arr[i] satisfies the predicate, push to a new array
        
       for(let i = 0; i<arr.length; i++){
         if(switchFlip === true){
           if(pred(arr[i])){
             results.push(arr[i])
           }else{
             switchFlip=false
           }
         }
         
       }
        return results
      }
  }