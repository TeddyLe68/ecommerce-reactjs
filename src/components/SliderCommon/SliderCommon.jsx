import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./styles.css";

function SilderCommon({ data }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <MdOutlineArrowForwardIos />,
    prevArrow: <MdOutlineArrowBackIos />,
  };
  return (
    <Slider {...settings}>
      {data.map((src, index) => {
        return <img key={index} src={src} alt="test" />;
      })}
    </Slider>
  );
}

export default SilderCommon;
