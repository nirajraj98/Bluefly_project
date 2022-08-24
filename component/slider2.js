function slide2(){
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
        <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fhackathon-new-d-yellow.png&w=1920&q=75"
            alt="">
    </div>
    <div class="slide">
        <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fwinter_d_home.png&w=1920&q=75"
            alt="">
    </div>
    <div class="slide">
        <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fmint_d_banner.png&w=1920&q=75"
            alt="">
    </div>
    <div class="slide">
        <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FInfosys.png&w=1920&q=75"
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
    export default slide2;