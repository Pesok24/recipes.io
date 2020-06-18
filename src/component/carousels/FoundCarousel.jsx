import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";

function FoundCarousel(props) {
  const [data, setData] = useState([{ reviews: [], ingridients: [] }]);
  useEffect(() => {
    setData(props.data);
  }, [props]);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
  };

  return (
    <>
      <div className="carouselFound-main">
        <h2 className="carouselTitle"></h2>
        <Slider {...settings}>
          {data.map((item) => {
            const itemId = item._id ? item._id : "error";
            return (
              <Link
                className="link"
                to={{ pathname: `/recipes/${itemId}`, params: itemId }}
                key={itemId}
              >
                <div className="carouselRandom-element">
                  <div className="carouselRandom-image">
                    <div className="shadow">
                      <img
                        className="carousel-img"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div className="carousel-title">{item.title}</div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default FoundCarousel;
