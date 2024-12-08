import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import ProductItem from "@components/ProductItem/ProductItem";
import PropTypes from "prop-types";

function PopularProduct({ data }) {
  const { container } = styles;
  const limitedData = data.slice(0, 8);
  return (
    <>
      <MainLayout>
        <div className={container}>
          {limitedData.map((item) => (
            <ProductItem
              key={item._id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
}
PopularProduct.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PopularProduct;
