let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnName.onclick=function(){
  let names = Input1.value
  members.push(names)
  console.log(members)
  alert(`${names} you are a member!`)
}
btnEnter.onclick=function(){
    let names = Input1.value
  alert(`${names} you are NOT a member!`)
}
