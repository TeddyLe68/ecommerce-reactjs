import classNames from "classnames";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

function Button({ content, isPrimary = true }) {
  const { btn, primaryBtn, secondaryBtn } = styles;
  return (
    <button
      className={classNames(btn, {
        [primaryBtn]: isPrimary,
        [secondaryBtn]: !isPrimary,
      })}
    >
      {content}
    </button>
  );
}
Button.propTypes = {
  content: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
};

export default Button;
