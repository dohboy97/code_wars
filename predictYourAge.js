function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // your code
    
    let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
    
    arr = arr.map(x=>x*x)
    
   let sum = arr.reduce((a,b)=>a+b,
    0
   )
    
    console.log(sum)
    sum= Math.sqrt(sum)
    
    return Math.floor(sum/2)
    
  }