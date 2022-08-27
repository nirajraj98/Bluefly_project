let footer = ()=>{
    return` <div id="fcontainer">
    <div id="top-s">
        <div>
            <p>ABOUT US</p>
        </div>
        <div></div>
        <div>
            <p>SIGN UP AND SAVE</p>
        </div>
    </div>


    <div id="scontainer">
        <div class="links">
            <div><a href="">Contact Us</a></div>
            <div><a href="">Frequently Asked Questions</a></div>
            <div><a href="">Shipping & Returns</a></div>
            <div><a href="">Pre-Owned Guide</a></div>
        </div>
        <div class="links">
            <div><a href="">Sell on Bluefly</a></div>
            <div><a href="">Privacy Policy</a></div>
            <div><a href="">Terms & Conditions</a></div>
            <div><a href="">Do not sell my personal information</a></div>
        </div>
        <div class="last">
            <p>Subscribe to get exclusive offers on designer brands</p>
            <input type="text" name="mail" id="email" placeholder="Enter your email" required><br>
            <button onclick="subscribe()">Subscribe</button><br>
            <a href="https://www.instagram.com/bluefly/">
                <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://www.facebook.com/Bluefly/">
                <ion-icon name="logo-facebook"></ion-icon>
            </a>
        </div>
    </div>

    <div id="tcontainer">
        <div>
            <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Untitled_2_.png_5_x104@2x.png?v=1620852820"
                alt="">
        </div>
        <div>
            <p>© 2022 Bluefly 1998-2020 BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</p>
        </div>

    </div>

</div>

</div>`;
}
export default footer;