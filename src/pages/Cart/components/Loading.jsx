import LodingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";
import styles from "../styles.module.scss";

function LoadingCart() {
  const { loadingCart } = styles;
  return (
    <div className={loadingCart}>
      <LodingTextCommon />
    </div>
  );
}

export default LoadingCart;
