enterNum1.value = ""
enterNum2.value = ""

btnMult.onclick=function(){
  let output1 = (num1 * num2)
  Label2.value = (`${output1}`)
}

btnAdd.onclick=function(){
  let output2 = (num1 + num2)
  Label3.value = (`${output2}`)
}

btnClr.onclick=function(){
  let output3 = (num1 - num2)
  Label4.value = (`${output3}`)
}
