function duplicates(array){
    //Make the magic happen
      const newArray = array.sort((a,b) => a-b);
      if (newArray.length <= 1) return 0;
      
      let count = 0;
      
      for (let i = 0; i < newArray.length ; i++) {
        if (newArray[i] == newArray[i+1]) {
          count++;
          i++;
        }
      }
      return count;
    }