function calculator(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b !== 0 ? a / b : "ნულზე გაყოფა არ შეიძლება";
      case '**':
        return a ** b;
      case '%':
        return b !== 0 ? a % b : "ნულზე გაყოფა არ შეიძლება";
      default:
        return "არასწორი ოპერატორი";
    }
  }
  

  console.log(calculator(10, 5, '+'));   
  console.log(calculator(10, 5, '-'));   
  console.log(calculator(10, 5, '*'));   
  console.log(calculator(10, 5, '/'));   
  console.log(calculator(2, 3, '**'));   
  console.log(calculator(10, 3, '%'));   
  console.log(calculator(10, 0, '/')); 