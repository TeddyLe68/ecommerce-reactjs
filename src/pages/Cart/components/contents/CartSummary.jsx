import Button from "@components/Button/Button";
import styles from "../../styles.module.scss";
import cls from "classnames";
function CartSummary() {
  const {
    containerSummary,
    title,
    boxTotal,
    subTotal,
    price,
    totals,
    space,
    containerMethods,
    titleMethods,
    containerRight,
    boxImgageMethods,
    imgMethods,
    textSecure,
  } = styles;

  const srcMethod = [
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg",
  ];
  return (
    <div className={containerRight}>
      <div className={containerSummary}>
        <div className={title}>CART TOTALS</div>
        <div className={cls(boxTotal, subTotal)}>
          <div>Subtotal</div>
          <div className={price}>$2,099.97</div>
        </div>
        <div className={cls(boxTotal, totals)}>
          <div>TOTAL</div>
          <div>$2,099.97</div>
        </div>
        <Button content={"PROCEED TO CHECKOUT"} />
        <div className={space}></div>
        <Button content={"CONTINUE SHOPPING"} isPrimary={false} />
      </div>
      <div className={containerMethods}>
        <div className={titleMethods}>
          GUARANTEED <span>SAFE</span> CHECKOUT
        </div>

        <div className={boxImgageMethods}>
          {srcMethod.map((src, index) => {
            return (
              <img key={index} className={imgMethods} src={src} alt={src} />
            );
          })}
        </div>
      </div>
      <div className={textSecure}>Your Payment is 100% Secure</div>
    </div>
  );
}

export default CartSummary;
