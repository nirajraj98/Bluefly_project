function getdetail(fname,lname,email,password){
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password
}



function userdetail(event){
    event.preventDefault();

    let datacollect = JSON.parse(localStorage.getItem("data")) || [];
    let form = document.getElementById("forms")

    let fname = form.fname.value;
    console.log(fname)
    let lname = form.lname.value;
    console.log(lname)
    let email = form.email.value;
    let password = form.password.value;

    let userdata = new getdetail(fname,lname,email,password);
     
    datacollect.push(userdata);
    localStorage.setItem("data",JSON.stringify(  datacollect));
    window.location.href = '../Loginpage/Login.html'
}