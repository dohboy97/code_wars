function persistence(num) {
    //code me
   let counter = 0
   let prod= num
   console.log()
   
   while(prod>9){
     prod = prod.toString().split('')
     
     for(let i = 0; i<prod.length; i++){
       prod[i] = Number(prod[i])
     }
     
    prod =  prod.reduce((a,b)=> a*b
                 )
     console.log(prod)
     counter++
   }
   return counter
 }