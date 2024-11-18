import { useState } from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const Cart = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <main className="mt-[145px] lg:mt-[140px]">
        <h1 className="text-5xl font-bold italic border-b-[3px] border-black pb-2 mx-auto my-12 w-fit">
          Cart
        </h1>
        <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div className="content col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2">
            {[...Array(4)].map((_, index) => (
              <div className="product bg-white p-5 mb-4 flex flex-col gap-12 lg:flex-row rounded-md" key={index}>
                <div className="product-image">
                  <img
                    src="./assets/ProductDetails.png"
                    className="w-[250px] h-[250px] mx-auto lg:mx-0"
                    alt="product"
                  />
                </div>
                <div className="product-details flex-1">
                  <h2 className="text-xl font-bold mb-3">
                    15S-Fq5042Ne Laptop With 15.6 Inch FHD / Core I7-1255U/ 16GB RAM/ 512GB SSD/ Intel Iris Xe / Windows 11 English/ Arabic Natural Silver
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-6">
                      <i className="fa-solid fa-file-contract text-[34px] text-primary"></i>
                      <span className="text-lg text-[#818181]">1 year warranty</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <i className="fa-solid fa-truck text-[21px] text-primary"></i>
                      <span className="text-lg text-[#818181]">Free delivery on Pickup Points</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <i className="fa-solid fa-rotate text-[25px] text-primary"></i>
                      <span className="text-lg text-[#818181]">This item cannot be exchanged or returned</span>
                    </div>
                  </div>
                  <div className="bottom my-2 flex items-center justify-between w-[90%]">
                    <div className="price">
                      <h5 className="text-2xl font-bold">
                        <span className="mr-2">EGP</span>30305.00
                      </h5>
                      <div className="price-details flex items-center gap-4">
                        <h6 className="text-[#717171]">
                          <del>
                            <span>EGP</span>36699.00
                          </del>
                        </h6>
                        <h6 className="text-lg text-[#2ecc71]">17% Off</h6>
                      </div>
                    </div>
                    <div className="tools flex items-center gap-4">
                      <div className="bg-[#f1f1f1] px-4 py-2 w-fit flex items-center gap-6 rounded-lg">
                        <button
                          onClick={() => {
                            if (count < 9) setCount(count + 1);
                          }}
                          className="font-semibold text-black text-2xl"
                        >
                          +
                        </button>
                        <span className="font-bold text-black text-2xl block w-[15px]">
                          {count}
                        </span>
                        <button
                          onClick={() => {
                            if (count > 0) setCount(count - 1);
                          }}
                          className="font-bold text-black text-2xl"
                        >
                          -
                        </button>
                      </div>
                      <button className="bg-[#f1f1f1] px-4 py-3 h-full rounded-lg w-fit">
                        <i className="fa-solid fa-trash fa-xl text-[#ccc] hover:text-[#ff0000] transition-all"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="details p-4 rounded-md bg-white h-fit lg:w-full md:w-[300px] mx-auto">
            <h5 className="text-3xl p-3 mb-[11px] font-bold">My Order</h5>
            <form action="" className="flex items-center">
              <input
                type="text"
                name="coupon"
                placeholder="Coupon"
                className="px-4 py-3 bg-[#f1f1f1] placeholder:text-[#bbb] flex-1 text-lg rounded-l-[16px] outline-none"
              />
              <button type="submit" className="uppercase btn-primary px-4 py-3 rounded-l-none">Apply</button>
            </form>
            <div className="shipping flex items-center justify-between mx-4 my-6">
              <p className="text-xl font-semibold">Shipping Fee</p>
              <span className="text-[#2ecc71] text-xl">Free</span>
            </div>
            <div className="total mx-4 my-6">
              <p className="text-xl font-semibold">Total <span className="text-[#717171] ml-2 font-medium">(Inclusive of VAT)</span></p>
              <h4 className="mt-2">
                <span className="mr-2">EGP</span>
                <span className="text-3xl font-bold">30305.00</span>
              </h4>
            </div>
            <button className="btn-primary w-full uppercase">Checkout</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
