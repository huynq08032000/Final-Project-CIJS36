const components = {}

components.register=`
    <div class="hinhnen">
    <img style="width: 100%; height: 250px;" src="nha-hang-1-768x410.jpg" alt="">
    </div>
    <div class="welcome">
    <div class="register-1" >
    <span>Chào mừng đến với</span>  
    </div> 
    <div>
    <h3 style="font-size: 250%; font-weight: 500; padding-top: 20px;">ĐĂNG KÝ MONA HOTEL</h3>
    </div>
    </div>
    <section class="register-container">
    
    <form id="form-register" class="form-register">
    <div class="form-header">
        <h3>Mount Hotel</h3>
    </div>
    <div class="form-content">
        <div class="name-wrapper">
            <div class="input-wraper">
                <input type="text" name="firstname" placeholder="Firstname">
                <div id="firstname-error" class="message-error"></div>
            </div>
            <div class="input-wraper">
                <input type="text" name="lastname" placeholder="Lastname">
                <div id="lastname-error" class="message-error"></div>
            </div>
        </div>
        <div class="input-wraper">
            <input type="text" name="email" placeholder="Email">
            <div id="email-error" class="message-error"></div>
        </div>
        <div class="input-wraper">
            <input type="text" name="password" placeholder="Password">
            <div id="password-error" class="message-error"></div>
        </div>
        <div class="input-wraper">
            <input type="text" name="comfirmPassword" placeholder="Comfirm password">
            <div id="comfirm-password-error" class="message-error"></div>
        </div>
    </div>
    <div class="form-footer">
        <a id="register-link" href="#">Đã có tài khoản? Đăng nhập</a>
        <button id="register-submit-btn" type="submit">Đăng ký</button>
    </div>
    </form>
    <div class="lienhe">
    <div class="register-1" >
    <span>Hoặc liên hệ trực tiếp</span>  
    </div>
    <div> 
    <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
    <p>Phone: 076 922 0162</p>
    <p>Email: demonhunterg@gmail.com</p>
    <div class="btn-icon">
    <i class="fab fa-facebook"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-twitter"></i>
    </div>   
    </div>
    </div>
    </section>`

components.logIn =`
    <div class="hinhnen">
    <img style="width: 100%; height: 250px;" src="nha-hang-1-768x410.jpg" alt="">
    </div>
    <div class="welcome">
    <div class="register-1" >
    <span>Chào mừng đến với</span>  
    </div> 
    <div>
    <h3 style="font-size: 250%; font-weight: 500; padding-top: 20px;">ĐĂNG NHẬP MONA HOTEL</h3>
    </div>
    </div>
    <section class="log-in-container">
    
    <form id="form-log-in" class="form-log-in">
    <div class="form-header">
        <h3>Mount Hotel</h3>
    </div>
    <div class="form-content">
            <input type="text" name="email" placeholder="Email">
            <div id="email-error" class="message-error"></div>
        </div>
        <div class="input-wraper">
            <input type="text" name="password" placeholder="Password">
            <div id="password-error" class="message-error"></div>
        </div>
    </div>
    <div class="form-footer">
        <a id="log-in-link" href="#">Chưa có tài khoản? Đăng kí</a>
        <button id="log-in-submit-btn" type="submit">Đăng nhập</button>
    </div>
    </form>
    <div class="lienhe">
    <div class="register-logIn" >
    <span>Hoặc liên hệ trực tiếp</span>  
    </div>
    <div> 
        <div class="p">
    <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
    <p>Phone: <a href="#"> 076 922 0162</a></p>
    <p>Email: <a href="#"> demonhunterg@gmail.com</a></p>
    </div>
    <div class="btn-icon">
    <i class="fab fa-facebook"></i>
    <i class="fab fa-instagram"></i>
    <i class="fab fa-twitter"></i>
    </div>   
    </div>
    </div>
    </section>`