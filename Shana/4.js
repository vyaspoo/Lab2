//https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript
function calculate(str) {
//your code here...
 let plusRegex = /plus/gi;
  let minusRegex = /minus/gi;
  
  let addOperators = str.replace(plusRegex, '+').replace(minusRegex, '-');

  return String(eval(addOperators));  

}