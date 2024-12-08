import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import Info from "@components/Info/Info";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";
import { useEffect, useState } from "react";
import { getProducts } from "@/apis/productService";
import PopularProduct from "@components/PopularProduct/PopularProduct";
import SaleHomepage from "@components/SaleHomepage/SaleHomepage";

function HomePage() {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      setListProduct(res.contents);
    });
  }, []);
  return (
    <>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadingListProduct data={listProduct.slice(0, 2)} />
      <PopularProduct data={listProduct.slice(2, listProduct.length)} />
      <SaleHomepage />
      <div style={{ height: "200px" }}></div>
    </>
  );
}

export default HomePage;
