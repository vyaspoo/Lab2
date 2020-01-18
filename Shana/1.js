//https://www.codewars.com/kata/59811fd8a070625d4c000013/train/javascript
function integrate(coefficient, exponent) {
    let addit = "x^"
  let end = exponent + 1;
  let begin = coefficient/end;
  return begin+addit+end
}