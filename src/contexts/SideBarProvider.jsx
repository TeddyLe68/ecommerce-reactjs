import { createContext, useEffect, useState } from "react";
import { getCart } from "@/apis/cartService";
import Cookies from "js-cookie";

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [listProductCart, setListProductCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);
  const userId = Cookies.get("userId");

  const handleGetListProductCart = (type, userId) => {
    if (userId && type === "cart") {
      setIsLoading(true);
      getCart(userId)
        .then((res) => {
          setListProductCart(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setListProductCart([]);
          setIsLoading(false);
        });
    }
  };

  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    isLoading,
    setIsLoading,
    listProductCart,
    handleGetListProductCart,
    userId,
    detailProduct,
    setDetailProduct,
    setListProductCart,
  };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};
