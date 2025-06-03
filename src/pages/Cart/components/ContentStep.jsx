import { useContext } from "react";
import { StepContext } from "@/contexts/StepProvider";
import Content from "./contents/Content";
import Checkout from "./Checkout/Checkout";

function ContentStep() {
  const { currentStep } = useContext(StepContext);
  console.log("Current Step:", currentStep);
  const handleRenderStepInCart = (currentStep) => {
    switch (currentStep) {
      case 1:
        return <Content />;
      case 2:
        return <Checkout />;
      case 3:
        return "Step 3: Checkout";
    }
  };
  // this line where the content of code inplementation, so you must call the function implement and pass the value in
  return <div>{handleRenderStepInCart(currentStep)}</div>;
}

export default ContentStep;
