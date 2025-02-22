import MyHeader from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import PaymentMethod from "@components/PaymentMethods/PaymentMethods";
import AccordionMenu from "@components/AccordionMenu";
import { useEffect, useState } from "react";
import InformationProduct from "./components/Information";
import ReviewProducts from "./components/Reviews";
import MyFooter from "@components/Footer/Footer";
import SliderCommon from "@/components/SliderCommon/SliderCommon.jsx";
import ReactImageMagnifier from "simple-image-magnifier/react";
import cls from "classnames";
import { getDetailProduct } from "@/apis/productService";
import { useParams } from "react-router-dom";

const tempDataSize = [
  { name: "L", amount: "1000" },
  { name: "M", amount: "1000" },
  { name: "S", amount: "1000" },
];
function DetailProduct() {
  const [idLoading, setIsLoading] = useState(false);
  const [isSelectedAccordion, setIsSelectedAccordion] = useState(1);
  const dataAccordionMenu = [
    {
      id: 1,
      titleAccordionMenu: "ADDITIONAL INFORMATION",
      contentAccordionMenu: <InformationProduct />,
    },
    {
      id: 2,
      titleAccordionMenu: "REVIEWS",
      contentAccordionMenu: <ReviewProducts />,
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
    active,
    clear,
    disableSelectedBtn,
  } = styles;

  const param = useParams();
  // pass data
  const [data, setData] = useState();
  const fetchDataDetaoiProduct = async (id) => {
    setIsLoading(true);
    try {
      const data = await getDetailProduct(id);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (param.id) {
      fetchDataDetaoiProduct(param.id);
    }
  }, [param]);
  // console.log(data);

  const tempDataSlider = [
    {
      image:
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
      name: "10K Yellow Gold",
      price: "$99.99",
      size: [{ name: "L" }, { name: "M" }, { name: "S" }],
    },
    {
      image:
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
      name: "10K Yellow Gold",
      price: "$99.99",
      size: [{ name: "L" }, { name: "M" }, { name: "S" }],
    },
    {
      image:
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
      name: "10K Yellow Gold",
      price: "$99.99",
      size: [{ name: "L" }, { name: "M" }, { name: "S" }],
    },
  ];
  // handle image of product
  const dataImage = [
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.3-min.jpg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.4-min.jpg",
  ];

  const handleRenderImage = (src) => {
    return (
      <ReactImageMagnifier
        srcPreview={src}
        srcOriginal={src}
        width={295}
        height={350}
      />
    );
  };

  // handle size of product
  const [isSelectedSize, setIsSelectedSize] = useState("");
  const handleSelectSize = (size) => {
    setIsSelectedSize(size);
  };
  // clear size of product
  const handleClear = () => {
    setIsSelectedSize("");
  };
  // handle quantity of product
  const INCREASEMENT = "increasement";
  const DECREASEMENT = "decreasement";
  const [quantity, setQuantity] = useState(1);
  const handleSetQuantity = (type) => {
    if (quantity <= 1 && type === DECREASEMENT) return;
    setQuantity((prev) => (type === INCREASEMENT ? prev + 1 : prev - 1));
  };
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
            {/* image of product */}
            <div className={imageBox}>
              {dataImage.map((item) => handleRenderImage(item))}
            </div>
            {/* title and description */}
            <div className={infoBox}>
              <h1>10K Yellow Gold</h1>
              <p className={price}>$99.99</p>
              <p className={description}>
                Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque
                arcu purus orci leo.
              </p>

              {/* display size */}
              <p className={titleSize}>Size {isSelectedSize}</p>
              <div className={boxSize}>
                {tempDataSize.map((item, index) => {
                  return (
                    <div
                      className={cls(size, {
                        [active]: isSelectedSize === item.name,
                      })}
                      key={index}
                      onClick={() => handleSelectSize(item.name)}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>

              {/* clear size function */}
              {isSelectedSize && (
                <p className={clear} onClick={handleClear}>
                  Clear
                </p>
              )}
              {/* increase, descrease quantity of product */}
              <div className={functionInfo}>
                <div className={incrementAmount}>
                  <div onClick={() => handleSetQuantity(DECREASEMENT)}>-</div>
                  <div>{quantity}</div>
                  <div onClick={() => handleSetQuantity(INCREASEMENT)}>+</div>
                </div>

                {/* button add to cart */}
                <div className={boxBtn}>
                  <Button
                    content={"Add to cart"}
                    customClassname={!isSelectedSize && disableSelectedBtn}
                  />
                </div>
              </div>

              <div className={orFunction}>
                <div></div>
                <span>OR</span>
                <div></div>
              </div>

              <div>
                <Button
                  content={"Buy Now"}
                  customClassname={!isSelectedSize && disableSelectedBtn}
                />
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

          <div>
            <h2>Related Products</h2>
            <SliderCommon
              data={tempDataSlider}
              isProductItem={true}
              showItem={4}
            />
          </div>
        </MainLayout>
      </div>
      <MyFooter />
    </div>
  );
}

export default DetailProduct;
