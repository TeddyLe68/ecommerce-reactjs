import styles from "./style.module.scss";
function InputCommonV1({
  label,
  type,
  dataOptions,
  isRequired = false,
  placeholder,
  isShowLabel = true,
  register,
}) {
  const { container, labelClass } = styles;
  const renderInput = () => {
    if (type === "text") {
      return <input type="text" placeholder={placeholder} {...register} />;
    } else {
      return (
        <select {...register}>
          <option value="" selected disabled hidden>
            {placeholder || label}
          </option>
          {dataOptions.map((option, index) => (
            <option key={index}>{option.label}</option>
          ))}
        </select>
      );
    }
  };
  return (
    <div className={container}>
      {isShowLabel && (
        <label className={labelClass}>
          {label} {isRequired && <span>*</span>}
        </label>
      )}
      {renderInput()}
    </div>
  );
}

export default InputCommonV1;
