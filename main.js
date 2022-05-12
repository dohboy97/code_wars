function bulbMaze(map){
  //coding and coding..
  
  let arr = map.split('')
  
  
  for(let i=0; i<arr.length; i++){
    if(arr[i] === arr[i+1]){
      return false
    }else if(arr[i] === '' && arr[i-1] === arr[i+1]){
      return false
    }else{
      return true
    }
    
  }
  
}
