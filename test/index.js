import slide  from "../component/slider.js"
// import slidejs from "../component/slider.js"

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

