import React from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import "./comicPageStyle.css";
import { Pagination } from "antd";


export default function HomePage() {
  return (
    <>
      <div>
        <div id="content" style={{"display":"flex","flexDirection":"column"}}>
          <div style={{"width":"100%", "display":"flex"}}>
            <div className="ladiv">
              <img id="logo"/>
            </div>
            <div style={{"flex":"1", "margin":"10px", "display":"flex", "flexDirection":"column", "gap":"5px"}}>
            <h1 id="name" className="white" style={{"marginBottom":"0", "fontSize":"30px"}}>Comic Name Placeholder</h1>
            <p style={{"fontWeight":"450", "fontSize":"18.75px"}}>Artist Name</p>
            <div className="statsdiv" style={{"flex":"4", "display":"flex", "flexDirection":"row"}}>
            <p className="p white" style={{"padding":"0 7.5px", "border":"2.2px solid #77D172", "borderRadius":"1000000000px", "backgroundColor":"#39761D", "fontWeight":"600", "fontSize":"12.5px"}}>Example Tag</p>
            <p className="p white" style={{"padding":"0 7.5px", "border":"2.2px solid #77D172", "borderRadius":"1000000000px", "backgroundColor":"#39761D", "fontWeight":"600", "fontSize":"12.5px"}}>Horror</p>
            <p className="p white" style={{"padding":"0 7.5px", "border":"2.2px solid #77D172", "borderRadius":"1000000000px", "backgroundColor":"#39761D", "fontWeight":"600", "fontSize":"12.5px"}}>Comedy</p>
            </div>
            <div className="statsdiv" style={{"flex":"20", "display":"flex", "gap":"10px"}}>
              <div style={{"width":"30%", "display":"flex"}}>
                  <div style={{"width":"50%", "display":"flex"}}>
                  <img className="icon"/>
                  <p className="p" style={{"flex":"1", "marginLeft":"5px"}}>Chapters</p>
                </div>
                <div style={{"width":"50%"}}>
                  <p className="p" style={{"width":"100%", "fontWeight":"450"}}>1,234,567,890</p>
                </div>
              </div>
              <div style={{"width":"30%", "display":"flex"}}>
                <div style={{"width":"50%", "display":"flex"}}>
                  <img className="icon"/>
                  <p className="p" style={{"flex":"1", "marginLeft":"5px"}}>Views</p>
                </div>
                <div style={{"width":"50%"}}>
                  <p className="p" style={{"width":"100%", "fontWeight":"450"}}>1,234,567,890</p>
                </div>
              </div>
                <div style={{"width":"30%", "display":"flex"}}>
                  <div style={{"width":"50%", "display":"flex"}}>
                  <img className="icon"/>
                  <p className="p" style={{"flex":"1", "marginLeft":"5px"}}>Favorites</p>
                  </div>
                  <div style={{"width":"50%"}}>
                  <p className="p" style={{"width":"100%", "fontWeight":"450"}}>1,234,567,890</p>
                  </div>
                </div>
                <div style={{"width":"30%", "display":"flex"}}>
                  <div style={{"width":"50%", "display":"flex"}}>
                  <img className="icon"/>
                  <p className="p" style={{"flex":"1", "marginLeft":"5px"}}>Ratings</p>
                  </div>
                  <div style={{"width":"50%"}}>
                  <p className="p" style={{"width":"100%", "fontWeight":"450"}}>9.8 / 10</p>
                  </div>
                </div>
            </div>
            <div style={{"flex":"1", "display":"flex", "gap":"5px", "flexDirection":"row"}}>
                <button className="button" style={{"backgroundColor":"#6C74FC"}}>
                  <div style={{"width":"100%", "height":"100%", "display":"flex", "justifyContent":"center"}}>
                    <img className="icon"/>
                    <p className="p" style={{"marginLeft":"5px"}}>Read from Beginning</p>
                  </div>
                </button>
                <button className="button">
                  <div style={{"width":"100%", "height":"100%", "display":"flex", "justifyContent":"center"}}>
                  <img className="icon"/>
                  <p className="p" style={{"marginLeft":"5px"}}>Favorite</p>
                  </div>
                </button>
                <button className="button">
                <div style={{"width":"100%", "height":"100%", "display":"flex", "justifyContent":"center"}}>
                  <img className="icon"/>
                  <p className="p" style={{"marginLeft":"5px"}}>Share</p>
                  </div>
                </button>
                <button className="button">
                <div style={{"width":"100%", "height":"100%", "display":"flex", "justifyContent":"center"}}>
                  <img className="icon"/>
                  <p className="p" style={{"marginLeft":"5px"}}>Report</p>
                  </div>
                </button>
                <button className="button">
                <div style={{"width":"100%", "height":"100%", "display":"flex", "justifyContent":"center"}}>
                  <img className="icon"/>
                  <p className="p" style={{"marginLeft":"5px"}}>Edit</p>
                  </div>
                </button>
            </div>
            </div>
          </div>
          <div style={{"width":"100%", "height":"100%", "display":"flex", "flexDirection":"column", "gap":"20px"}}>
          <div>
            <img className="icon" style={{"height":"100%","aspectRatio":"1"}}/>
            <h1 className="white" style={{"marginLeft":"10px", "fontSize":"30px"}}>Description</h1>
          </div>
          <p className="p" style={{"fontWeight":"450", "fontSize":"18.75px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas leo eu nunc luctus, in laoreet libero venenatis. Duis eget finibus odio. Cras facilisis hendrerit mi, quis luctus lacus tempus et. Pellentesque fermentum cursus gravida. Sed eleifend pellentesque turpis in euismod. Aenean tempus augue eu odio gravida iaculis. Quisque non.</p>
          </div>
          <div style={{"width":"100%", "height":"100%", "display":"flex", "flexDirection":"column", "gap":"20px", "alignItems":"center"}}>
          <h1 className="white" style={{"textAlign":"center", "fontSize":"30px"}}>Chapters</h1>
          <div style={{"width":"80%", "height":"400px", "display":"flex","flexDirection":"column","gap":"10px"}}>
          <div style={{"width":"100%", "flex":"1", "display":"flex","flexDirection":"row","gap":"10px"}}>
            <div style={{"width":"100%", "flex":"9", "border":"2px solid #142262", "borderRadius":"8px", "backgroundColor":"#050B29"}}>
            </div>
            <div style={{"height":"100%", "aspectRatio":"1", "border":"2px solid #142262", "borderRadius":"8px", "backgroundColor":"#1F2955"}}>
            </div>
            </div>
            <div style={{"width":"100%", "flex":"9", "border":"2px solid #142262", "borderRadius":"8px", "backgroundColor":"#0C1121", "display":"flex", "flexDirection":"column", "gap":"10px", "alignItems":"center", "padding":"10px", "aspectRatio":"1.25", "overflowY":"scroll"}}>
            <div style={{"width":"100%", "borderRadius":"8px", "backgroundColor":"#101739", "padding":"10px", "display":"flex", "flexDirection":"row", "gap":"10px"}}>
                <div className="ladiv" style={{"border":"2px solid #142262", "width":"10%"}}>
                <img/>
                </div>
                <div style={{"flex":"1"}}>
                <h1 id="name" className="white" style={{"marginBottom":"0", "fontSize":"18.75px"}}>Chapter 1</h1>
                <p className="p" style={{"fontSize": "17.1875", "fontWeight": "450"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas leo eu nunc luctus, in laoreet libero venenatis. Duis eget finibus odio. Cras facilisis hendrerit mi, quis luctus lacus tempus et. Pellentesque fermentum cursus gravida. Sed eleifend pellentesque turpis in euismod. Aenean tempus augue eu odio gravida iaculis. Quisque non.</p>
                </div>
              </div>
              <div style={{"width":"100%", "borderRadius":"8px", "backgroundColor":"#101739", "padding":"10px", "display":"flex", "flexDirection":"row", "gap":"10px"}}>
                <div className="ladiv" style={{"border":"2px solid #142262", "width":"10%"}}>
                <img/>
                </div>
                <div style={{"flex":"1"}}>
                <h1 id="name" className="white" style={{"marginBottom":"0", "fontSize":"18.75px"}}>Chapter 2</h1>
                <p className="p" style={{"fontSize": "17.1875", "fontWeight": "450"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas leo eu nunc luctus, in laoreet libero venenatis. Duis eget finibus odio. Cras facilisis hendrerit mi, quis luctus lacus tempus et. Pellentesque fermentum cursus gravida. Sed eleifend pellentesque turpis in euismod. Aenean tempus augue eu odio gravida iaculis. Quisque non.</p>
                </div>
              </div>
              <div style={{"width":"100%", "borderRadius":"8px", "backgroundColor":"#101739", "padding":"10px", "display":"flex", "flexDirection":"row", "gap":"10px"}}>
                <div className="ladiv" style={{"border":"2px solid #142262", "width":"10%"}}>
                <img/>
                </div>
                <div style={{"flex":"1"}}>
                <h1 id="name" className="white" style={{"marginBottom":"0", "fontSize":"18.75px"}}>Chapter 3</h1>
                <p className="p" style={{"fontSize": "17.1875", "fontWeight": "450"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas leo eu nunc luctus, in laoreet libero venenatis. Duis eget finibus odio. Cras facilisis hendrerit mi, quis luctus lacus tempus et. Pellentesque fermentum cursus gravida. Sed eleifend pellentesque turpis in euismod. Aenean tempus augue eu odio gravida iaculis. Quisque non.</p>
                </div>
              </div>
              <div style={{"width":"100%", "borderRadius":"8px", "backgroundColor":"#101739", "padding":"10px", "display":"flex", "flexDirection":"row", "gap":"10px"}}>
                <div className="ladiv" style={{"border":"2px solid #142262", "width":"10%"}}>
                <img/>
                </div>
                <div style={{"flex":"1"}}>
                <h1 id="name" className="white" style={{"marginBottom":"0", "fontSize":"18.75px"}}>Chapter 4</h1>
                <p className="p" style={{"fontSize": "17.1875", "fontWeight": "450"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas leo eu nunc luctus, in laoreet libero venenatis. Duis eget finibus odio. Cras facilisis hendrerit mi, quis luctus lacus tempus et. Pellentesque fermentum cursus gravida. Sed eleifend pellentesque turpis in euismod. Aenean tempus augue eu odio gravida iaculis. Quisque non.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div style={{"width":"100%", "height":"100%", "display":"flex", "flexDirection":"column", "gap":"20px", "alignItems":"center"}}>
          <h1 className="white" style={{"textAlign":"center", "fontSize":"30px"}}>Comments</h1>
          <div style={{"width":"80%", "height":"400px", "display":"flex","flexDirection":"column","gap":"10px"}}>
          <div style={{"width":"100%", "flex":"1", "display":"flex","flexDirection":"row","gap":"10px"}}>
            <div style={{"width":"100%", "flex":"9", "border":"2px solid #142262", "borderRadius":"8px", "backgroundColor":"#050B29"}}>
            </div>
            <div style={{"height":"100%", "aspectRatio":"1", "border":"2px solid #142262", "borderRadius":"8px", "backgroundColor":"#6C74FC"}}>
            </div>
            </div>
            <div style={{"width":"100%", "flex":"9", "border":"2px solid #142262", "borderRadius":"8px", "backgroundColor":"#0C1121", "display":"flex", "flexDirection":"column", "gap":"10px", "alignItems":"center", "padding":"10px", "aspectRatio":"1.25", "overflowY":"scroll"}}>
              <div style={{"display":"flex", "flexDirection":"column", "gap":"5px", "width":"100%"}}>
                <p className="white" style={{"fontSize":"18.75px"}}>Username</p>
                <div style={{"display":"flex", "flexDirection":"row", "gap":"5px"}}>
                  <img className="icon" style={{"height":"32px","aspectRatio":"1", "border":"2px solid #101739", "borderRadius":"1000000px"}}/>
                  <div style={{"padding":"10px", "border":"2px solid #151D35", "backgroundColor":"#1F2955", "height":"fit-content", "borderRadius":"8px"}}>
                    <p style={{"fontWeight":"450", "fontSize":"15.625px"}}>Lorem Ipsum Dolor Sit Amet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
