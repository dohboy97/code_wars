function bulbMaze(map){
function bulbMaze(map){
  let result = 0;
  if (map[0]!=="o"){   
    for (let i = 0 ; i < map.length; i++){
      if (i%2===0){
        if (map[i]!=="o"){
          result+=1;
        } else {
          result-=1;
        }
      } else {
        if (map[i]!=="x"){
          result+=1;
        } else {
          result-=1;
        }
      }
    }
    if (result === map.length){
      return true;
    } else {
      return false;
    }
  } else {
    return false
  }
  
}
}
