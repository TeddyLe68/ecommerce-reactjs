import styles from "../../styles.module.scss";
import Stepper from "./Stepper";

function Steps() {
  const { containerSteps, steps, line, textNoti } = styles;

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
            <>
              <Stepper
                key={index}
                number={item.number}
                content={item.content}
                isDisabled={index !== 0}
              />
              {index !== dataSteps.length - 1 && <div className={line} />}
            </>
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
