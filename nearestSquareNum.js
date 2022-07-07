function nearestSq(n){
    // your code
  let closestHighSq = n
  let closestLowSq = n
  
  while(Number.isInteger(Math.sqrt(closestHighSq))===false) {
    closestHighSq +=1
  }
  
 while(Number.isInteger(Math.sqrt(closestLowSq))===false) {
    closestLowSq -=1
  }
  
  if(closestHighSq-n > n-closestLowSq){
    return closestLowSq
  }else{
    return closestHighSq
  }
  
}