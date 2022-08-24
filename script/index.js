import slide  from "../component/slider.js"

import slide2 from "../component/slider2.js"
var slider2=document.getElementById("slidingBanner-2")
slider2.innerHTML=slide2()

var doo=document.getElementById("slidingBanner-1")
doo.innerHTML=slide()
// doo.innerHTML=slidejs()
let counter = 1;
let id;

const settime = (counter) => {
    id = setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++
        if (counter > 4) {
            counter = 1;
        }
    }, 3000)
}

settime(counter);

document.querySelectorAll(".rdbtn").forEach((ele, i) => {
    console.log("hello")
    ele.addEventListener("click", () => {
        clearInterval(id);
        settime(i + 2);
    });
});

