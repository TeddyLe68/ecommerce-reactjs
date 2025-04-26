import { addProductToCart } from "@/apis/cartService";

export const handleAddProductToCart = (
  userId,
  sizeChoose,
  productId,
  setIsOpen,
  setType,
  toast,
  quantity,
  setIsLoading,
  handleGetListProductCart
) => {
  if (!userId) {
    setIsOpen(true);
    setType("login");
    toast.warning("Please login to add product to cart!", {
      position: "bottom-right",
    });
    return;
  }
  if (!sizeChoose) {
    toast.warning("Please choose size!", {
      position: "bottom-right",
    });
    return;
  }
  const data = {
    userId,
    productId,
    quantity,
    size: sizeChoose,
  };
  setIsLoading(true);
  addProductToCart(data)
    .then((res) => {
      setIsOpen(true);
      setType("cart");
      toast.success("Add product to cart successfully!");
      setIsLoading(false);
      handleGetListProductCart("cart", userId);
    })
    .catch((err) => {
      toast.error("Add product to cart failed!");
      setIsLoading(false);
    });
};
