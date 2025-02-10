import React from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import "./homePageStyle.css";
import { Pagination } from "antd";

import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";

import { PiStarHalf } from "react-icons/pi";

export default function HomePage() {
  return (
    <>
      <div className="div_module">
        <div id="content">
          <div className="left">
            <div className="pr_image g_income_div">
              <SliderComponent arrImages={[slider1, slider2, slider3]} />
            </div>
            <div className="album_suggest">
              <h1>
                <p>
                  <PiStarHalf color="white" fontSize={18} />
                  <text
                    className="text_smart_suggest"
                    placeholder="Gợi ý thông minh"
                  >
                    Gợi ý thông minh
                  </text>
                </p>
              </h1>
            </div>
            <div className="page_redirect">
              <Pagination align="center" defaultCurrent={1} total={50} />
            </div>
          </div>
          <div className="right">
            <div className="app">
              <img src="https://cmangax.com/assets/img/premium.png" alt="" />
              <p>
                Thành viên VIP
                <br />
                <span>Đọc truyện không quảng cáo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
