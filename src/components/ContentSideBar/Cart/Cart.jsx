import HeaderSidebar from "../components/HeaderSidebar/HeaderSidebar";
import { PiShoppingCart } from "react-icons/pi";
import ItemProduct from "../components/ItemProduct/ItemProduct";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
function Cart() {
  const { container, total, boxBtn } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSidebar
          icon={<PiShoppingCart style={{ fontSize: "30px" }} />}
          title={"CART"}
        />
        <ItemProduct />
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
