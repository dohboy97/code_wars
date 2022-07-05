function correctTail(bod, tail){
  

   
    let bodToArray = bod.split('')
    
    console.log(bodToArray)
   
   let lastIndex = bodToArray.length
   
   
     
     if (bodToArray[lastIndex-1] === tail) {
       return true
     }
     else 
       return false
 }  
   