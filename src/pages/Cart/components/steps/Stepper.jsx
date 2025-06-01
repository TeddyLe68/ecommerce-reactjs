import cls from "classnames";
import styles from "../../styles.module.scss";
import { useContext } from "react";
import { StepContext } from "@/contexts/StepProvider";

function Stepper({ number, content, isDisabled }) {
  const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
    styles;

  const { setCurrentStep } = useContext(StepContext);
  return (
    <div className={stepper} onClick={() => setCurrentStep(number)}>
      <div className={cls(numberStep, { [isDisableNumber]: isDisabled })}>
        {number}
      </div>
      <div className={cls(textStep, { [isDisableText]: isDisabled })}>
        {content}
      </div>
    </div>
  );
}

export default Stepper;
