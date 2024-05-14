function calculadora(chain) {
  if(chain === "")
    return 0;
  else{
    let numbers = chain.split(',');
    let acc = 0;
    if(numbers.length == 1)
      return Number(numbers[0]);
    else
      for(const num of numbers){
        acc = acc + Number(num);
      }    
    return acc;
  }
}

export default calculadora;
