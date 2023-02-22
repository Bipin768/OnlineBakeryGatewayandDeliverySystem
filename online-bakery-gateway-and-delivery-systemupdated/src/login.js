const phoneNumber = document.getElementById("phone-number")
const password = document.getElementById("password")
let condition = true
let check=()=>{
var n = document.getElementById("phone-number").value

if(n===""){
    // alert("Phone Number is needed!!!")
  
    document.getElementById('user-phonenumber').innerHTML="**Phone Number needed**"

    // phoneNumber.value=""
    return false
   
}
else if(isNaN(n)){
   // alert("Invalid Phone Number")
   document.getElementById('user-phonenumber').innerHTML="**Invalid Phone Number**"

   // phoneNumber.value=""
   return false
}
else if(n.length!=10){
  // alert("please enter valid Number")
  document.getElementById('user-phonenumber').innerHTML="**Please enter valid Phone Number**"

  // phoneNumber.value=""
  return false
  
}else{
    document.getElementById('user-phonenumber').innerHTML=""
}
var pass = document.getElementById("password").value
if(pass.length<3){
    // alert("password length must be greater than 3")
    document.getElementById('user-password').innerHTML="**Password length must be greater than 3**"

    // password.value =""
   return false
   
}else{
    document.getElementById('user-password').innerHTML=""
}
 vel()
}
let vel=()=>{
if(true){
    // console.log("true")
    window.location = "HomePage/home.html"
}
}