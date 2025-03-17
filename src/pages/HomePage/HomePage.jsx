import React, { useState, useEffect } from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import "./homePageStyle.css";
import { Pagination } from "antd";
import { useQuery } from "react-query";
import albumService from "../../services/albumService";
import { useNavigate, useLocation } from "react-router-dom";

import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";

import { PiStarHalf } from "react-icons/pi";

import ComicButton from "./Album/Album.jsx"

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search") || "";

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const getAllAlbums = async (page = 1, pageSize = 10, keyword = "") => {
    const res = await albumService.getAllAlbum({
      page: page,
      pageSize: pageSize,
      keyword: keyword,
      orderBy: "title",
      orderDirection: "asc",
    });
    console.log(res)
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["albums", currentPage, searchTerm],
    queryFn: () => getAllAlbums(currentPage, pageSize, searchTerm),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const albums = data?.albums || [];
  const totalAlbums = data?.total || 0;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAlbumClick = (albumId) => {
    navigate(`/comic/${albumId}`);
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
                  <text
                    className="text_smart_suggest unselectable"
                    placeholder="Gợi ý thông minh"
                  >
                    Gợi ý thông minh
                  </text>
                </p>
              </h1>
            </div>
            <div className="lst_album">
              {isLoading ? (
                <div className="unselectable">Loading...</div>
              ) : isError ? (
                <div>Error fetching albums</div>
              ) : albums.length === 0 ? (
                <div>
                  Không có truyện nào phù hợp với từ khóa "{searchTerm}"
                </div>
              ) : (
                albums.map((album) => (
                  <div
                    key={album._id}
                    className="album_item"
                    onClick={() => handleAlbumClick(album._id)}
                  >
                    <h3>{album.title}</h3>
                    <p>{album.artist}</p>
                  </div>
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
