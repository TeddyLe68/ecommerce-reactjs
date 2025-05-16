import Button from "@components/Button/Button";
import styles from "../../styles.module.scss";
import CartSummary from "./CartSummary";
import CartTable from "./CartTable";
import { useContext, useEffect } from "react";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { addProductToCart, deleteItem, deleteCart } from "@/apis/cartService";
import { PiShoppingCart } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { getCart } from "@/apis/cartService";
function Content() {
  const {
    containerContent,
    boxFooter,
    boxBtnDelete,
    boxCoupon,
    boxEmptyCart,
    titleEmpty,
    boxBtnEmpty,
  } = styles;
  const {
    listProductCart,
    handleGetListProductCart,
    isLoading,
    setIsLoading,
    userId,
    setListProductCart,
  } = useContext(SideBarContext);
  const handleReplaceQuantity = (data) => {
    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        handleGetListProductCart("cart", data.userId);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const handleDeleteItemCart = (data) => {
    setIsLoading(true);
    deleteItem(data)
      .then((res) => {
        handleGetListProductCart("cart", data.userId);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const handleDeleteCart = () => {
    setIsLoading(true);
    deleteCart({ userId })
      .then((res) => {
        handleGetListProductCart("cart", userId);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const navigate = useNavigate();
  const handleNavigateToShop = () => {
    navigate("/shop");
  };
  useEffect(() => {
    if (userId) {
      getCart(userId)
        .then((res) => {
          setListProductCart(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setListProductCart([]);
          setIsLoading(false);
        });
    }
  }, []);
  return (
    <>
      {listProductCart.length > 0 && userId ? (
        <div className={containerContent}>
          <div style={{ width: "58%" }}>
            <CartTable
              listProductCart={listProductCart}
              getData={handleReplaceQuantity}
              isLoading={isLoading}
              getDataDelete={handleDeleteItemCart}
            />
            <div className={boxFooter}>
              <div className={boxCoupon}>
                <input type="text" placeholder="Coupon code" />
                <Button content={"OK"} isPrimary={false} />
              </div>
              <div className={boxBtnDelete}>
                <Button
                  content={<div>🗑️ Clear shopping cart</div>}
                  isPrimary={false}
                  onClick={handleDeleteCart}
                />
              </div>
            </div>
          </div>
          <CartSummary />
        </div>
      ) : (
        <div className={boxEmptyCart}>
          <PiShoppingCart style={{ fontSize: "50px" }} />
          <div className={titleEmpty}>YOUR SHOPPING CART IS EMPTY</div>
          <div>
            We invite you to get acquainted with an assortment of our shop.
            Surely you can find something for yourself!
          </div>
          <div className={boxBtnEmpty}>
            <Button content={"RETURN TO SHOP"} onClick={handleNavigateToShop} />
          </div>
        </div>
      )}
    </>
  );
}

export default Content;
