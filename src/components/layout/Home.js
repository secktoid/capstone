import React from "react";
import App from "../../App";

const Home = () => {
  return (
    <div>
      <img src="/img/home-page-banner.png" alt="" style={{ width: "100%" }} />

      <div
        className="row"
        style={{
          marginRight: "-12px",
          display: "flex",
          flexWrap: "noWrap",
          flexDirection: "center",
        }}
      >
        <div
          className="col s6 valign-wrapper"
          style={{
            marginTop: "-5px",
            marginLeft: "100px",
            display: "flex",
            flexDirection: "center",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <div>
            <h1>PAINTING</h1>
            <p style={{ fontSize: "30px" }}>
              Painting models from small pieces to large armies
            </p>
          </div>
        </div>
        <div
          className="col s12 right-align"
          style={{ marginTop: "-5px", marginRight: "10px" }}
        >
          <img src="/img/front-right.jpg" alt="" style={{ width: "60%" }} />
        </div>
      </div>
      <div
        className="row center-align"
        style={{ fontSize: "50px", width: "80%" }}
      >
        Our Miniature painting site. We paint miniatures used in war games and
        often collected by miniature enthusiast. We have a Professional painter
        who works to a high standard to give the client a beautiful miniature.
        Painting, sculpting and conversion.
        <div>
          <h4 className="left-align" style={{ width: "80%" }}>
            About ME!!
          </h4>
          <p className="left-align" style={{ fontSize: "20px", width: "80%" }}>
            I love art! I love to paint miniatures and often put them up on
            eBay. I can locate, assemble and paint miniatures for War gaming,
            Role-Playing and other needs. I also love to create art in many
            forms and put those up on eBay. You can also request a mini you see
            to be painted for you as long as it can still be purchased or found.
            We wish you great things and fantastic dreams.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col m5"></div>
        <div className="col m5"></div>
      </div>
    </div>
  );
};

export default Home;
