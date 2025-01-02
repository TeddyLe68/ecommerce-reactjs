import React from "react";
import styles from "../../styles.module.scss";
import SelectBox from "@/pages/OurShop/components/SelectBox";

function CartTable() {
  const { cartTable } = styles;
  const cartItems = [
    {
      id: 1,
      name: "Amet faucibus nunc",
      size: "M",
      price: 1879.99,
      sku: 87654,
      quantity: 1,
      image:
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min.jpg",
    },
    {
      id: 2,
      name: "Consectetur nibh at",
      size: "M",
      price: 119.99,
      sku: 12349,
      quantity: 1,
      image:
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min.jpg",
    },
  ];
  const showOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ];

  const getValueSelect = (value) => {
    console.log(value);
  };
  return (
    <div className={cartTable}>
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th></th>
            <th>PRICE</th>
            <th>SKU</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Size: {item.size}</p>
                </div>
              </td>
              <td>🗑️</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.sku}</td>
              <td>
                <SelectBox
                  options={showOptions}
                  getValue={getValueSelect}
                  type="show"
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
