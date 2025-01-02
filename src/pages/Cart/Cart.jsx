import MyFooter from "@components/Footer/Footer";
import MyHeader from "@components/Header/Header";
import Steps from "./components/steps/Steps";
import Content from "./components/contents/Content";
import styles from "./styles.module.scss";
import MainLayout from "@components/Layout/Layout";

function Cart() {
  const { container } = styles;
  return (
    <>
      <MyHeader />
      <div className={container}>
        <Steps />
        <MainLayout>
          <Content />
        </MainLayout>
      </div>
      <MyFooter />
    </>
  );
}

export default Cart;
