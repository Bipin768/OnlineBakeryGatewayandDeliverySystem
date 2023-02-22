const phoneNumber = document.getElementById("phone-number")
const password = document.getElementById("password")
let condition = true
let check=()=>{
var name = document.getElementById("full-name").value
// let bool = true
if(name.length<3){
    document.getElementById('username').innerHTML="**Length of full name must be greater than 3**"
    // name.value =""
    return false
}else{
    document.getElementById('username').innerHTML=""

}
var email = document.getElementById("email").value
if(email.length<6){
    // alert("Phone Number is needed!!!")
    document.getElementById('user-email').innerHTML="**length of email must be greater than 6**"

    // phoneNumber.value=""
    return false
}else{
        document.getElementById('user-email').innerHTML=""
}

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

var copass = document.getElementById("Confirm-password").value
if(copass != pass){
    // alert("password length must be greater than 3")
    document.getElementById('user-confirm-password').innerHTML="**Password doesnot match**"

    // password.value =""
   return false
}else{
    document.getElementById('user-confirm-password').innerHTML=""
}

regvel()
// if(bool=true){
//     window.location = "login.html"
// }
}
let regvel=()=>{
    
    if(true){
            window.location = "login.html"
        }
}