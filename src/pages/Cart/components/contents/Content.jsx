import Button from "@components/Button/Button";
import styles from "../../styles.module.scss";
import CartSummary from "./CartSummary";
import CartTable from "./CartTable";
function Content() {
  const { containerContent, boxFooter, boxBtnDelete, boxCoupon } = styles;
  return (
    <div className={containerContent}>
      <div>
        <CartTable />
        <div className={boxFooter}>
          <div className={boxCoupon}>
            <input type="text" placeholder="Coupon code" />
            <Button content={"OK"} isPrimary={false} />
          </div>
          <div className={boxBtnDelete}>
            <Button
              content={<div>🗑️ Clear shopping cart</div>}
              isPrimary={false}
            />
          </div>
        </div>
      </div>
      <CartSummary />
    </div>
  );
}

export default Content;
