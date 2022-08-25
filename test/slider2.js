var doo=document.getElementById("con")

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

