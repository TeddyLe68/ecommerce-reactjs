import styles from "./styles.module.scss";
import PropTypes from "prop-types";

function Button({ content }) {
  const { btn } = styles;
  return <button className={btn}>{content}</button>;
}
Button.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
