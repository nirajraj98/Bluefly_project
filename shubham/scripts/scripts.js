let arr=[]
import{nav} from '../components/nav.js'
document.getElementById("head").innerHTML=nav()
document.getElementById("foot").innerHTML=bottom()
document.getElementById("lasthree").innerHTML=lasthree()
function obj(a,b){
    this.source=a,
    this.text=b
}

let one=  new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2227080_large.jpg?v=1649703475","DRESSES")
let two = new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313201861_RLLZ_2_large.jpg?v=1651370370","PUMPS & HEELS")
let three= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/DiorByDior-2-00086-1_large.jpg?v=1609777367","SUNGLASSES")
let four= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313122420_RLLZ_1_large.jpg?v=1649157447","MEN SNEAKERS")
let five= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312134872_RLLZ_1_large.jpg?v=1651124960","WOMEN SNEAKERS")
let six= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1881083_large.jpg?v=1637943584","MEN SNEAKERS")
let seven= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/b3becc07-657c-48a6-8373-8d3d3d9cc31a_large.jpg?v=1644496612","MEN TSHIRT")
let eight= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/MIknqmmliBqlojVFQ5Vkrxaj3kuvD7Z4-25_c432c99f-30f1-45a7-803c-efae45c59a4f_large.jpg?v=1651327676","WOMEN TOP")
let nine= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/tb8040rose-11_b26d5a1c-9f7e-45b8-ae93-8f8f17aeb59f_large.jpg?v=1634340453","JEWELERY")
let ten= new obj("https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1161192845_RLLZ_2_large.jpg?v=1651354997","WOMEN DENIM")

console.log(arr)
arr.push(one,two,ten,three,four,five,six,seven,eight,nine)

arr.map(({source,text})=>{

    let div = document.createElement("div")
   let image= document.createElement("img")
   image.src=source
   let hii =  document.createElement("h6")
   hii.innerText=text

   div.append(image,hii)


   document.getElementById("items").append(div)
})