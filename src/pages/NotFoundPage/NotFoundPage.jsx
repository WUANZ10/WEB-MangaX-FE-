import React from "react";
import "./notFoundPageStyle.css";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="four_zero_four_bg">
          <h1>404</h1>
        </div>
        <div className="contant_box_404">
          <h2 >Nội dung không tồn tại!</h2>
          <p>Có vẻ nội dung này đã bị xóa.</p>
          <Link to="/" className="link_404">
            Trở về trang chủ
          </Link>
        </div>
      </div>
    </section>
  );
}
