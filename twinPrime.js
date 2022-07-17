function isTwinPrime(n){
    let twin =true
    for(let i = 2; i<n;i++){
      if(n%i === 0){
        return false
      }
    }
    for(let i = 2; i<n-2;i++){
      if(n-2%i === 0){
        twin = false
      }
    }
    if(twin === true){
      return true
    }
    for(let i = 2; i<n+2;i++){
      if(n+2%i === 0){
        twin = false
      }
    }
    if(twin === true){
      return true
    }
  }