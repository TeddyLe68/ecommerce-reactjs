import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./styles.css";
import ProductItem from "@components/ProductItem/ProductItem";

function SilderCommon({ data, isProductItem = false, showItem = 1 }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showItem,
    slidesToScroll: 1,
    nextArrow: <MdOutlineArrowForwardIos />,
    prevArrow: <MdOutlineArrowBackIos />,
  };
  return (
    <Slider {...settings}>
      {data.map((item, index) => {
        const src = !item.image ? item.images[0] : item.image;
        return (
          <>
            {isProductItem ? (
              <ProductItem
                key={index}
                src={src}
                prevSrc={src}
                name={item.name}
                price={item.price}
                details={item}
                isHomePage={false}
                slideItem
              />
            ) : (
              <img key={index} src={item} alt="test" />
            )}
          </>
        );
      })}
    </Slider>
  );
}

export default SilderCommon;
