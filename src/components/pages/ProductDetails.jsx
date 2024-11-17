import Navbar from "../ui/Navbar"
import Footer from "../ui/Footer"
import { useState } from "react"
import { Link } from "react-router-dom";

const laptops = [
	{
		id: 1,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "/assets/laptop1.png",
	},
	{
		id: 2,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "/assets/laptop2.png",
	},
	{
		id: 3,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "/assets/laptop3.png",
	},
	{
		id: 4,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "/assets/laptop4.png",
	},
];

const ProductDetails = () => {
  const [count, setCount] = useState(0);
  const [favorites, setFavorites] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bg-[#f1f1f1] mt-[100px] lg:mt-[140px]">
        <section className="main-product container p-4 my-6 bg-white grid grid-cols-1 lg:grid-cols-2 gap-6 items-center rounded">
          <div className="col">
            <img src="/assets/ProductDetails.png" alt="" className="w-full h-auto" />
            <div className="tools mx-4 flex flex-wrap gap-4 items-center">
              <div className="bg-[#f1f1f1] px-4 py-2 w-fit flex items-center gap-6 rounded-lg">
                <button
                  onClick={() => {
                    if (count < 9) setCount(count + 1);
                  }}
                  className="font-semibold text-black text-2xl"
                >
                  +
                </button>
                <span className="font-bold text-black text-2xl block w-[15px]">{count}</span>
                <button
                  onClick={() => {
                    if (count > 0) setCount(count - 1);
                  }}
                  className="font-bold text-black text-2xl"
                >
                  -
                </button>
              </div>
              <button className="btn-primary md:text-xl text-lg flex-1">Add To Cart</button>
              <button
                onClick={() => setFavorites(!favorites)}
                className="bg-[#f1f1f1] px-4 py-3 h-full rounded-lg w-fit"
              >
                <i
                  className={`fa-solid fa-heart fa-xl hover:text-[#ff0000] transition-all ${
                    favorites ? "text-[#ff0000]" : "text-[#ccc]"
                  }`}
                ></i>
              </button>
            </div>
          </div>
          <div className="col">
            <h2 className="text-3xl font-bold mb-3">
              15S-Fq5042Ne Laptop With 15.6 Inch FHD /
              <br />
              Core I7-1255U/ 16GB RAM/ 512GB SSD/
              <br />
              Intel Iris Xe / Windows 11 English/
              <br />
              Arabic Natural Silver
            </h2>
            <ul className="details space-y-3">
              <li className="text-[#B7B7B7] text-[20px]">Model Number : 6L8K2EA#ABV</li>
              <li className="text-[#717171] text-[20px]">Was: <del>EGP 36699.00</del></li>
              <li className="text-[#717171] text-[20px]">
                Now:{" "}
                <span className="text-[28px] font-bold text-black px-2">
                  EGP 30305.00
                </span>{" "}
                Inclusive of VAT
              </li>
              <li className="text-[#717171] text-[20px]">
                Saving: EGP 6394.00 <span className="text-[#1BB910] pl-12">17% Off</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="product-details container p-4 my-6 bg-white rounded">
          <h2 className="text-3xl font-bold mb-3 pb-2 w-full border-b-[3px] border-b-black">
            Product Description:
          </h2>
          <div className="content grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ul className="col">
              <li className="m-3 mt-0 text-xl">Specifications</li>
              <li className="flex items-center justify-between px-6 py-3 bg-[#0583d833] rounded-lg">
                <span>Processor Speed</span>
                <span>4.7 GHz</span>
              </li>
              <li className="flex items-center justify-between px-6 py-3 bg-white rounded-lg">
                <span>RAM Size</span>
                <span>16 GB</span>
              </li>
              <li className="flex items-center justify-between px-6 py-3 bg-[#0583d833] rounded-lg">
                <span>Internal Memory</span>
                <span>512 GB</span>
              </li>
              <li className="flex items-center justify-between px-6 py-3 bg-white rounded-lg">
                <span>Screen Size</span>
                <span>15.6 In</span>
              </li>
              <li className="flex items-center justify-between px-6 py-3 bg-[#0583d833] rounded-lg">
                <span>Display Resolution</span>
                <span>1920x1080</span>
              </li>
              <li className="flex items-center justify-between px-6 py-3 bg-white rounded-lg">
                <span>Color Name</span>
                <span>Natural Silver</span>
              </li>
              <li className="flex items-center justify-between px-6 py-3 bg-[#0583d833] rounded-lg">
                <span>Keyboard Language</span>
                <span>English/Arabic</span>
              </li>
              <li className="flex items-center justify-between px-6 py-3 bg-white rounded-lg">
                <span>Display Type</span>
                <span>LED</span>
              </li>
              <li className="flex items-center justify-between px-6 py-3 bg-[#0583d833] rounded-lg">
                <span>Display Resolution Type</span>
                <span>Full HD</span>
              </li>
              <li className="flex items-center justify-between px-6 py-3 bg-white rounded-lg">
                <span>Number of Cores</span>
                <span>10-Core</span>
              </li>
              <li className="flex items-center justify-between px-6 py-3 bg-[#0583d833] rounded-lg">
                <span>Operating System</span>
                <span>Windows</span>
              </li>
            </ul>
            <div className="col">
              <span className="text-xl m-4 mt-0">Highlights</span>
              <ul className="list-disc ml-11 mt-1 my-6">
                <li className="text-[13px]">
                  Empower your business and do great things with the windows 11 Home
                </li>
                <li className="text-[13px]">
                  Intel vpro technology makes enterprise-level manageability even more
                  convenient and efficient
                </li>
                <li className="text-[13px]">
                  Excellent choice for both business and personal computing needs
                </li>
              </ul>
              <div className="ml-4 flex flex-col gap-6">
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
                  <span className="text-lg text-[#818181]">
                    This item cannot be exchanged or returned
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-details container p-4 my-6 bg-white rounded">
          <h2 className="text-3xl font-bold mb-3 pb-2 w-full border-b-[3px] border-b-black">
            More From Laptops:
          </h2>
          <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {laptops.map((product) => (
              <Link
                key={product.id}
                to="/1234dsa/details"
                className="product bg-white p-2 rounded-[20px] shadow-2xl"
              >
                <div
                  className="image bg-[#F6F6F6] p-4 w-full h-[254px] justify-center flex rounded-[20px] relative"
                  aria-label={`${product.name} Image`}
                >
                  <img src={product.image} alt={product.name} />
                  <div className="tools absolute flex flex-col justify-between top-5 right-2 h-[90%]">
                    <button>
                      <i
                        className={`fa-solid fa-heart fa-xl hover:text-[#ff0000] transition-all ${
                          favorites ? "text-[#ff0000]" : "text-[#ccc]"
                        }`}
                      ></i>
                    </button>
                    <button aria-label={`Add ${product.name} to Cart`}>
                      <i className="fa-solid fa-cart-plus fa-xl text-black hover:text-primary transition-all"></i>
                    </button>
                  </div>
                </div>
                <div className="details p-2">
                  <h2 className="text-lg font-bold" aria-label={product.name}>
                    {product.name}
                  </h2>
                  <div className="price py-1 pr-3 flex items-center justify-between">
                    <p className="text-black font-light text-[16px] flex items-center gap-2 leading-none">
                      EGP{" "}
                      <span className="font-bold text-[20px]">{product.price}</span>
                      <del>{product.originalPrice}</del>
                    </p>
                    <p
                      className="percent text-[#1BB910] text-[16px] font-bold"
                      aria-label={`Discount: ${product.discount}`}
                    >
                      {product.discount} OFF
                    </p>
                  </div>
                  {product.freeDelivery && (
                    <p className="free-delivery" aria-label="Free Delivery">
                      <i className="fa-solid fa-truck fa-md mr-2"></i> Free Delivery
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails