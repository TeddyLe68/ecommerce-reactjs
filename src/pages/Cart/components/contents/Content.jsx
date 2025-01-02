import styles from "../../styles.module.scss";
import CartTable from "./CartTable";
function Content() {
  const { containerContent } = styles;
  return (
    <div className={containerContent}>
      <div>
        <CartTable />
      </div>
      <div>Thanh toan</div>
    </div>
  );
}

export default Content;
