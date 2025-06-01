import { useContext } from "react";
import { StepContext } from "@/contexts/StepProvider";
import Content from "./contents/Content";

function ContentStep() {
  const { currentStep } = useContext(StepContext);
  console.log("Current Step:", currentStep);
  const handleRenderStepInCart = (currentStep) => {
    switch (currentStep) {
      case 1:
        return <Content />;
      case 2:
        return "Step 2: Review Cart";
      case 3:
        return "Step 3: Checkout";
    }
  };
  // this line where the content of code inplementation, so you must call the function implement and pass the value in
  return <div>{handleRenderStepInCart(currentStep)}</div>;
}

export default ContentStep;
