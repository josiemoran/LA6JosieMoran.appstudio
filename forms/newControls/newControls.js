Switch1.onclick=function(){
    lblSwitch.Value = "You hit the switch"
}
  
Dropdown1.onclick=function(){
  if (typeof(s) == "object") {
        return
    }
    NSB.MsgBox(s + " " + Dropdown1.selection)
}

Checkbox1.onchange=function(){
  NSB.MsgBox("One is " + CheckBox1.getValue(1) + '\n' + "Two is " + CheckBox1.getValue(2))
}

Hamburger1.onclick=function(){
   if (typeof(s) == "object") {
        return;
    }
    if (s === "Sign Out") {
        Hamburger1.hide();
        butSignIn.show();
    }
    if (s === "Change Password") {
        // todo
    }
    if (s === "Change Email") {
        // todo
    }
    if (s === "Delete Account") {
        // todo
    }
}

