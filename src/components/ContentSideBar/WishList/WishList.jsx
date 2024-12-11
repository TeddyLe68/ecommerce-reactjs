import Button from "@components/Button/Button";
import HeaderSidebar from "../components/HeaderSidebar/HeaderSidebar";
import ItemProduct from "../components/ItemProduct/ItemProduct";
import styles from "./styles.module.scss";
import { BsHeart } from "react-icons/bs";

function WishList() {
  const { container, boxBtn } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSidebar
          icon={<BsHeart style={{ fontSize: "28px" }} />}
          title={"WISHLIST"}
        />
        <ItemProduct />
      </div>
      <div className={boxBtn}>
        <Button content={"VIEW WISHLIST"} />
        <Button content={"ADD TO CART"} isPrimary={false} />
      </div>
    </div>
  );
}

export default WishList;
