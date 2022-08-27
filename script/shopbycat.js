let obj = [
  {
    image: "https://img.shop.com/Image/270000/278100/278132/products/1919879594.jpg?plain&size=400x400",
    title: "DRESSES",
    img2: "https://img.shop.com/Image/290000/292000/292019/products/alt_838105307.jpg?plain&size=1024x1024",
  },

  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313395700_RLLZ_2_large.jpg?v=1660342242",
    title: "PUMPUS & HEELS",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-275,/pub/media/catalog/product/1/9/196805dMHB0034SC-GR_1.jpg?rnd=20200526195200",
  },
  
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/81mks7hegzl._ul1500_19fda006-368e-4686-9b3f-9e12d3befea6_large.jpg?v=1654138030",
    title: "HANDBAGS",
    img2:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-275,/pub/media/catalog/product/5/7/574c66fNYFTHGU000038_1.jpg?rnd=20200526195200"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/FF0440S-0000J-2_large.jpg?v=1629991097",
    title: "SUNGLASSES",
    img2:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-275,/pub/media/catalog/product/e/2/e2f6932FT0833-N_01A_1.jpg?rnd=20200526195200"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313807526_RLLZ_2_large.jpg?v=1660837245",
    title: "WOMEN'S SNEAKERS",
    img2:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-275,/pub/media/catalog/product/f/8/f8acebaNYKFF_PMA3858_1.jpg?rnd=20200526195200"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312365714_RLLZ_2_large.jpg?v=1659835675",
    title: "MEN'S SNEAKER",
    img2:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-275,/pub/media/catalog/product/5/b/5bf1b28ASICS00012338_1.jpg?rnd=20200526195200"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/7043e64d-fee5-40f6-8433-c6128b56a093_large.jpg?v=1607745937",
    title: "MENS'S T-SHIRT",
    img2:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-275,/pub/media/catalog/product/t/s/tshirt2000black_1_d2b52667.jpg?rnd=20200526195200"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411349805_RLLZ_2_large.jpg?v=1660461697",
    title: "WOMEN;S TOP",
    img2:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-275,/pub/media/catalog/product/0/7/0777752Z009_1.jpg?rnd=20200526195200"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/noutH4ms3oVDrEiWN5wgtAevJT1SlmGy-25_large.jpg?v=1661228230",
    title: "WOMEN'S DENIM",
    img2:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-275,/pub/media/catalog/product/o/d/od-dn-wl-1018_1_4be3a210.jpg?rnd=20200526195200"
  },

  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/pd6460y2_30dd4014-20c2-4704-a864-1c7616a126ce_large.jpg?v=1658831599",
    title: "JEWELERY",
    img2:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-275,/pub/media/catalog/product/n/l/nl-pr-10613-1_fc07fac6.jpg?rnd=20200526195200"
  },

];
append(obj)

function append(data){
    // console.log(data)
    data.forEach(function(el){
        let CATEGORY=document.getElementById("SHOP_BY_CATEGORY_append");
        var div=document.createElement("div");
        div.setAttribute("id","SHOP_BY_CATEGORY_div")
        

        let img=document.createElement("img")
        img.setAttribute("id","SHOP_BY_CATEGORY_img")
        img.src=el.image;

        img.onmouseover=()=>{
          if(el.image !=undefined){
              img.src=el.img2;
              // img.style.width="100%"
              // img.style.height="50%"
          }
      }
      img.onmouseout=()=>{
          img.src=el.image;
      }
        let div2=document.createElement("div");
        div2.setAttribute("id","div222")
        let title=document.createElement("h4")
        title.innerText=el.title;
        title.setAttribute("id","SHOP_BY_CATEGORY_tiltle")
        div2.append(title)
        

        div.append(img,div2)
        CATEGORY.append(div)


    })

}
