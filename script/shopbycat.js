let obj = [
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411212007_RLLZ_2_large.jpg?v=1661173093",
    title: "DRESSES",
  },

  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313395700_RLLZ_2_large.jpg?v=1660342242",
    title: "PUMPUS & HEELS",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/81mks7hegzl._ul1500_19fda006-368e-4686-9b3f-9e12d3befea6_large.jpg?v=1654138030",
    title: "HANDBAGS",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/FF0440S-0000J-2_large.jpg?v=1629991097",
    title: "SUNGLASSES",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313807526_RLLZ_2_large.jpg?v=1660837245",
    title: "WOMEN'S SNEAKERS",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312365714_RLLZ_2_large.jpg?v=1659835675",
    title: "MEN'S SNEAKER",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/7043e64d-fee5-40f6-8433-c6128b56a093_large.jpg?v=1607745937",
    title: "MENS'S T-SHIRT",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411349805_RLLZ_2_large.jpg?v=1660461697",
    title: "WOMEN;S TOP",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/noutH4ms3oVDrEiWN5wgtAevJT1SlmGy-25_large.jpg?v=1661228230",
    title: "WOMEN'S DENIM",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/pd6460y2_30dd4014-20c2-4704-a864-1c7616a126ce_large.jpg?v=1658831599",
    title: "JEWELERY",
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
        let title=document.createElement("h4")
        title.innerText=el.title;
        title.setAttribute("id","SHOP_BY_CATEGORY_tiltle")
        

        div.append(img,title)
        CATEGORY.append(div)


    })

}
