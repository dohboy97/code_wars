function cutCancerCells(organism){

    // Cut them!
    
    let arr = organism.split('')
    console.log(arr)
    
    for(let i = 0; i< arr.length; i++){
      if(arr[i] === 'C'){
        if(arr[i-1] !== arr[i-1].toUpperCase()){
          arr.splice(i-1,1)
        }else if (arr[i-1] === 'c'){
          arr.splice(i-1,1)
        }
        arr.splice(i,1)
      }
    }
  console.log(arr)
  }