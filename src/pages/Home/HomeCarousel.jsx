import React from "react";
import { Carousel } from "primereact/carousel";

import "./HomeCarousel.scss";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

let imgs = [img1, img2, img3, img4, img5];

function HomeCarousel() {
  const productTemplate = (imgs) => {
    return (
      <div className=" p-d-flex p-ai-center p-jc-center">
        <img
        className="slide-image"
          src={imgs}
          style={{ maxWidth: "400px", height: "300px", objectFit: "cover" }}
        />
      </div>
    );
  };

  return (
    <div className=" flex justify-content-center">
      <Carousel
        value={imgs}
        numVisible={1}
        numScroll={1}
        orientation="vertical"
        verticalViewPortHeight="310px"
        itemTemplate={productTemplate}
      />
    </div>
  );
}

export default HomeCarousel;
