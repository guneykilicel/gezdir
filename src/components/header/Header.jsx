import React from 'react'


import image1 from "../../assets/yeni-zelanda.jpg";
import image2 from "../../assets/italya.jpg";
import image3 from "../../assets/ispanya.jpg";
import image4 from "../../assets/amerika.jpg";
import image5 from "../../assets/japonya.jpg";
import image6 from "../../assets/fransa.jpg";
import image7 from "../../assets/tayland.jpg";
import ImageSlider from '../imageSlider/ImageSlider';


const Header = () => {
  return (
    <div>
        <ImageSlider images={[image1, image2, image3, image4, image5, image6, image7]}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#fff",
              position: "relative",
              right: "400px",
              bottom: "120px",
            }}
          >
            <h1
                style={{
                    fontSize: "6rem",
                }}
            >gezdir</h1>
            <h3>bir gezintiye çıkmaya ne dersin?</h3>
          </div>
        </ImageSlider>
      </div>
  )
}

export default Header