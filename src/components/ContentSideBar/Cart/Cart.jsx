import HeaderSidebar from "../components/HeaderSidebar/HeaderSidebar";
import { PiShoppingCart } from "react-icons/pi";
import ItemProduct from "../components/ItemProduct/ItemProduct";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { useContext } from "react";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";
function Cart() {
  const { container, total, boxBtn, containerListProductCart, overlayLoading } =
    styles;

  const { listProductCart, isLoading } = useContext(SideBarContext);

  return (
    <div className={container}>
      <div>
        <HeaderSidebar
          icon={<PiShoppingCart style={{ fontSize: "30px" }} />}
          title={"CART"}
        />
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
          <p>$199.99</p>
        </div>
        <div className={boxBtn}>
          <Button content={"VIEW CART"} />
          <Button content={"CHECKOUT"} isPrimary={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
