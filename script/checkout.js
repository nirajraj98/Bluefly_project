// import { nav, time} from "../navbar/components/nav.js"
// import footer from "../shubham1/footer1.js"

// document.getElementById("footer").innerHTML = footer()
// document.getElementById("navbar").innerHTML=nav()


var show=JSON.parse(localStorage.getItem("arr"));
// console.log(show)


var smallimg=document.getElementById("smallimg")
var largeimg=document.getElementById("largeimg")
var small=document.querySelectorAll(".small")
// var roundimg=document.getElementById("roundimg");
// roundimg.src=show.imageurl;

// console.log(largeimg)
smallimg.innerHTML="";
function display_image(show) {
 
show.forEach(function (el, index) {
    //mig image
    var img=document.createElement("img");
    img.src=el.img;
    img.style.width = '100%';
    largeimg.append(img)
    //end
    
//show three images in side div
    var img1=document.createElement("img");
    img1.className="small";
    img1.src=el.img1
    img1.addEventListener("click",function(){
         deta(el.img1)
    })
    var img2=document.createElement("img");
    img2.className="small";

    img2.src=el.img2
    img2.addEventListener("click",function(){
        deta(el.img2)
   })
    
   var img3=document.createElement("img");
   img3.className="small";

    img3.src=el.img3
    img3.addEventListener("click",function(){
        deta(el.img3)
   })
    
    smallimg.append(img1,img2,img3)
    
})

}
display_image(show)


//small  to large

function deta(el){
var poo=document.createElement("img");
poo.src=el
poo.style.width="100%"
largeimg.innerHTML="";
largeimg.append(poo)
console.log(largeimg)
}

