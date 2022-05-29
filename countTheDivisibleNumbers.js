function divisibleCount(x, y, k) {
    //code me
   
   let counter = 0
   
   for(let i = x; i <=y; i++){
     if(i%k === 0){
       counter++
     }
   }
   
   return counter
   // for loop of nums from x to y
   
   //if (i%k === 0) {counter++}
   
 }
 