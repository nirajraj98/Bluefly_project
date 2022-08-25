var show=JSON.parse(localStorage.getItem("arr"));
console.log(show)
append(show)

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

           titlediv.append(p2,p,p1)
           let fixed=document.createElement("h3");
           fixed.innerText="FREE SHIPPING ON ORDERS OVER $99"

           title.append(titleh3,titlediv,fixed);
   })

}
