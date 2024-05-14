function calculadora(chain) {
  if(chain === "")
    return 0;
  else{
    let numbers = chain.split(',');
    let acc = 0;
    if(numbers.length == 1)
      return Number(numbers[0]);
    else
      acc = acc + Number(numbers[0]) + Number(numbers[1]);
    return acc;
  }
}

export default calculadora;
