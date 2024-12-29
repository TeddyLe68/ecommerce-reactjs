import { createContext, useState } from "react";
import { getCart } from "@/apis/cartService";

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [listProductCart, setListProductCart] = useState([]);

  const handleGetListProductCart = (type, userId) => {
    if (userId && type === "cart") {
      getCart(userId)
        .then((res) => {
          setListProductCart(res.data.data);
        })
        .catch((err) => {
          setListProductCart([]);
        });
    }
  };

  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    handleGetListProductCart,
    listProductCart,
  };
  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};
