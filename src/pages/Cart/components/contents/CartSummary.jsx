import Button from "@components/Button/Button";
import styles from "../../styles.module.scss";
import cls from "classnames";
import { useContext } from "react";
import { SideBarContext } from "@/contexts/SideBarProvider";
import LoadingCart from "../Loading";
import PaymentMethod from "@components/PaymentMethods/PaymentMethods";
function CartSummary() {
  const {
    containerSummary,
    title,
    boxTotal,
    subTotal,
    price,
    totals,
    space,
    containerRight,
    textSecure,
  } = styles;
  const { listProductCart, isLoading } = useContext(SideBarContext);
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
      <div>
        <PaymentMethod />
      </div>
    </div>
  );
}

export default CartSummary;
