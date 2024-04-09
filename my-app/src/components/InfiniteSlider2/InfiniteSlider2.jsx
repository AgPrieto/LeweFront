// eslint-disable-next-line no-unused-vars
import React from "react";
import "./infiniteSlider2.scss";

const InfiniteSlider2 = () => {
  const imgQuantity = 25;
  
  const slides = [];

  for (let i = 0; i < imgQuantity; i++) {
      slides.push(
        <div className="slide" key={i}>
          <div className="top">
            <img
              src="https://i.ibb.co/w0NHt7b/logo-White.png"
              height="35"
              width="45"
              alt=""
            />
          </div>
        </div>
      );
    }

  return (
      <div>
    <div
      className="slider"
    >
      <div className="slide-track">{slides}</div>
    </div>
    </div>
  );
};

export default InfiniteSlider2;
