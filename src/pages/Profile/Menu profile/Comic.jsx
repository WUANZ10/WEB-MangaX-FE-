import { Bookmark, CircleStop, Eye } from 'lucide-react'
import React from 'react'

export default function Comic(props) {
  console.log(props)
  return (
    <div className="comic-container">
      <div className="header-list">
        <p>Danh sách truyện theo dõi (0)</p>
      </div>
      <div className="list-container">
        <div className="comic-container">
          <img src="/logo512.png" alt="truyện" />
          <div className="comic-information">
            <p className="name">Name</p>
            <p className="chapter">Chapter 100</p>
          </div>
          <div className="comic-rate">
            <span className="icon-circle">
              <CircleStop />
            </span>
            <div className="rate">
              <span className="icon-rate">
                <Bookmark />
              </span>
              <p>100</p>
              <span className="icon-rate">
                <Eye />
              </span>
              <p>3.5k</p>
            </div>
          </div>
        </div>
        <div className="comic-container">
          <img src="/logo512.png" alt="truyện" />
          <div className="comic-information">
            <p className="name">Name</p>
            <p className="chapter">Chapter 100</p>
          </div>
          <div className="comic-rate">
            <span className="icon-circle">
              <CircleStop />
            </span>
            <div className="rate">
              <span className="icon-rate">
                <Bookmark />
              </span>
              <p>100</p>
              <span className="icon-rate">
                <Eye />
              </span>
              <p>3.5k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
