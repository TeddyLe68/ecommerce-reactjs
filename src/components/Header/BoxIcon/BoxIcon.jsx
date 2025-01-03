import styles from "../styles.module.scss";
import fbIcon from "@icons/svgs/fbIcon.svg";
import insIcon from "@icons/svgs/insIcon.svg";
import ytbIcon from "@icons/svgs/ytbIcon.svg";

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;
  const handleRandomIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "ins":
        return insIcon;
      case "ytb":
        return ytbIcon;
    }
  };
  return (
    <div className={boxIcon}>
      <img src={handleRandomIcon(type)} alt="type" />
    </div>
  );
}

export default BoxIcon;
