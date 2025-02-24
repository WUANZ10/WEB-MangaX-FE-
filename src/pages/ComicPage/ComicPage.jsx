import React from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import "./comicPageStyle.css";
import { Pagination } from "antd";

export default function HomePage() {
  return (
    <>
      <div className="div_module">
        <div id="content">
          <div style={{"width":"100%", "display":"flex"}}>
            <div className="ladiv">
              <img id="logo"/>
            </div>
            <div style={{"flex":"1", "margin":"10px", "display":"flex", "flexDirection":"column"}}>
              <h1 id="name">Comic Name Placeholder</h1>
              <div className="statsdiv" style={{"flex":"7", "display":"flex"}}>
                <div style={{"width":"30%", "display":"flex"}}>
                  <div style={{"width":"50%", "display":"flex"}}>
                  <img className="icon"/>
                  <p className="p" style={{"flex":"1", "marginLeft":"5px"}}>statistic1</p>
                  </div>
                  <div style={{"width":"50%"}}>
                  <p className="p" style={{"width":"100%"}}>numbers1</p>
                  </div>
                </div>
                <div style={{"width":"30%", "display":"flex"}}>
                  <div style={{"width":"50%", "display":"flex"}}>
                  <img className="icon"/>
                  <p className="p" style={{"flex":"1", "marginLeft":"5px"}}>statistic2</p>
                  </div>
                  <div style={{"width":"50%"}}>
                  <p className="p" style={{"width":"100%"}}>numbers2</p>
                  </div>
                </div>
              </div>
              <div style={{"flex":"1", "display":"flex", "gap":"5px", "flexDirection":"row"}}>
                <button className="button">
                  <div style={{"width":"100%", "height":"100%", "display":"flex", "justifyContent":"center"}}>
                  <img className="icon"/>
                  <p className="p" style={{"marginLeft":"5px"}}>button1</p>
                  </div>
                </button>
                <button className="button">
                <div style={{"width":"100%", "height":"100%", "display":"flex", "justifyContent":"center"}}>
                  <img className="icon"/>
                  <p className="p" style={{"marginLeft":"5px"}}>button2</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
