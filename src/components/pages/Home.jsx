import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
    price: 13450,
    originalPrice: 18700,
    discount: "28%",
    freeDelivery: true,
    image: "./assets/recommend1.png",
  },
  {
    id: 2,
    name: "Generic P9 Wireless Bluetooth Headset Pure Stereo Sound …",
    price: 320,
    originalPrice: 400,
    discount: "20%",
    freeDelivery: true,
    image: "./assets/recommend2.png",
  },
  {
    id: 3,
    name: "Apple iPhone 15 Pro Max 256GB Natural Titanium 5G …",
    price: "61,460",
    originalPrice: "62,700",
    discount: "10%",
    freeDelivery: true,
    image: "./assets/recommend4.png",
  },
  {
    id: 4,
    name: "Oraimo Watch 4 Plus Bluetooth Call Smart Watch 2…",
    price: "1,449",
    originalPrice: "2,400",
    discount: "52%",
    freeDelivery: true,
    image: "./assets/recommend3.png",
  },
];

const Home = () => {
	const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };
	return (
		<main className="bg-[#f1f1f1] mt-[100px] lg:mt-[120px]">
			<section className="hero relative w-full h-heroSize overflow-hidden z-40">
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					loop={true}
					className="h-full w-full"
				>
					<SwiperSlide>
						<div className="relative w-full h-screen lg:h-heroSize">
							<div className="text absolute flex flex-col items-center justify-center h-full w-full z-50 px-4 lg:px-0">
								<h1 className="text-3xl lg:text-5xl font-bold text-white text-center leading-snug lg:leading-relaxed mb-2 lg:mb-3">
									Discover the Latest in Electronics Shop{" "}
									<br className="hidden lg:block" /> Smart, Live Connected!
								</h1>
								<p className="text-base lg:text-lg font-normal text-white text-center max-w-4xl  ">
									Explore top electronics: smartphones, laptops, smart home
									devices, and more. Shop now for great deals!
								</p>
							</div>
							<div className="overlay bg-overlay w-full h-full absolute"></div>
							<img
								src="./assets/Hero1.png"
								className="w-full h-full object-cover"
								alt="Hero Slide 1"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative w-full h-screen lg:h-heroSize">
							<div className="text absolute flex flex-col items-center justify-center h-full w-full z-50 px-4 lg:px-0">
								<h1 className="text-3xl lg:text-5xl font-bold text-white text-center leading-snug lg:leading-relaxed mb-2 lg:mb-3">
									Your One-Stop Shop for the Latest Electronics
								</h1>
								<p className="text-base lg:text-lg font-normal text-white text-center max-w-4xl  ">
									Discover the newest gadgets and tech essentials, from premium
									laptops to smart home innovations. Shop with ease, enjoy
									unbeatable prices, and elevate your digital lifestyle today!
								</p>
							</div>
							<div className="overlay bg-overlay w-full h-full absolute"></div>
							<img
								src="./assets/Hero2.png"
								className="w-full h-full object-cover"
								alt="Hero Slide 2"
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</section>
			<section className="sales py-6">
				<div className="container flex flex-wrap justify-center gap-5 md:justify-between items-center">
					<div className="card w-[420px] h-[423px] border-[2px] px-5 rounded-xl border-[#aaa]">
						<h3 className="text-3xl font-bold text-primary py-6">Shop Now</h3>
						<div className="card-body grid grid-cols-2 gap-[40px]">
							<div className="bg-[#D1E7FB] w-[175px] rounded-[10px]">
								<img src="./assets/shopcard1.png" alt="" />
								<div className="text p-1 px-2">
									<h4 className="font-semibold text-[16px]">
										Top Rated Products
									</h4>
									<p className="text-[12px]">Stay in trend</p>
								</div>
							</div>
							<div className="bg-[#D1E7FB] w-[175px] rounded-[10px]">
								<img src="./assets/shopcard2.png" alt="" />
								<div className="text p-1 px-2">
									<h4 className="font-semibold text-[16px]">New Arrivals</h4>
									<p className="text-[12px]">Fresh takes you need</p>
								</div>
							</div>
							<div className="bg-[#D1E7FB] w-[175px] rounded-[10px]">
								<img src="./assets/shopcard3.png" alt="" />
								<div className="text p-1 px-2">
									<h4 className="font-semibold text-[16px]">Bestseller</h4>
									<p className="text-[12px]">Fill your cart</p>
								</div>
							</div>
							<div className="bg-[#D1E7FB] w-[175px] rounded-[10px]">
								<img src="./assets/shopcard4.png" alt="" />
								<div className="text p-1 px-2">
									<h4 className="font-semibold text-[16px]">Best Discounts</h4>
									<p className="text-[12px]">Enjoy and shopping</p>
								</div>
							</div>
						</div>
					</div>
					<img src="./assets/super-sale.png" alt="" />
					<div className="card w-[420px] h-[423px] border-[2px] px-5 rounded-xl border-[#aaa]">
						<h3 className="text-3xl font-bold text-primary py-6">Mega Deals</h3>
						<div className="card-body grid grid-cols-2 gap-[10px]">
							<div className="bg-[#D1E7FB] w-[175px] rounded-[10px]">
								<div className="image flex justify-center">
									<img src="./assets/salecard1.png" alt="" />
								</div>
								<div className="text p-1 px-2">
									<p className="text-[12px]">Samsung</p>
									<h4 className="font-semibold text-[16px]">Get up to 40%</h4>
								</div>
							</div>
							<div className="bg-[#D1E7FB] w-[175px] rounded-[10px]">
								<div className="image flex justify-center py-2">
									<img src="./assets/salecard2.png" alt="" />
								</div>
								<div className="text p-1 px-2">
									<p className="text-[12px]">Apple</p>
									<h4 className="font-semibold text-[16px]">Get up to 35%</h4>
								</div>
							</div>
							<div className="bg-[#D1E7FB] w-[175px] rounded-[10px]">
								<div className="image flex justify-center py-1">
									<img src="./assets/salecard3.png" alt="" />
								</div>
								<div className="text p-1 px-2">
									<p className="text-[12px]">Apple</p>
									<h4 className="font-semibold text-[16px]">Get up to 35%</h4>
								</div>
							</div>
							<div className="bg-[#D1E7FB] w-[175px] rounded-[10px]">
								<div className="image flex justify-center py-4">
									<img src="./assets/salecard4.png" alt="" />
								</div>
								<div className="text p-1 px-2">
									<p className="text-[12px]">ASUS</p>
									<h4 className="font-semibold text-[16px]">Get up to 45%</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      <section className="categories container bg-white rounded-[28px] p-5 flex flex-wrap items-center justify-between">
        <div className="category flex flex-col items-center space-y-2 w-fit">
          <div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
            <img src="./assets/category1.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
          </div>
          <h5 className="text-xl font-semibold">Laptops</h5>
        </div>
        <div className="category flex flex-col items-center space-y-2 w-fit">
          <div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
            <img src="./assets/category2.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
          </div>
          <h5 className="text-xl font-semibold">Mobiles</h5>
        </div>
        <div className="category flex flex-col items-center space-y-2 w-fit">
          <div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
            <img src="./assets/category3.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
          </div>
          <h5 className="text-xl font-semibold">Televisions</h5>
        </div>
        <div className="category flex flex-col items-center space-y-2 w-fit">
          <div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
            <img src="./assets/category4.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
          </div>
          <h5 className="text-xl font-semibold">Smart Watch</h5>
        </div>
        <div className="category flex flex-col items-center space-y-2 w-fit">
          <div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
            <img src="./assets/category5.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
          </div>
          <h5 className="text-xl font-semibold">Tablet</h5>
        </div>
        <div className="category flex flex-col items-center space-y-2 w-fit">
          <div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
            <img src="./assets/category6.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
          </div>
          <h5 className="text-xl font-semibold">Earphone</h5>
        </div>
        <div className="category flex flex-col items-center space-y-2 w-fit">
          <div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
            <img src="./assets/category7.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
          </div>
          <h5 className="text-xl font-semibold">Camera</h5>
        </div>
        <div className="category flex flex-col items-center space-y-2 w-fit">
          <div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
            <img src="./assets/category8.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
          </div>
          <h5 className="text-xl font-semibold">Accessory</h5>
        </div>
      </section>
			<section className="recommend container my-6">
        <h1 className="text-4xl font-bold pb-6">Recommended For You</h1>
        <div className="products grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {products.map((product) => (
            <article
              key={product.id}
              className="product bg-white p-2 rounded-[20px] shadow-2xl"
            >
              <div
                className="image bg-[#F6F6F6] p-4 w-full h-[254px] justify-center flex rounded-[20px] relative"
                aria-label={`${product.name} Image`}
              >
                <img src={product.image} alt={product.name} />
                <div className="tools absolute flex flex-col justify-between top-5 right-2 h-[90%]">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    aria-label={`${
                      favorites.includes(product.id) ? "Unfavorite" : "Favorite"
                    } ${product.name}`}
                  >
                    <i
                      className={`fa-solid fa-heart fa-xl hover:text-[#ff0000] transition-all ${
                        favorites.includes(product.id)
                          ? "text-[#ff0000]"
                          : "text-[#ccc]"
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
                    <span className="font-bold text-[20px]">
                      {product.price}
                    </span>
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
            </article>
          ))}
        </div>
      </section>
		</main>
	);
};

export default Home;
