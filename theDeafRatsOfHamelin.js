var countDeafRats = function(town) {
    // Your code here
    
    //split into an array, then test to see if each tilde on either side of the P is going in the right decision, keep track w/counter
    
    let badRats = 0
    
    let arr = town.split('')
    
   
    //two loops after findindexof p?
    
    let index = arr.findIndex(element => element === 'P')
    
    for(let i = index; i<arr.length;i++){
      if(arr[i] === 'O' && arr[i-1]=== '~'){
        badRats++
      }
    }
      for(let i = index; i>=0;i--){
      if(arr[i] === 'O' && arr[i+1]=== '~'){
        badRats++
    }
  }
    
    return badRats;
  }