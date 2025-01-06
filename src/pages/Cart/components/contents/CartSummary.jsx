import Button from "@components/Button/Button";
import styles from "../../styles.module.scss";
import cls from "classnames";
import { useContext } from "react";
import { SideBarContext } from "@/contexts/SideBarProvider";
import LoadingCart from "../Loading";
function CartSummary() {
  const {
    containerSummary,
    title,
    boxTotal,
    subTotal,
    price,
    totals,
    space,
    containerMethods,
    titleMethods,
    containerRight,
    boxImgageMethods,
    imgMethods,
    textSecure,
  } = styles;
  const { listProductCart, isLoading } = useContext(SideBarContext);
  const srcMethod = [
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg",
  ];
  const total = listProductCart
    .reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
    .toFixed(2);
  return (
    <div className={containerRight}>
      <div className={containerSummary}>
        <div className={title}>CART TOTALS</div>
        <div className={cls(boxTotal, subTotal)}>
          <div>Subtotal</div>
          <div className={price}>${total}</div>
        </div>
        <div className={cls(boxTotal, totals)}>
          <div>TOTAL</div>
          <div>${total}</div>
        </div>
        <Button content={"PROCEED TO CHECKOUT"} />
        <div className={space}></div>
        <Button content={"CONTINUE SHOPPING"} isPrimary={false} />
        {isLoading && <LoadingCart />}
      </div>
      <div className={containerMethods}>
        <div className={titleMethods}>
          GUARANTEED <span>SAFE</span> CHECKOUT
        </div>

        <div className={boxImgageMethods}>
          {srcMethod.map((src, index) => {
            return (
              <img key={index} className={imgMethods} src={src} alt={src} />
            );
          })}
        </div>
      </div>
      <div className={textSecure}>Your Payment is 100% Secure</div>
    </div>
  );
}

export default CartSummary;
