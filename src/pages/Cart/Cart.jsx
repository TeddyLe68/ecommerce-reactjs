import StepProvider from "@/contexts/StepProvider";
import MyFooter from "@components/Footer/Footer";
import MyHeader from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import Steps from "./components/steps/Steps";
import styles from "./styles.module.scss";
import ContentStep from "./components/ContentStep";

function Cart() {
  const { container } = styles;

  return (
    <StepProvider>
      <MyHeader />
      <div className={container}>
        <Steps />
        <MainLayout>
          <ContentStep />
        </MainLayout>
      </div>
      <MyFooter />
    </StepProvider>
  );
}

export default Cart;
