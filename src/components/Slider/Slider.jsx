import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Slider.module.css";
import Slider from "react-slick";
import artCollections from "../../api";
import { Link } from "react-router-dom";

const settings = {
  centerMode: true,
  centerPadding: "9px",
  useCSS: true,
  variableWidth: false,
  adaptiveHeight: false,
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  cssEase: "linear",
};

const SlickSlider = () => {
  return (
    <div className={css["slider-container"]}>
      <Slider {...settings}>
        {artCollections.map((collection, index) => (
          <div key={index} className={css.slide}>
            <div className={css.content}>
              <div className={css.text}>
                <p className={css["trending-tag"]}>{collection.trand}</p>
                <p style={{ marginTop: 20, marginBottom: 5 }}>
                  {collection.subtitle}
                </p>
                <h2>{collection.title}</h2>

                <div className={css["artist-info"]}>
                  <img src={collection.avatar} alt="" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 10,
                    }}
                  >
                    <h6 style={{ margin: 0 }}>{collection.artist}</h6>
                    <p style={{ margin: 0 }}>{collection.name}</p>
                  </div>
                </div>
                <div className={css.buttons}>
                  <button className={css["buy-btn"]}>Buy</button>
                  <Link to="/collection">
                    <button className={css["collection-btn"]}>
                      See collection
                    </button>
                  </Link>
                </div>
              </div>
              <div className={css.image}>
                <img
                  width={250}
                  height={250}
                  src={collection.image}
                  alt={collection.title}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
