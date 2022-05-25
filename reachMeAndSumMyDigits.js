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
     //term counter cannot be greater than nthterm, index counter gets reset to 0 once = patternl.length
    termCounter++
    indexCounter++
  }
  
  //turn the val to an array to then add and return the individually added digits
  let newArr = val.toString().split('').map(Number)
  let sum = 0
  newArr.forEach(element =>{
    sum+=element
  })
  
  return sum
}