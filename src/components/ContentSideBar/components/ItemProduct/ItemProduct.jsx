import styles from "./styles.module.scss";
import { IoCloseOutline } from "react-icons/io5";

function ItemProduct({
  src,
  nameProduct,
  priceProduct,
  sizeProduct,
  quantity,
  skuProduct,
}) {
  const { container, boxContent, title, price, boxClose, size } = styles;
  return (
    <div className={container}>
      <img src={src} alt="" />
      <div className={boxClose}>
        <IoCloseOutline style={{ fontSize: "20px", color: "c1c1c1" }} />
      </div>
      <div className={boxContent}>
        <div className={title}> {nameProduct}</div>
        <div className={size}>Size: {sizeProduct}</div>
        <div className={price}>
          {quantity} * ${priceProduct}
        </div>
        <div className={price}>SKU: {skuProduct}</div>
      </div>
    </div>
  );
}

export default ItemProduct;
