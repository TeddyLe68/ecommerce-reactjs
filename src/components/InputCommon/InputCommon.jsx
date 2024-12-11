import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

function InputCommon({ label, type, isRequired = false, ...props }) {
  const { container, labelInput, boxInput, boxIcon, errMsg } = styles;
  const { formik, id } = props;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isShowTextPassword =
    type === "password" && showPassword ? "text" : type;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const isError = formik.touched[id] && formik.errors[id];
  const messageErr = formik.errors[id];
  return (
    <div className={container}>
      <div className={labelInput}>
        {label}
        {isRequired && <span> *</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
        {isError && <div className={errMsg}>{messageErr}</div>}
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
