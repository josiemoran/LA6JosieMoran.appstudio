btnAdd.onclick=function(){
   lblResult.textContent = `The sum of ${inpNum1.value} and ${inpNum2.value} is ${Number(inpNum1.value)+Number(inpNum2.value)}`
   inpNum1.value = ''
   inpNum2.value = ''
}


btnMultiply.onclick=function(){
     lblResult.textContent = `The multiplication of ${inpNum1.value} and ${inpNum2.value} is ${Number(inpNum1.value)*Number(inpNum2.value)}`
     enterNum1.value = ''
     enterNum2.value = ''
}
btnClear.onclick=function(){
  enterNum1.value = ''
  enterNum2.value = ''
  lblResult.textContent = ''
}