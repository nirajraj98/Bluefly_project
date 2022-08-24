var flag = false;

function userlogin(event){
event.preventDefault();
console.log("click")

 
let form = document.getElementById("forms1")

let email = form.email.value;
let password = form.password.value;

let empty_data = JSON.parse(localStorage.getItem("data")) || [];

empty_data.map(function(elem){
    if(email === elem.email && password ===  elem.password)
{
    flag = true;
    alert("Login successful")
}
})
if(flag === false)
{
    alert("Wrong email & password")

} 
   
}
