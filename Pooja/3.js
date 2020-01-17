//https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript
function addLetters(...letters) {
  // your code here
  var num = 0;
  if(letters.length === 0){
  return 'z';
  }
  else{
  [...letters].forEach(e=> num += e.charCodeAt() - 96);
  
for (i = 0 ; i < 10; i++){
if(num > 26 * i && num <= 26 * (i+1)){
return String.fromCharCode((num + 96) - 26* i);
}
}
}
}
