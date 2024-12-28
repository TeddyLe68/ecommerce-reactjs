import styles from "./styles.module.scss";
import reloadIcon from "@icons/svgs/reloadIcon.svg";
import heartIcon from "@icons/svgs/heart.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";
import cls from "classnames";
import Button from "@components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true,
}) {
  const {
    boxImg,
    showImgWhenHover,
    showFuncWhenHover,
    boxIcon,
    title,
    priceClass,
    boxSize,
    size,
    textCenter,
    boxBtn,
    content,
    containerItem,
    leftBtn,
    isActiveSize,
    btnClear,
  } = styles;
  // const { isShowGrid } = useContext(OurShopContext);
  // console.log(isShowGrid);
  const [sizeChoose, setSizeChoose] = useState("");
  const ourShopContext = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopContext?.isShowGrid);
  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopContext?.isShowGrid);
    }
  }, [isHomePage, ourShopContext?.isShowGrid]);

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };
  const handleClearSize = () => {
    setSizeChoose("");
  };
  return (
    <div className={isShowGrid ? "" : containerItem}>
      <div className={boxImg}>
        <img src={src} alt="" />
        <img src={prevSrc} alt="" className={showImgWhenHover} />

        <div className={showFuncWhenHover}>
          <div className={boxIcon}>
            <img src={cartIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={reloadIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={cartIcon} alt="" />
          </div>
        </div>
      </div>
      <div className={isShowGrid ? "" : content}>
        {!isHomePage && (
          <div className={boxSize}>
            {details.size.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cls(size, {
                    [isActiveSize]: sizeChoose === item.name,
                  })}
                  onClick={() => handleChooseSize(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
        {sizeChoose && (
          <div className={btnClear} onClick={() => handleClearSize()}>
            Clear
          </div>
        )}
        <div className={cls(title, { [textCenter]: !isHomePage })}>{name}</div>
        {!isHomePage && (
          <div className={textCenter} style={{ color: "#888" }}>
            Brand...
          </div>
        )}
        <div
          className={cls(priceClass, { [textCenter]: !isHomePage })}
          style={{ color: isHomePage ? "#333" : "#888" }}
        >
          ${price}
        </div>
        {!isHomePage && (
          <div className={cls(boxBtn, { [leftBtn]: !isShowGrid })}>
            <Button content={"ADD TO CART"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
