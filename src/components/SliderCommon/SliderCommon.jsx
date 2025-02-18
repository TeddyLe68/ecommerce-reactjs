import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./styles.css";
import ProductItem from "@components/ProductItem/ProductItem";

function SilderCommon({ data, isProductItem = false }) {
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
      {data.map((item, index) => {
        return;
        <>
          {isProductItem ? (
            <ProductItem />
          ) : (
            <img key={index} src={item} alt="test" />
          )}
        </>;
      })}
    </Slider>
  );
}

export default SilderCommon;
