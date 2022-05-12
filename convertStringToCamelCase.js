function toCamelCase(str){
  
    let arr = str.split('')
    
  
    
    for(let i = 0;i<arr.length;i++){
      if(arr[i] === '_' || arr[i] === '-'){
        let upper = arr[i+1].toUpperCase()
        arr.splice(i+1,1,upper)
        arr.splice(i,1)
      }
    }
    
    return arr.join('')
  
  }