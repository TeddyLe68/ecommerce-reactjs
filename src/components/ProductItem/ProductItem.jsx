import styles from "./styles.module.scss";
import cls from "classnames";
import Button from "@components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { OurShopContext } from "@/contexts/OurShopProvider";
import Cookies from "js-cookie";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { ToastContext } from "@/contexts/ToastProvider";
import { addProductToCart } from "@/apis/cartService";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { LiaEyeSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { handleAddProductToCart } from "@/utils/helper";

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true,
  slideItem = false,
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
  const [sizeChoose, setSizeChoose] = useState("");
  const ourShopContext = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopContext?.isShowGrid);
  const userId = Cookies.get("userId");
  const { setIsOpen, setType, handleGetListProductCart, setDetailProduct } =
    useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleShowProductSidebar = () => {
    setIsOpen(true);
    setType("detail");
    setDetailProduct(details);
  };
  const handleNavigateToDetail = () => {
    const path = `/product/${details._id}`;
    navigate(path);
  };

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

  const handleAddToCart = () => {
    handleAddProductToCart(
      userId,
      sizeChoose,
      details._id,
      setIsOpen,
      setType,
      toast,
      1,
      setIsLoading,
      handleGetListProductCart
    );
  };

  useEffect(() => {
    if (slideItem) {
      setIsShowGrid(true);
    }
  }, [slideItem]);
  return (
    <div
      className={isShowGrid ? "" : containerItem}
      style={{ cursor: "pointer" }}
    >
      <div className={boxImg} onClick={handleNavigateToDetail}>
        <img src={src} alt="" />
        <img src={prevSrc} alt="" className={showImgWhenHover} />

        <div className={showFuncWhenHover}>
          <div className={boxIcon}>
            <LiaShoppingBagSolid style={{ fontSize: "23px" }} />
          </div>
          <div className={boxIcon}>
            <CiHeart style={{ fontSize: "25px" }} />
          </div>
          <div className={boxIcon}>
            <TfiReload style={{ fontSize: "18px" }} />
          </div>
          <div className={boxIcon} onClick={handleShowProductSidebar}>
            <LiaEyeSolid style={{ fontSize: "20px" }} />
          </div>
        </div>
      </div>
      <div
        className={isShowGrid ? "" : content}
        style={{ marginTop: slideItem && "10px" }}
      >
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
            <Button
              content={isLoading ? <LoadingTextCommon /> : "ADD TO CART"}
              onClick={handleAddToCart}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
