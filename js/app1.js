function getupdate(product, prach, incriment){
  const firstInput = document.getElementById(product +'-number')
  let fristNumber = firstInput.value;
  if(incriment == true){
    fristNumber = parseInt(fristNumber) + 1;
  }
  else if(fristNumber > 0){
    fristNumber = parseInt(fristNumber) - 1;
  }
  firstInput.value = fristNumber;
  // update total amound
  const phoneTotal = document.getElementById(product +'-total');
  phoneTotal.innerText = fristNumber * prach;
  // 
  getvalue();
}
// phone
document.getElementById('phone-plus').addEventListener('click',function(){
  getupdate('phone', 1219, true)
});
document.getElementById('phone-minus').addEventListener('click',function(){
  getupdate('phone', 1219, false)
});
// case
document.getElementById('case-plus').addEventListener('click',function(){
  getupdate('case', 59, true)
});
document.getElementById('case-minus').addEventListener('click',function(){
  getupdate('case', 59, false)
});
// total
function getTotal(product){
  const productInput = document.getElementById(product +"-number");
  const productValue = parseInt(productInput.value);
  return productValue;
}
function getvalue(){
  const phoneInput = getTotal('phone') * 1219;
  const caseValue = getTotal('case') * 59;
  const subTotal = phoneInput + caseValue;
  const tex = subTotal / 10;
  const totalPrice = subTotal + tex;
  // 
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tex;
  document.getElementById('total-price').innerText = totalPrice;
}