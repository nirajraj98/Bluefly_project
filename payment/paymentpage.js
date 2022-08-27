


function myvalue(){
    if(document.querySelector(".tickguest").checked && document.querySelector(".emailenter").value.endsWith("@gmail.com")){
        document.querySelector(".step1").setAttribute("id","step1hidden")
        document.querySelector(".step2").setAttribute("id","step2content")
    }
    else if(document.querySelector(".tickemail").checked && document.querySelector(".enterpassword").value.replace(/\s/g,"")){
        document.querySelector(".step1").setAttribute("id","step1hidden")
        document.querySelector(".step2").setAttribute("id","step2content")
    }
    else{
        alert("Please Enter Valid detail")
    }
}

function myvalue2(){
    if((document.querySelector(".namevalue").value.replace(/\s/g,""))  && 
    (document.querySelector(".lastvalue").value.replace(/\s/g,"")) &&
    (document.querySelector(".arrdessvalue").value.replace(/\s/g,"")) &&
    (document.querySelector(".landmarkvalue").value.replace(/\s/g,""))){
        if(document.querySelector(".zipcodevalue").value.length==6){
            if(document.querySelector(".selectcountry").value=="India"){
                if(document.querySelector(".selectstate").value=="Maharashtra"){
                    if(document.querySelector(".selectstate").value=="Maharashtra"){
                        if((document.querySelector(".selectcity").value=="Akola") ||
                        (document.querySelector(".selectcity").value=="Mumbai") ||
                        (document.querySelector(".selectcity").value=="Nagpur") ||
                        (document.querySelector(".selectcity").value=="Pune")){
                            if(document.querySelector(".numwidth1cc").value.length==2 &&
                            document.querySelector(".numwidth1").value.length>=6){
                                if(document.querySelector(".numwidth2").value.length>=6){
                                    console.log("here")    
                                    document.querySelector(".step2").setAttribute("id","step2hidden")
                                    document.querySelector(".step3").setAttribute("id","step3content")
                                }
                                else{
                                    alert("Please Enter Valid Number")
                                }
                            }
                            else{
                                alert("Please Enter Valid Number")
                            }
                        }
                        else{
                            alert("Please Select City Name")
                        }
                    }
                    else{
                        alert("Please Select State Name")
                    }
                }
                else{
                    alert("Please Select State Name")
                }
            }
            else{
                alert("Please Select Country Name")
            }
        }
        else{
            alert("Please Enter Valid Pincode")
        }
    }
    else{
        alert("Please Enter Valid detail")
    }
}



function myvalue3(){
    document.querySelector(".step3").setAttribute("id","step3hidden")
    document.querySelector(".step4").setAttribute("id","step4content")
}


function myvalue4(){
    if(document.querySelector(".avaopt").value=="cod"){
        alert("Order Successful");
        localStorage.removeItem("discount")
        localStorage.removeItem("shoppingCart")
        window.location.href="./cricketProducts.html"
    }
    else if(document.querySelector(".avaopt").value=="cc" || document.querySelector(".avaopt").value=="dc"){
        alert("Currently Card Service is not availaible")
    }
    else{
        alert("Please Select Option")
    }
}



// ritesh js

var arr = JSON.parse(localStorage.getItem("shoppingCart"))
var arr2 = JSON.parse(localStorage.getItem("discount"))

console.log(arr);



// function show(){
//     var k = document.getElementById('discount')
//     var l = document.getElementById('sec')
//     var m = document.getElementById('for')
//     var n = document.getElementById('thr')

// }

var m = document.getElementById('tamount');
var l = document.getElementById('edcAmount');
var j = document.getElementById('gstAmount');
var w = document.getElementById('tcAmount');






