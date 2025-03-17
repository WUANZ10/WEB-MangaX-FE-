import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { useQuery } from "react-query";
import albumService from "../../services/albumService";
import { useNavigate, useLocation } from "react-router-dom";
import "./favoritePageStyle.css"
import ComicButton from "./Album/Album.jsx"
import FooterComponent from "../../components/FooterComponent/FooterComponent.jsx";

export default function FavoritePage() {
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

  return<div>
          <div className="div_module">
        <div id="content">
        <div id="fav_content"><div className="lst_album" >
    {isLoading ? (
      <div className="unselectable">Loading...</div>
    ) : isError ? (
      <div>Error fetching albums</div>
    ) : albums.length === 0 ? (
      <div>
        Không có truyện nào phù hợp với từ khóa "{searchTerm}"
      </div>
    ) : (
      albums.map((albuem) => (
        <ComicButton album={albuem}/>
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
        </div>
      </div>
      <FooterComponent />
  </div>
  ;
}
