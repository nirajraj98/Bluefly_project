let home_last_page_image=[
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

append(home_last_page_image)
function append(data){
    // console.log(data)
    data.forEach(function(el){
        let home_last_page_image=document.getElementById("home_last_page_image");

        let home_last_page_image_div=document.createElement("div");

        home_last_page_image_div.setAttribute("class","home_last_page_image_div")

        let img=document.createElement("img");
        img.src=el.img
        let title=document.createElement("h2")
        title.innerText=el.title;
        let des=document.createElement("h3");
        des.innerText=el.des;

        let home_last_page_image_btn=document.createElement("button");
        home_last_page_image_btn.innerText="SHOP WOMEN'S ASSCESSORIES"
        home_last_page_image_btn.setAttribute("class","home_last_page_image_btn")


        home_last_page_image_div.append(img,title,des,home_last_page_image_btn);
        home_last_page_image.append(home_last_page_image_div)




    })

}