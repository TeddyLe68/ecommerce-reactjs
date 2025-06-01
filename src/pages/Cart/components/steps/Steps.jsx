import React, { useContext } from "react";
import styles from "../../styles.module.scss";
import Stepper from "./Stepper";
import { StepContext } from "@/contexts/StepProvider";

function Steps() {
  const { containerSteps, steps, line, textNoti } = styles;
  const { currentStep, setCurrentStep } = useContext(StepContext);
  const dataSteps = [
    { number: 1, content: "SHOPPING CART" },
    { number: 2, content: "CHECKOUT" },
    { number: 3, content: "ORDER STATUS" },
  ];

  return (
    <div className={containerSteps}>
      <div className={steps}>
        {dataSteps.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Stepper
                number={item.number}
                content={item.content}
                isDisabled={index >= currentStep}
                setCurrentStep={setCurrentStep}
              />
              {index !== dataSteps.length - 1 && <div className={line} />}
            </React.Fragment>
          );
        })}
      </div>

      <div className={textNoti}>
        You are out of time! Checkout now to avoid losing your order
      </div>
    </div>
  );
}

export default Steps;
