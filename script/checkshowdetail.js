import { disp, Niraj } from "../component/importSide.js";

// var cartData = JSON.parse(localStorage.getItem("masai-cart")) || [];
let muskan = document.querySelector("#pro");

let dropdown = document.querySelector("#mo");
document.getElementById("close").onclick = () => {
  dropdown.style.display = "none";
};



var show=JSON.parse(localStorage.getItem("arr")) || [];
// console.log(show)


function append(show){
   show.forEach(function(el){

       
           let title=document.getElementById("checkout_image_detail_title");
           let titleh3=document.createElement("h3")
           titleh3.setAttribute("id","titleh3_id") 
           titleh3.innerText=el.title
           let titlediv=document.createElement('div');
           titlediv.setAttribute('class',"titlediv_append")
           let p=document.createElement("p")
           p.innerText="$"+el.price
           let p1=document.createElement("p")
           p1.innerText=el.save;
           p1.style.color="red"
           let p2=document.createElement("del")
           p2.innerText="$"+el.dis
           let hr1=document.createElement("hr")
            titlediv.append(p2,p,p1)
           let fixed=document.createElement("h3");
           fixed.innerText="FREE SHIPPING ON ORDERS OVER $99"

           let second=document.createElement("div");
           second.setAttribute("id","checkout_image_detail_checkout");
          //  second.innerText="i am a div"
           
          let secondh4=document.createElement("h4");
          secondh4.innerText="SIZE";
          let secondp=document.createElement("p");
          secondp.innerText="(Please reference sizing images on a product if available; if unavailable please use our size and conversion guide for proper sizing.)"
          
          let sizediv=document.createElement("h2");
          sizediv.innerText="Size Guide"


          let divbtn=document.createElement("div");
          divbtn.setAttribute("id","checkout_image_detail_checkout_btn")
          let btn1=document.createElement("button");
          btn1.innerText="4"
          let btn2=document.createElement("button");
          btn2.innerText="6"
          let btn3=document.createElement("button");
          btn3.innerText="8"
          let btn4=document.createElement("button");
          btn4.innerText="10"

        divbtn.append(btn1,btn2,btn3,btn4,sizediv);

        let checkoutbtn=document.createElement("button");
        checkoutbtn.setAttribute("id","addtocart")
        checkoutbtn.innerText="ADD TO CART"
        checkoutbtn.addEventListener("click",function(){
                addto(el);
        })
        let hr=document.createElement("hr")


        title.append(titleh3,titlediv,fixed,hr1,second,secondh4,secondp,divbtn,checkoutbtn,hr);
      })

}
append(show)

function addto(el) {
        show.push(el);
        console.log(el);
        localStorage.setItem("masai-cart", JSON.stringify(show));
       
        disp(show, muskan);
        Niraj(dropdown);
      }
      


 