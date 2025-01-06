import HeaderSidebar from "../components/HeaderSidebar/HeaderSidebar";
import { PiShoppingCart } from "react-icons/pi";
import ItemProduct from "../components/ItemProduct/ItemProduct";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { useContext } from "react";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";
import cls from "classnames";
import { useNavigate } from "react-router-dom";
function Cart() {
  const {
    container,
    total,
    boxBtn,
    containerListProductCart,
    overlayLoading,
    isEmpty,
    boxEmpty,
    boxBtnEmpty,
    containerListItem,
  } = styles;
  const navigate = useNavigate();
  const { listProductCart, isLoading, setIsOpen } = useContext(SideBarContext);
  const handleNaviagteToShop = () => {
    navigate("/shop");
    setIsOpen(false);
  };
  const subTotal = listProductCart
    .reduce((acc, item) => {
      return acc + item.total;
    }, 0)
    .toFixed(2);

  const handleNavigateToCart = () => {
    navigate("/cart");
    setIsOpen(false);
  };
  return (
    <div className={cls(container, { [isEmpty]: !listProductCart.length })}>
      <HeaderSidebar
        icon={<PiShoppingCart style={{ fontSize: "30px" }} />}
        title={"CART"}
      />
      {listProductCart.length ? (
        <div className={containerListItem}>
          <div>
            {isLoading ? (
              <LoadingTextCommon />
            ) : (
              listProductCart.map((item, index) => {
                return (
                  <ItemProduct
                    key={index}
                    src={item.images[0]}
                    nameProduct={item.name}
                    priceProduct={item.price}
                    skuProduct={item.sku}
                    sizeProduct={item.size}
                    quantity={item.quantity}
                    productId={item.productId}
                    userId={item.userId}
                  />
                );
              })
            )}
          </div>
          <div>
            <div className={total}>
              <p>Subtotal: </p>
              <p>${subTotal}</p>
            </div>
            <div className={boxBtn}>
              <Button onClick={handleNavigateToCart} content={"VIEW CART"} />
              <Button content={"CHECKOUT"} isPrimary={false} />
            </div>
          </div>
        </div>
      ) : (
        <div className={boxEmpty}>
          <div>No product in the cart.</div>
          <div className={boxBtnEmpty}>
            <Button content={"RETURN TO SHOP"} onClick={handleNaviagteToShop} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
