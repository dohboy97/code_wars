function encode(str,  n)
{
  //letter to numeric value


  
  let strToArr = str.split('')
  
  let answer = []
  
  answer = strToArr.map(element =>{
   letter = element
    let numero = (letter == letter.toLowerCase()) ? 96 : 64
return letter.charCodeAt(0) - numero

  })
  console.log(answer)
}
