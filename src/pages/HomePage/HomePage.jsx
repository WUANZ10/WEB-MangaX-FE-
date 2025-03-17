import React, { useState, useEffect } from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import "./homePageStyle.css";
import { Pagination } from "antd";
import { useQuery } from "react-query";
import albumService from "../../services/albumService";

import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";

import { PiStarHalf } from "react-icons/pi";

import ComicButton from "./Album/Album.jsx"

export default function HomePage() {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const getAllAlbums = async (page = 1, pageSize = 10) => {
    const res = await albumService.getAllAlbum({
      page: page,
      pageSize: pageSize,
    });
    console.log(res)
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["albums", currentPage],
    queryFn: () => getAllAlbums(currentPage, pageSize),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const albums = data?.albums || [];
  const totalAlbums = data?.total || 0;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
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
                  <p
                    className="text_smart_suggest unselectable"
                    placeholder="Gợi ý thông minh"
                  >
                    Gợi ý thông minh
                  </p>
                </p>
              </h1>
            </div>
            <div className="lst_album">
              {isLoading ? (
                <div className="unselectable">Loading...</div>
              ) : isError ? (
                <div className="unselectable">Error fetching albums</div>
              ) : (
                albums.map((album) => (
                  <ComicButton album={album} key={album._id}/>
                ))
              )}
            </div>
            <div className="page_redirect">
              <Pagination
                align="center"
                current={currentPage}
                total={totalAlbums}
                pageSize={pageSize}
                onChange={handlePageChange}
              />
            </div>
          </div>
          <div className="right">
            <div className="app">
              <img src="https://cmangax.com/assets/img/premium.png" alt="" />
              <p className="unselectable">
                Thành viên VIP
                <br />
                <span className="unselectable">Đọc truyện không quảng cáo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
