function partsSums(ls) {
    
    //starting array input
    let startArray= ls
    
    
    // array for pushing sums
    let sumOfParts = []
    
    //loop that adds array elements t/g with reduce and then pushes them to the new array at the end, and then shifts the first element
    
    for (let i = 0; i < startArray.length; i++){
      
      let sum = startArray.reduce((acc,c) => acc+c,)
      0
      
      sumOfParts.push(sum)
      
    }
    
    
    
  }