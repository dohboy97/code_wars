function calc(x){

    // use .charCodeAt()
    
    let total1 = ''
    
    let total2 = []
    
    //use a for loop that adds the ascii codes to total 1
    
    for(let i = 0; i < x.length; i++){
      total1+= x.charCodeAt(i)
    }
    
    
    //then turn the string into an array
    total1 = total1.split('')
    
    //then run a for loop replacing each incidence of 7 in the array with 1 in a second variable, total2
    for(let i = 0; i<total1.length; i++){
      if (total1[i] === '7'){
        total2.push('1')
      }else{
        total2.push(total1[i])
      }
    }
    
    console.log(total1)
    console.log(total2)
    
    //then return the difference between the sum of their digits
    
    let sum1 = 0
    let sum2=0
    
    total1.forEach(element =>{
      sum1 += Number(element)
    })
    total2.forEach(element =>{
      sum2 += Number(element)
    })
    return sum1-sum2
  }