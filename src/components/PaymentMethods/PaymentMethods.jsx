import styles from "./styles.module.scss";

function PaymentMethod() {
  const {
    containerMethods,
    titleMethods,
    boxImgageMethods,
    imgMethods,
    textSecure,
  } = styles;
  const srcMethods = [
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
    "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg",
  ];
  return (
    <div>
      <div className={containerMethods}>
        <div className={titleMethods}>
          GUARANTEED <span>SAFE</span> CHECKOUT
        </div>

        <div className={boxImgageMethods}>
          {srcMethods.map((src, index) => {
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

export default PaymentMethod;
