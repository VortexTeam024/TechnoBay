import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/Products.context";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateCart,
    fetchDataFromApi,
    fetchOneProduct,
    setCart,
  } = useContext(ProductContext);

  const [enrichedCartItems, setEnrichedCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch details for each product
  const enrichCartItems = async () => {
    try {
      const cartItems = cart?.data?.cartItems || [];
  
      const enrichedItems = await Promise.all(
        cartItems.map(async (item) => {
          const productDetails = await fetchOneProduct(item.product);
          return { ...productDetails };
        })
      );
  
      setEnrichedCartItems(enrichedItems);
    } catch (error) {
      console.error("Error enriching cart items:", error);
    }
  };

  useEffect(() => {
    const FetchDataCart = async () => {
      await fetchDataFromApi(import.meta.env.VITE_CART_API_URL, setCart);
      setLoading(false);
    }
    FetchDataCart();
  }, [])

  useEffect(() => {
    if (cart?.data?.cartItems) {
      enrichCartItems();
    }
  }, [cart]);

  // Handle Increase
  const handleIncrease = async (product) => {
    try {
      const newQuantity = product.quantity + 1;
      await updateCart(product._id, newQuantity);
      await fetchDataFromApi(import.meta.env.VITE_CART_API_URL, setCart);
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  // Handle Decrease
  const handleDecrease = async (product) => {
    try {
      if (product.quantity > 1) {
        const newQuantity = product.quantity - 1;
        await updateCart(product._id, newQuantity);
      } else {
        await removeFromCart(product._id);
      }
      await fetchDataFromApi(import.meta.env.VITE_CART_API_URL, setCart);
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  // Handle Remove
  const handleRemove = async (id) => {
    try {
      await removeFromCart(id);
      await fetchDataFromApi(import.meta.env.VITE_CART_API_URL, setCart);
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  // Calculate Total
  const calculateTotal = () => {
    return (
      cart?.data?.cartItems.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ) || 0
    ).toFixed(2);
  };

  const handleSalePercentage = (originalPrice, discountedPrice) => {
		if (originalPrice <= 0 || discountedPrice < 0) {
			return "Invalid prices";
		}
		const salePercentage =
			((originalPrice - discountedPrice) / originalPrice) * 100;
		return salePercentage.toFixed(2);
	};

  console.log(enrichedCartItems);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="mt-[145px] lg:mt-[140px]">
      <h1 className="text-5xl font-bold italic border-b-[3px] border-black pb-2 mx-auto my-12 w-fit">
        Cart
      </h1>
      <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div className="content col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2">
          {cart?.data?.cartItems[0] !== undefined ? enrichedCartItems?.map((product, index) => (
            <div
              className="product bg-white p-5 mb-4 flex flex-col gap-12 lg:flex-row rounded-md"
              key={product.data._id}
            >
              <div className="product-image">
                <img
                  src={product.data?.images?.[0]?.url || "/placeholder.png"}
                  className="w-[250px] h-[250px] mx-auto lg:mx-0"
                  alt={product.data.title}
                />
              </div>
              <div className="product-details flex-1">
                <h2 className="text-2xl mb-3 font-bold">{product.data.title}</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-6">
                    <i className="fa-solid fa-file-contract text-[34px] text-primary"></i>
                    <span className="text-lg text-[#818181]">1 year warranty</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <i className="fa-solid fa-truck text-[21px] text-primary"></i>
                    <span className="text-lg text-[#818181]">
                      Free delivery on Pickup Points
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <i className="fa-solid fa-rotate text-[25px] text-primary"></i>
                    <span className="text-lg text-[#818181]">
                      This item cannot be exchanged or returned
                    </span>
                  </div>
                </div>
                <div className="bottom mt-6 flex items-center justify-between w-[90%]">
                  <div className="price">
                    <h5 className="text-2xl font-bold">
                      <span className="mr-2">EGP</span>
                      {product.data.priceAfterDiscount}
                    </h5>
                    <div className="price-details flex items-center gap-4">
                      <h6 className="text-[#717171]">
                        <del>
                          <span>EGP</span> {product.data.price}
                        </del>
                      </h6>
                      <h6 className="text-lg text-[#2ecc71]">{handleSalePercentage(product.data.price, product.data.priceAfterDiscount)}% Off</h6>
                    </div>
                  </div>
                  <div className="tools flex items-center gap-4">
                    <div className="bg-[#f1f1f1] px-4 py-2 w-fit flex items-center gap-6 rounded-lg">
                      <button
                        onClick={() => handleIncrease(cart?.data?.cartItems?.[index] || {})}
                        className="font-semibold text-black text-2xl"
                      >
                        +
                      </button>
                      <span className="font-bold text-black text-2xl block w-[15px]">
                        {cart?.data?.cartItems?.[index]?.quantity || 0}
                      </span>
                      <button
                        onClick={() => handleDecrease(cart?.data?.cartItems?.[index] || {})}
                        className="font-bold text-black text-2xl"
                      >
                        -
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(cart?.data?.cartItems[index]._id)}
                      className="bg-[#f1f1f1] px-4 py-3 h-full rounded-lg w-fit"
                    >
                      <i className="fa-solid fa-trash fa-xl text-[#ccc] hover:text-[#ff0000] transition-all"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <p>Not Found</p>
          )}
        </div>

        <div className="details p-4 rounded-md bg-white h-fit w-full lg:w-[400px] mx-auto">
          <h5 className="text-3xl p-3 mb-[11px] font-bold">My Order</h5>
          <div className="shipping flex items-center justify-between mx-4 my-6">
            <p className="text-xl font-semibold">Shipping Fee</p>
            <span className="text-[#2ecc71] text-xl">Free</span>
          </div>
          <div className="total mx-4 my-6">
            <p className="text-xl font-semibold">
              Total{" "}
              <span className="text-[#717171] ml-2 font-medium">(Inclusive of VAT)</span>
            </p>
            <h4 className="mt-2">
              <span className="mr-2">EGP</span>
              <span className="text-3xl font-bold">{calculateTotal()}</span>
            </h4>
          </div>
          <button className="btn-primary w-full uppercase">Checkout</button>
        </div>
      </div>
    </main>
  );
};

export default Cart;