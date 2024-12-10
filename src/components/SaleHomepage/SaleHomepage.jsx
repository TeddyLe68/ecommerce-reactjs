import Button from "@components/Button/Button";
import styles from "./styles.module.scss";
import useTranlateXImage from "@/hooks/useTranslateXImage";

function SaleHomepage() {
  const { container, title, des, boxBtn, boxImg } = styles;

  const { translateXPosition } = useTranlateXImage();
  return (
    <div className={container}>
      <div
        className={boxImg}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: `transform 0.6s ease`,
        }}
      >
        <img
          src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1-420x377.jpeg"
          alt=""
        />
      </div>
      <div>
        <h2 className={title}>Sale of the year</h2>
        <p className={des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <div className={boxBtn}>
          <Button content={"Read more"} isPrimary={false} />
        </div>
      </div>
      <div
        className={boxImg}
        style={{
          transform: `translateX(-${translateXPosition}px)`,
          transition: `transform 0.6s ease`,
        }}
      >
        <img
          src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2-420x378.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default SaleHomepage;
