import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

function InputCommon({ label, type, isRequired = false }) {
  const { container, labelInput, boxInput, boxIcon } = styles;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isShowTextPassword =
    type === "password" && showPassword ? "text" : type;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={container}>
      <div className={labelInput}>
        {label}
        {isRequired && <span> *</span>}
      </div>
      <div className={boxInput}>
        <input type={isShowTextPassword} />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
      </div>
    </div>
  );
}
InputCommon.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};

export default InputCommon;
