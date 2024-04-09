// eslint-disable-next-line no-unused-vars
import React from "react";
import "./infiniteSlider.scss";

const InfiniteSlider = () => {
    const imgQuantity = 25;
  
    const slides = [];

    for (let i = 0; i < imgQuantity; i++) {
      slides.push(
        <div className="slide" key={i}>
          <div className="top">
            <img
              src="https://i.ibb.co/PCs7kbm/lewe-Black.png"
              height="25"
              width="100"
              alt=""
            />
            <img
              src="https://i.ibb.co/RhQHdTg/logo.png"
              height="40"
              width="50"
              alt=""
            />
          </div>
        </div>
      );
    }
    for (let i = 0; i < imgQuantity; i++) {
        slides.push(
          <div className="slide" key={i}>
            <div className="top">
              <img
                src="https://i.ibb.co/YRdbSn6/lewe-White.png"
                height="25"
                width="100"
                alt=""
              />
              <img
                src="https://i.ibb.co/w0NHt7b/logo-White.png"
                height="40"
                width="50"
                alt=""
              />
            </div>
          </div>
        );
      }
  
    return (
        <div>
      <div
        className="slider1"
      >
        <div className="slide-track">{slides}</div>
      </div>
      </div>
    );
  };

export default InfiniteSlider;
