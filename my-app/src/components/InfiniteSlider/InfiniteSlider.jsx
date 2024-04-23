// eslint-disable-next-line no-unused-vars
import React from "react";
import "./infiniteSlider.scss";

const InfiniteSlider = () => {
  const imgQuantity = window.innerWidth <= 768 ? 40 : 25;

  const slides = [];

  for (let i = 0; i < imgQuantity; i++) {
    slides.push(
      <div className="slide" key={i}>
        <div className="top">
          {window.innerWidth <= 768 ? (
            <div className="top">
              <img
                src="https://i.ibb.co/PCs7kbm/lewe-Black.png"
                height="15"
                width="80"
                alt=""
                
              />
              <img
                src="https://i.ibb.co/RhQHdTg/logo.png"
                height="20"
                width="30"
                alt=""
              />
            </div>
          ) : (
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
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="slider1">
        <div className="slide-track">{slides}</div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
