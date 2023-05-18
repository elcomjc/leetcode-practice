const equalFrequency = (word: String): boolean => {
  const dict: { [key: string]: number } = {};
  for(let i=0; i < word.length; i++) {
      const char = word[i];
      if(dict[char]) {
          dict[char]++ 
      }
      else{
          dict[char] = 1
      }
  }
  const countGroup: { [key: number]: number } = {}; 
  for (let key in dict) {
      if (countGroup[dict[key]]) {
          countGroup[dict[key]]++
      }
      else{
          countGroup[dict[key]] = 1 
      }
  }
  // si tenemos > 2 grupos de cantidades es false
  if(Object.keys(countGroup).length > 2){
      return false
  }
  // si tiene 2 grupos y la diferencia es uno true sino false
  if(Object.keys(countGroup).length == 2){
    const group1: number = +Object.keys(countGroup)[0];
    const group2: number = +Object.keys(countGroup)[1];
    return Math.abs(group1 - group2) === 1;
  }
  // si tiene un solo grupo es false
  if(1 in countGroup) {
      return true;
  }
  return false
};

export default equalFrequency;
