import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./styles.module.scss";
function LodingTextCommon() {
  const { rotate } = styles;
  return <AiOutlineLoading3Quarters className={rotate} />;
}

export default LodingTextCommon;
