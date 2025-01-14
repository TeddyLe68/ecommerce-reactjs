import { useContext, useState } from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";
import { PiHeartLight } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { SideBarContext } from "@/contexts/SideBarProvider";
import SliderCommon from "@/components/SliderCommon/SliderCommon";
import styles from "./styles.module.scss";
import SelectBox from "@/pages/OurShop/components/SelectBox";
import Button from "@components/Button/Button";
import cls from "classnames";
import { addProductToCart } from "@/apis/cartService";
function DetailProduct() {
  const {
    container,
    title,
    price,
    des,
    boxSize,
    size,
    label,
    boxAddToCart,
    boxOr,
    line,
    or,
    boxAddOther,
    boxFooter,
    isActive,
  } = styles;
  const {
    detailProduct,
    userId,
    setType,
    handleGetListProductCart,
    setIsLoading,
    setIsOpen,
  } = useContext(SideBarContext);
  const [chooseSize, setChooseSize] = useState("");
  const [quantity, setQuantity] = useState("1");
  const showOption = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
  ];
  const handleGetSize = (value) => {
    setChooseSize(value);
  };

  const handleDeleteSize = () => {
    setChooseSize("");
  };
  const handleGetQuantity = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    const data = {
      userId: userId,
      productId: detailProduct._id,
      quantity,
      size: chooseSize,
      isMultiple: true,
    };
    setIsOpen(false);
    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        setIsOpen(true);
        setType("cart");
        handleGetListProductCart("cart", userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={container}>
      <SliderCommon data={detailProduct.images} />

      <div className={title}>{detailProduct.name}</div>
      <div className={price}>${detailProduct.price}</div>
      <div className={des}>{detailProduct.description}</div>

      <div className={label}>Size {chooseSize}</div>
      <div className={boxSize}>
        {detailProduct.size.map((item, index) => (
          <div
            key={index}
            className={cls(size, { [isActive]: chooseSize === item.name })}
            onClick={() => handleGetSize(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {chooseSize && (
        <div
          style={{
            fontSize: "12px",
            marginTop: "3px",
            cursor: "pointer",
          }}
          onClick={handleDeleteSize}
        >
          clear
        </div>
      )}

      <div className={boxAddToCart}>
        <SelectBox
          options={showOption}
          type="show"
          defaultValue={quantity}
          getValue={handleGetQuantity}
        />
        <div>
          <Button
            content={
              <div>
                <PiShoppingCartLight /> ADD TO CART
              </div>
            }
            onClick={handleAddToCart}
          />
        </div>
      </div>

      <div className={boxOr}>
        <div className={line} />
        <div className={or}>OR</div>
        <div className={line} />
      </div>

      <Button
        content={
          <div>
            <PiShoppingCartLight /> SELECT OPTIONS
          </div>
        }
      />

      <div className={boxAddOther}>
        <TfiReload style={{ fontSize: "23px" }} />
        <div>Add to compare</div>
      </div>

      <div className={boxAddOther}>
        <PiHeartLight style={{ fontSize: "25px" }} />
        <div>Add to wishlist</div>
      </div>

      <div className={boxFooter}>
        SKU: <span>12349</span>
      </div>
      <div className={boxFooter}>
        Category: <span>Pulllover</span>
      </div>
      <div className={boxFooter}>
        Estimated delivery: <span>3 - 5 days</span>
      </div>
      <div className={boxFooter}>
        Share:{" "}
        <span>
          <FaXTwitter />
          <FaFacebookF />
        </span>
      </div>
    </div>
  );
}

export default DetailProduct;
