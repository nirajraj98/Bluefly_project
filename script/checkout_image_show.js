let checkout_image_show=[
    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/files/WEB_ASSET_2_540x.jpg?v=1650894933",
        title:"UP TO 85% OFF THE DENIM SHOP FOR HIM & HER",
        des:"From Hudson Jeans, Joe's Jeans, J Brand & More"

    },
    {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/files/WEB_ASSET_2_540x.jpg?v=1650894933",
        title:"UP TO 90% OFF TRENDING JUMPSUITS & ROMPERS",
        des:"Must-Haves From Halston, BCBGMAXAZRIA, Iro & More"

    },  {
        img:"https://cdn.shopify.com/s/files/1/0248/3473/6191/files/WEB_ASSET_2_540x.jpg?v=1650894933",
        title:"UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES",
        des:"Shop Wallets, Belts, Hats, Sunglasses & More & More"

    },
]

append(checkout_image_show)
function append(data){
    console.log(data)
    data.forEach(function(el){
        let checkout_image_show=document.getElementById("checkout_image_show");

        let checkout_image_show_div=document.createElement("div");

        checkout_image_show_div.setAttribute("class","checkout_image_show_div")

        let img=document.createElement("img");
        img.src=el.img
        let title=document.createElement("h2")
        title.innerText=el.title;
        let des=document.createElement("h3");
        des.innerText=el.des;

        let checkout_image_show_btn=document.createElement("button");
        checkout_image_show_btn.innerText="SHOP WOMEN'S ASSCESSORIES"
        checkout_image_show_btn.setAttribute("class","checkout_image_show_btn")


        checkout_image_show_div.append(img,title,des,checkout_image_show_btn);
        checkout_image_show.append(checkout_image_show_div)




    })

}