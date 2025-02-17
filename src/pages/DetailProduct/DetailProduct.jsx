import MyHeader from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import PaymentMethod from "@components/PaymentMethods/PaymentMethods";
import AccordionMenu from "@components/AccordionMenu";
import { useState } from "react";
function DetailProduct() {
  const [isSelectedAccordion, setIsSelectedAccordion] = useState(1);
  const dataAccordionMenu = [
    {
      id: 1,
      titleAccordionMenu: "ADDITIONAL INFORMATION",
      contentAccordionMenu: <div>Content additional information</div>,
    },
    {
      id: 2,
      titleAccordionMenu: "REVIEWS",
      contentAccordionMenu: <div>Content reviews</div>,
    },
  ];

  const handleToggleAccordion = (id) => {
    setIsSelectedAccordion(id);
  };
  const {
    container,
    navigateSection,
    contentSection,
    imageBox,
    infoBox,
    price,
    description,
    boxSize,
    size,
    titleSize,
    functionInfo,
    boxBtn,
    incrementAmount,
    orFunction,
    addFunction,
    info,
  } = styles;
  return (
    <div>
      <MyHeader />
      <div className={container}>
        <MainLayout>
          <div className={navigateSection}>
            <div className="" style={{ cursor: "pointer" }}>
              Home {">"} Men
            </div>
            <div className="" style={{ cursor: "pointer" }}>
              {"<"} Return to previous page
            </div>
          </div>

          <div className={contentSection}>
            <div className={imageBox}>
              <img
                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                alt="xyz"
              />
              <img
                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                alt="xyz"
              />
              <img
                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                alt="xyz"
              />
              <img
                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                alt="xyz"
              />
            </div>

            <div className={infoBox}>
              <h1>10K Yellow Gold</h1>
              <p className={price}>$99.99</p>
              <p className={description}>
                Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque
                arcu purus orci leo.
              </p>

              <p className={titleSize}>Size</p>
              <div className={boxSize}>
                <div className={size}>L</div>
                <div className={size}>L</div>
                <div className={size}>L</div>
              </div>

              <div className={functionInfo}>
                <div className={incrementAmount}>
                  <div>-</div>
                  <div>1</div>
                  <div>+</div>
                </div>

                <div className={boxBtn}>
                  <Button content={"Add to cart"} />
                </div>
              </div>

              <div className={orFunction}>
                <div></div>
                <span>OR</span>
                <div></div>
              </div>

              <div>
                <Button content={"Buy Now"} />
              </div>

              <div className={addFunction}>
                <div>
                  <CiHeart />
                </div>
                <div>
                  <TfiReload />
                </div>
              </div>

              <div>
                <PaymentMethod />
              </div>

              <div className={info}>
                <div>
                  Brand: <span>Brand 01</span>
                </div>
                <div>
                  SKU: <span>12345</span>
                </div>
                <div>
                  Category: <span>Men</span>
                </div>
              </div>
              {dataAccordionMenu.map((item, index) => (
                <AccordionMenu
                  key={index}
                  titleAccordion={item.titleAccordionMenu}
                  contentAccordion={item.contentAccordionMenu}
                  onClick={() => handleToggleAccordion(item.id)}
                  isSelected={isSelectedAccordion === item.id}
                />
              ))}
            </div>
          </div>
        </MainLayout>
      </div>
    </div>
  );
}

export default DetailProduct;
