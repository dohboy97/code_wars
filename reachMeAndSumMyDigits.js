function sumDigNthTerm(initval, patternl, nthterm) {
    // your code
  
  let val = initval 
  let indexCounter = 0
  let termCounter = 1
  //create a loop that runs until the incrementer is equal to the length of nth term
  
  while(termCounter < nthterm){
    if(indexCounter === patternl.length){
      indexCounter = 0
    }
    
    val+= patternl[indexCounter]
    
    termCounter++
    indexCounter++
  }
  
  //term counter cannot be greater than nthterm, index counter gets reset to 0 once = patternl.length
  console.log(val)

  //stringify the value at nth term in order to return the sum
  
}