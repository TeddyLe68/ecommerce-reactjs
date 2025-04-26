import MyHeader from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import PaymentMethod from "@components/PaymentMethods/PaymentMethods";
import AccordionMenu from "@components/AccordionMenu";
import { useContext, useEffect, useState } from "react";
import InformationProduct from "./components/Information";
import ReviewProducts from "./components/Reviews";
import MyFooter from "@components/Footer/Footer";
import SliderCommon from "@/components/SliderCommon/SliderCommon.jsx";
import ReactImageMagnifier from "simple-image-magnifier/react";
import cls from "classnames";
import { getDetailProduct, getRalatedProducts } from "@/apis/productService";
import { useNavigate, useParams } from "react-router-dom";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon.jsx";
import { toast } from "react-toastify";
import { handleAddProductToCart } from "@/utils/helper";
import { SideBarContext } from "@/contexts/SideBarProvider";
import Cookies from "js-cookie";

function DetailProduct() {
  const [isLoading, setIsLoading] = useState(false);
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
    loading,
    emptyData,
  } = styles;

  const param = useParams();
  // pass data
  const [data, setData] = useState();
  const fetchDataDetailProduct = async (id) => {
    setIsLoading(true);
    try {
      const data = await getDetailProduct(id);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Error when loading data");
      setData([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (param.id) {
      fetchDataDetailProduct(param.id);
      fetchingRalatedProducts(param.id);
    }
  }, [param]);

  // fetching api ralated products
  const [relatedData, setRelatedData] = useState([]);
  const fetchingRalatedProducts = async (id) => {
    setIsLoading(true);
    try {
      const data = await getRalatedProducts(id);
      setRelatedData(data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Error when loading data");
      setRelatedData([]);
      setIsLoading(false);
    }
  };

  // handle render image
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
  // loading btn
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);

  const navigate = useNavigate();
  const { setIsOpen, setType, handleGetListProductCart } =
    useContext(SideBarContext);
  const userId = Cookies.get("userId");

  const handleAddProduct = () => {
    handleAddProductToCart(
      userId,
      isSelectedSize,
      param.id,
      setIsOpen,
      setType,
      toast,
      quantity,
      setIsLoadingBtn,
      handleGetListProductCart
    );
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
          {isLoading ? (
            <div className={loading}>
              <LoadingTextCommon />
            </div>
          ) : (
            <>
              {!data ? (
                <div className={emptyData}>
                  <p>No Results</p>
                  <div>
                    <Button
                      content={"Back to Home"}
                      onClick={() => navigate("/shop")}
                    />
                  </div>
                </div>
              ) : (
                <div className={contentSection}>
                  {/* image of product */}
                  <div className={imageBox}>
                    {data?.images.map((item) => handleRenderImage(item))}
                  </div>
                  {/* title and description */}
                  <div className={infoBox}>
                    <h1>{data?.name}</h1>
                    <p className={price}>${data?.price}</p>
                    <p className={description}>{data?.description}</p>

                    {/* display size */}
                    <p className={titleSize}>Size {isSelectedSize}</p>
                    <div className={boxSize}>
                      {data?.size.map((item, index) => {
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
                        <div onClick={() => handleSetQuantity(DECREASEMENT)}>
                          -
                        </div>
                        <div>{quantity}</div>
                        <div onClick={() => handleSetQuantity(INCREASEMENT)}>
                          +
                        </div>
                      </div>

                      {/* button add to cart */}
                      <div className={boxBtn}>
                        <Button
                          content={
                            isLoadingBtn ? <LoadingTextCommon /> : "Add to Cart"
                          }
                          customClassname={
                            !isSelectedSize && disableSelectedBtn
                          }
                          onClick={handleAddProduct}
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
              )}
            </>
          )}
          <h2>Related Products</h2>
          {relatedData.length ? (
            <div>
              <SliderCommon
                data={relatedData}
                isProductItem={true}
                showItem={4}
              />
            </div>
          ) : (
            <div>No products related</div>
          )}
        </MainLayout>
      </div>
      <MyFooter />
    </div>
  );
}

export default DetailProduct;
