function encode(str,  n)
{
  //letter to numeric value

  let nArray = n.toString().split('')
  let nCounter = 0
  nArray = nArray.map(element =>{
   return Number(element)
  })
  
  
  let strToArr = str.split('')
  
  let answer = []
  
  answer = strToArr.map(element =>{
   letter = element
    let numero = (letter == letter.toLowerCase()) ? 96 : 64
return letter.charCodeAt(0) - numero

  })
  
  for(let i = 0; i< answer.length; i++){
   if( nCounter < nArray.length) {
     answer[i]+=nArray[nCounter]
     nCounter++
     }else{
       nCounter = 0
       answer[i]+=nArray[nCounter]
     nCounter++
     }
  }
  return answer
}
