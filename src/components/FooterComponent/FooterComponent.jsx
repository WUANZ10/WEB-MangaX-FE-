import React from "react";
import { Link } from "react-router";
import "./footerStyle.css";

export default function FooterComponent() {
  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div id="main_footer">
      <footer className="main_footer">
        <div className="div_module">
          <div className="left">
            <div className="logo">
              <Link to="/">
                <img
                  className="brand_logo_white"
                  alt="logo"
                  src="https://cmangax.com/assets/img/brand/cmanga/logo-white.png"
                />
              </Link>
            </div>
            <Link to="/">
              <p
                className="detail text_footer_detail"
                placeholder="Luôn cập nhật liên tục các bộ truyện mới, truyện VIP để phục vụ độc giả <br /> Đọc truyện hoàn toàn miễn phí, hỗ trợ đa thiết bị."
              >
                Luôn cập nhật liên tục các bộ truyện mới, truyện VIP để phục vụ
                độc giả <br /> Đọc truyện hoàn toàn miễn phí, hỗ trợ đa thiết
                bị.
              </p>
              <p
                className="link text_footer_contact"
                placeholder="Email khiếu nại: cmangadotcom@gmail.com<br/><a class='no_hover'>Giới thiệu</a><a class='no_hover'>Liên hệ</a><a class='no_hover'>Chính sách</a><br />"
              >
                Email khiếu nại: mindxcom@gmail.com
                <br />
                <Link to="/" className="relative">
                  <span> Giới thiệu</span>
                </Link>
                <Link to="/" className="relative">
                  <span>Liên hệ</span>
                </Link>
                <Link to="/" className="relative">
                  <span>Chính sách</span>
                </Link>
                <br />
              </p>
              <p
                className="copy_right text_footer_copyright"
                placeholder="Copyright © 2020 CMANGA"
              >
                Copyright © 2020 CMANGA
              </p>
            </Link>
          </div>
          <div className="right">
            <p
              className="text_footer_warning"
              placeholder="Mọi thông tin và hình ảnh trên website đều được sưu tầm trên Internet. Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông tin nào trên web này. Nếu làm ảnh hưởng đến cá nhân hay tổ chức nào, khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức."
            >
              Mọi thông tin và hình ảnh trên website đều được sưu tầm trên
              Internet. Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông
              tin nào trên web này. Nếu làm ảnh hưởng đến cá nhân hay tổ chức
              nào, khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức.
            </p>
            <div className="social">
              <div className="gallery">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                  alt="facebook"
                  onClick={() => handleImageClick("https://www.facebook.com")}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg"
                  alt="x"
                  onClick={() => handleImageClick("https://twitter.com")}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                  alt="telegram"
                  onClick={() => handleImageClick("https://telegram.org")}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/db/Threads_%28app%29.png"
                  alt="threads"
                  onClick={() => handleImageClick("https://www.threads.net")}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}