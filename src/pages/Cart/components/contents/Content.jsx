import styles from "../../styles.module.scss";
import CartSummary from "./CartSummary";
import CartTable from "./CartTable";
function Content() {
  const { containerContent } = styles;
  return (
    <div className={containerContent}>
      <div>
        <CartTable />
      </div>
      <CartSummary />
    </div>
  );
}

export default Content;
