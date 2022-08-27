let newarrival=[
    {
        img:"https://img.shop.com/Image/270000/278100/278132/products/1919879594.jpg?plain&size=400x400",
        title:"WOMENS LACE FLORAL EVENING DRESS",
        dis:"$468",
        price:"155.99",
        save:"Save 67%",
        img1: "https://img.shop.com/Image/270000/278100/278132/products/1919879594__800x800__.jpg",
        img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_827870953.jpg?plain&size=2000x2000",
        img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_827870953.jpg?plain&size=2000x2000",
    },
    {
        img:"https://img.shop.com/Image/270000/278100/278132/products/1932450912.jpg?plain&size=400x400",
        title:"Women's Pumps & Heels",
        dis:"498",
        price:"324.99",
        save:"Save 35%",
        img1: "https://img.shop.com/Image/270000/278100/278132/products/1932450912__800x800__.jpg",
        img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_837766811.jpg?plain&size=2000x2000",
        img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_837766812.jpg?plain&size=2000x2000",
    },
    {
        img:"https://img.shop.com/Image/270000/278100/278132/products/1917714885.jpg?plain&size=400x400",
        title:"BECCA WOMENS MID RISE STRETCH BOOTCUT JEANS",
        dis:"$159",
        price:"45.99",
        save:"Save 71%",
        img1: "https://img.shop.com/Image/270000/278100/278132/products/1917714885__800x800__.jpg",
        img2: "https://img.shop.com/Image/270000/278100/278132/products/alt_825523337.jpg?plain&size=400x400",
        img3: "https://img.shop.com/Image/270000/278100/278132/products/alt_825523339.jpg?plain&size=2000x2000",
    },
    {
        img:"https://img.shop.com/Image/290000/292000/292019/products/1932799920.jpg?plain&size=400x400",
        title:"NWT VLONE X PLAM ANGLES BLACK/PURRPLE LOGO SHORT SLEEVLESS",
        dis:"$335",
        price:"275",
        save:"Save 18%",
        img1: "https://img.shop.com/Image/290000/292000/292019/products/1932799920__800x800__.jpg",
        img2: "https://img.shop.com/Image/290000/292000/292019/products/alt_838105307.jpg?plain&size=1024x1024",
        img3: "https://img.shop.com/Image/290000/292000/292019/products/alt_838105307.jpg?plain&size=1024x1024",
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/BLF005638_bo_large.jpg?v=1650984622",
        title:"DIAMOND AND PINK SAPHIRE AND 9.9.5",
        dis:"$3240",
        price:"982",
        save:"Save 70%",
        img1: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/BLF005638_bo_large.jpg?v=1650984622",
        img2: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/d/2de410bsmnjg-rng-5174_1.jpg",
        img3: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/BLF005638_bo_large.jpg?v=1650984622",
    },

];
append(newarrival)


function append(data){
    let CATEGORY=document.getElementById("NEW_ARRIVALS");
    CATEGORY.innerHTML="";
    data.forEach(function(el){
        var div=document.createElement("div");
        // div.innerHTML=null;
        div.setAttribute("class","NEW_ARRIVALS_div")
        

        let img=document.createElement("img")
        img.setAttribute("id","NEW_ARRIVALS_img")

        img.src=el.img;
        img.onmouseover=()=>{
            if(el.img1 !=undefined){
             img.src=el.img1;
            } 
         }
         img.mouseout=()=>{
            img.src.img
         }
 

        let title=document.createElement("h4")
        title.innerText=el.title;
        title.setAttribute("id","NEW_ARRIVALS_tiltle")

        let div2=document.createElement("div");
        div2.setAttribute("id","NEW_ARRIVALS_price")

        let p1=document.createElement("del")
        p1.innerText=el.dis;
        let p2=document.createElement("p")
        p2.innerText="$"+el.price;
        let p3=document.createElement("p")
        p3.innerText=el.save
        
        p3.style.color="red";
        div2.append(p1,p2,p3);

        let btn2=document.createElement("button");
        btn2.setAttribute("class","NEW_ARRIVALS_btn2")
        btn2.innerText="Quick View";
        btn2.style.color="white"
        btn2.style.backgroundColor="black"

        div.addEventListener("click",function(){
            console.log(el)
            detail(el)
        })

        div.append(img,btn2,title,div2)
        CATEGORY.append(div)
      })
}

var arr = [];

function detail(el) {
  console.log(el);
  arr.push(el);
  //console.log(arr);
  localStorage.setItem("arr", JSON.stringify(arr));
  window.location.href="checkout.html";
  // alert("Product added successfully");
}
