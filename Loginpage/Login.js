
import footer from "../shubham1/footer1.js"; 
import { nav, time} from "../navbar/components/nav.js"
document.getElementById("navbar").innerHTML=nav()

document.getElementById('footer').innerHTML = footer();
var flag = false;
console.log(footer());

function userlogin(event){
event.preventDefault();
console.log("click")
window.location.href = '.././index.html'
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