function addedtocart(arr){
    console.log(arr);
    var dis= document.getElementById('hidden');
    var loc = document.getElementById('loc');
    var front = document.getElementById('front1');
    var got = document.getElementById('got');
    var got1 = document.getElementById('got1');
    var gtotal=0;
    var count = 0;
    var newData = document.getElementById("why")
    newData.textContent = "";
    if(arr.length <= 0){
        dis.style.display="none"
        loc.style.display="none"
        front.style.display="none"
        got.style.display="none"
        got1.style.display="none"
    }
    
    

   

    arr?.map(function(ele,ind){


        var pDiv = document.createElement("div")
        var pDiv2 = document.createElement("div")
        var image = document.createElement('img')
        image.src = ele.image;
        image.setAttribute("class","newImage")
        pDiv2.append(image, ele.product_name)
        pDiv.append(pDiv2)
        pDiv.setAttribute("class","flexBox")
        pDiv2.setAttribute("class","randommarginFlex")                

        // console.log(ele)
        // productName.append(pDiv)

        var uDiv = document.createElement("div")
        var uDiv2 = document.createElement("div")
        uDiv.setAttribute("class","randomO")
        uDiv2.append(ele.product_price)
        uDiv.append(uDiv2)
        uDiv2.setAttribute("class","randommargin")                
        // console.log(ele)
        // unitPrice.append(uDiv)

        var qDiv = document.createElement("div")
        var qDiv2 = document.createElement("div")
        var newDiv=document.createElement("div")
        newDiv.setAttribute("class","size3")
        newDiv.textContent=ele.quantity;
        var nbtn=document.createElement("button")
        nbtn.textContent="-"
        nbtn.setAttribute("class","size")
        qDiv.setAttribute("class","randomT")
        var pbtn=document.createElement("button")
        pbtn.textContent="+"
        pbtn.setAttribute("class","size1")
        
        
        pbtn.setAttribute("onclick",`increment(${ele.quantity}, ${ind})`)
        nbtn.setAttribute("onclick",`decrement(${ele.quantity}, ${ind})`)
        qDiv2.append(nbtn,newDiv,pbtn)
        qDiv.append(qDiv2)

        qDiv.append(qDiv2)
        qDiv2.setAttribute("class","randommargin size2")                
        count += ele.quantity;
        // console.log(ele)
        // Quantity.append(qDiv)

        var tDiv = document.createElement("div")
        var tDiv2 = document.createElement("div")
        tDiv.setAttribute("class","randomTh")
        var tot = `${ele.quantity * ele.product_price}`
        gtotal+= +tot
        tDiv2.innerHTML = tot
        tDiv.append(tDiv2)
        tDiv2.setAttribute("class","randommargin")                
       // console.log(tDiv)
        // total.append(tDiv)

        var dDiv = document.createElement("div")
        var dDiv2 = document.createElement("div")
        dDiv.setAttribute("class","randomF")

        dDiv2.append(ele.product_price)
        dDiv.append(dDiv2)
        dDiv2.setAttribute("class","randommargin")                
        // console.log(ele)
        // discount.append(dDiv)

        var rDiv = document.createElement("div")
        var rDiv2 = document.createElement("div")
        rDiv.setAttribute("class","randomFi")

        var btn = document.createElement("button")
        btn.innerHTML="x";
        btn.setAttribute("class","clear")
        btn.style.color="red";
        rDiv2.append(btn)
        rDiv.append(rDiv2)
        rDiv2.setAttribute("class","randommargin")                
        btn.setAttribute("onclick",`remove(${ind})`)
        // remove.append(rDiv)


        var Div = document.createElement("div")

        Div.append(pDiv,uDiv, qDiv, tDiv, rDiv);
        newData.append(Div)
        Div.setAttribute("class","newData1")

        
    })
    total(gtotal)

}
addedtocart(arr);

function remove(ind){
arr.splice(ind, 1)
// event.target.parentNode.remove();
console.log(arr)
localStorage.setItem("shoppingCart",JSON.stringify(arr));
addedtocart(arr);
}

function increment(qty,ind){
var d = arr[ind].quantity++;
arr[ind].quantity.innerHTML = d;
localStorage.setItem("shoppingCart",JSON.stringify(arr));
addedtocart(arr);
}

function decrement(qty,ind){
    var dis= document.getElementById('hidden');
    var loc = document.getElementById('loc');
    var front = document.getElementById('front1');
    var got = document.getElementById('got');
    var got1 = document.getElementById('got1');
    if(qty > 1){
    var d = arr[ind].quantity--;
    arr[ind].quantity.innerHTML = d;
    localStorage.setItem("shoppingCart",JSON.stringify(arr));
    addedtocart(arr);
    }
    else if(qty <= 1){
        remove(ind)
        loc.style.display="none"
        front.style.display="none"
        got.style.display="none"
        got1.style.display="none"
    }
    // else if(qty == 0){
    // }
}
function total(gtotal){
var apply = document.getElementById('apply');
m.innerHTML = "₹"+gtotal;
j.innerHTML = "₹"+(gtotal*12)/100 ;

if(gtotal > 500){
    l.innerHTML = "₹"+0;
    var f =  (gtotal + (gtotal*12)/100);
    w.innerHTML="₹"+ (f.toFixed(2))

    apply.onclick= function(){

        // var x=document.getElementsByClassName("clickn")
        var code=document.getElementById("coupen").value;
    var f = (gtotal + (gtotal*12)/100);
    if(code=="masai10"){
        var x=(f - (f*10)/100);
        w.innerHTML = "₹"+ (x.toFixed(2));
    
    }
    else{
        alert("Please Enter Valid Coupen Code")
    }
}
}
else{
    l.innerHTML = "₹"+60;
    w.innerHTML = "₹"+ (gtotal + (gtotal*12)/100 + 60);
    apply.onclick= function(){

        // var x=document.getElementsByClassName("clickn")
        var code=document.getElementById("coupen").value;
    var f = (gtotal + (gtotal*12)/100+60) ;
    if(code=="masai10"){
        var x=(f - (f*10)/100);
        w.innerHTML = "₹"+ (x.toFixed(2));
    
    }
    else{
        alert("Please Enter Valid Coupen Code");
    }
}
    
}
}
var front = document.getElementById('front1');
var got = document.getElementById('got');
var got1 = document.getElementById('got1');
var applied = document.getElementById('applied');
if(arr2 != null){
    front.style.display="none"
    got.style.display="none"
    got1.style.display="none"
    applied.style.display="inherit"
    w.innerHTML = "₹"+ (arr2);
}

// ritesh js end