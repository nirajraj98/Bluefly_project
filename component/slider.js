function slide(){
return ` 
<div class="slides">
<!--  radio button start  -->
<input type="radio" class="rdbtn" name="radio-btn" id="radio1">
<input type="radio" class="rdbtn" name="radio-btn" id="radio2">
<input type="radio" class="rdbtn" name="radio-btn" id="radio3">
<input type="radio" class="rdbtn" name="radio-btn" id="radio4">

<!-- radio button end -->
<!-- slide images start -->
<div class="slide first">
    <img src="https://logan.nnnow.com/content/dam/nnnow-project/15-july-2022/Hanzdefuko_Topbannerdesktop.jpg"
        alt="">
</div>
<div class="slide">
    <img src="https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/Benefit_Homepagebanner_Colordesktop.jpg"
        alt="">
</div>
<div class="slide">
    <img src="https://logan.nnnow.com/content/dam/nnnow-project/15-july-2022/Hanzdefuko_Topbannerdesktop.jpg"
        alt="">
</div>
<div class="slide">
    <img src="https://logan.nnnow.com/content/dam/nnnow-project/23-aug-2022/Dior_Topbannerdesktop.jpg"
        alt="">
</div>

<!-- Slide images end -->
<!-- Automatic navigation start -->
<div class="Navigation-auto">
    <div class="auto-btn1"></div>
    <div class="auto-btn2"></div>
    <div class="auto-btn3"></div>
    <div class="auto-btn4"></div>
</div>
<!-- Automatic navigation end -->
<!-- manual Navigation start -->
<div class="Navigation-manual">
    <label for="radio1" class="manual-btn"></label>
    <label for="radio2" class="manual-btn"></label>
    <label for="radio3" class="manual-btn"></label>
    <label for="radio4" class="manual-btn"></label>
</div>


</div>`
 }

 function slide2(){
    return ` 
    <div class="slides">
    <!--  radio button start  -->
    <input type="radio" class="rdbtn2" name="radio-btn" id="radio21">
    <input type="radio" class="rdbtn2" name="radio-btn" id="radio22">
    <input type="radio" class="rdbtn2" name="radio-btn" id="radio23">
    <input type="radio" class="rdbtn2" name="radio-btn" id="radio24">
    
    <!-- radio button end -->
    <!-- slide images start -->
    <div class="slide2 first2">
        <img src="https://logan.nnnow.com/content/dam/nnnow-project/15-july-2022/Hanzdefuko_Topbannerdesktop.jpg"
            alt="">
    </div>
    <div class="slide2">
        <img src="https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/Benefit_Homepagebanner_Colordesktop.jpg"
            alt="">
    </div>
    <div class="slide2">
        <img src="https://logan.nnnow.com/content/dam/nnnow-project/15-july-2022/Hanzdefuko_Topbannerdesktop.jpg"
            alt="">
    </div>
    <div class="slide2">
        <img src="https://logan.nnnow.com/content/dam/nnnow-project/23-aug-2022/Dior_Topbannerdesktop.jpg"
            alt="">
    </div>
    
    <!-- Slide images end -->
    <!-- Automatic navigation start -->
    <div class="Navigation-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
        <div class="auto-btn4"></div>
    </div>
    <!-- Automatic navigation end -->
    <!-- manual Navigation start -->
    <div class="Navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
    </div>
    
    
    </div>`
     }

    
let counter = 1;
let id;

const settime = (counter) => {
    id = setInterval(function () {
        // document.getElementById('radio2' + counter).checked = true;
        // // document.getElementById('radio2' + counter).checked = false;
        document.getElementById('radio' + counter).checked = true;
        // document.getElementById('radio' + counter).checked = false;
        counter++
        if (counter > 4) {
            counter = 1;
        }
    }, 3000)
}

settime(counter);



document.querySelectorAll(".rdbtn").forEach((ele, i) => {
  //  console.log("hello")
    ele.addEventListener("click", () => {
        clearInterval(id);
        settime(i + 2);
    });
});

export {slide,slide2};



