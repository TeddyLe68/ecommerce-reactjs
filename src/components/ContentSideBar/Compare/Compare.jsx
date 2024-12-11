import HeaderSidebar from "../components/HeaderSidebar/HeaderSidebar";
import { TfiReload } from "react-icons/tfi";
import styles from "./styles.module.scss";
import ItemProduct from "../components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
function Compare() {
  const { container, boxContent } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSidebar
          icon={<TfiReload style={{ fontSize: "30px" }} />}
          title={"COMPARE"}
        />
        <ItemProduct />
      </div>
      <div>
        <Button content={"VIEW COMPARE"} />
      </div>
    </div>
  );
}

export default Compare;
