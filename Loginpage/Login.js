
// import footer from "../shubham1/footer1.js"; 
// import { nav, time} from "../navbar/components/nav.js"
// document.getElementById("navbar").innerHTML=nav()

document.getElementById('footer').innerHTML = footer();
var flag = false;
// console.log(footer());

function userlogin(event){
//  window.location.href = '.././index.html'
event.preventDefault();
console.log("click")
let form = document.getElementById("forms1")

let emaillogin = form.emaillogin.value;
let passwordlogin = form.passwordlogin.value;
// console.log(email);

let empty_data = JSON.parse(localStorage.getItem("data")) || [];

empty_data.map(function(elem){

    if(emaillogin === elem.email && passwordlogin ===  elem.password)
    {
        flag = true;
        alert("Login successful")
        window.location.href = '.././index.html'
}
})
if(flag === false)
{
    alert("Wrong email & password")

} 
   
}
