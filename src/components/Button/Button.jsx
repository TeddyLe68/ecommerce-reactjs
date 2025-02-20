import classNames from "classnames";
import styles from "./styles.module.scss";

function Button({
  content,
  isPrimary = true,
  customClassname = false,
  ...props
}) {
  const { btn, primaryBtn, secondaryBtn } = styles;
  return (
    <button
      className={classNames(btn, {
        [primaryBtn]: isPrimary,
        [secondaryBtn]: !isPrimary,
        [customClassname]: customClassname,
      })}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
