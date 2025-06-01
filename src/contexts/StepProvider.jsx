import { createContext, useState } from "react";

export const StepContext = createContext();

function StepProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  const value = {
    currentStep,
    setCurrentStep,
  };
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
}

export default StepProvider;
