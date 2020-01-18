//https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript
function minMinMax(array) {
  // solution goes here!
   var min = Math.min(...array);
  while (array.includes(min)) min++;
  
  return [Math.min(...array), min,Math.max(...array)];
}