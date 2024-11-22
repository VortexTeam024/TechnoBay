/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductContext } from "../contexts/Products.context";

// const recommend = [
// 	{
// 		id: 1,
// 		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
// 		price: 13450,
// 		originalPrice: 18700,
// 		discount: "28%",
// 		freeDelivery: true,
// 		image: "./assets/recommend1.png",
// 	},
// 	{
// 		id: 2,
// 		name: "Generic P9 Wireless Bluetooth Headset Pure Stereo Sound …",
// 		price: 320,
// 		originalPrice: 400,
// 		discount: "20%",
// 		freeDelivery: true,
// 		image: "./assets/recommend2.png",
// 	},
// 	{
// 		id: 3,
// 		name: "Apple iPhone 15 Pro Max 256GB Natural Titanium 5G …",
// 		price: "61,460",
// 		originalPrice: "62,700",
// 		discount: "10%",
// 		freeDelivery: true,
// 		image: "./assets/recommend4.png",
// 	},
// 	{
// 		id: 4,
// 		name: "Oraimo Watch 4 Plus Bluetooth Call Smart Watch 2…",
// 		price: "1,449",
// 		originalPrice: "2,400",
// 		discount: "52%",
// 		freeDelivery: true,
// 		image: "./assets/recommend3.png",
// 	},
// ];

// const laptops = [
// 	{
// 		id: 1,
// 		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
// 		price: 13450,
// 		originalPrice: 18700,
// 		discount: "28%",
// 		freeDelivery: true,
// 		image: "./assets/laptop1.png",
// 	},
// 	{
// 		id: 2,
// 		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
// 		price: 13450,
// 		originalPrice: 18700,
// 		discount: "28%",
// 		freeDelivery: true,
// 		image: "./assets/laptop2.png",
// 	},
// 	{
// 		id: 3,
// 		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
// 		price: 13450,
// 		originalPrice: 18700,
// 		discount: "28%",
// 		freeDelivery: true,
// 		image: "./assets/laptop3.png",
// 	},
// 	{
// 		id: 4,
// 		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
// 		price: 13450,
// 		originalPrice: 18700,
// 		discount: "28%",
// 		freeDelivery: true,
// 		image: "./assets/laptop4.png",
// 	},
// ];

// const mobiles = [
// 	{
// 		id: 1,
// 		name: "IPHONE 16 Pro Max 54 MPX and with Powerfull Processor, Scre..",
// 		price: "67,450",
// 		originalPrice: "70,700",
// 		discount: "28%",
// 		freeDelivery: true,
// 		image: "./assets/mobile1.png",
// 	},
// 	{
// 		id: 2,
// 		name: "IPHONE 16 Pro Max 54 MPX and with Powerfull Processor, Scre..",
// 		price: "67,450",
// 		originalPrice: "70,700",
// 		discount: "28%",
// 		freeDelivery: true,
// 		image: "./assets/mobile2.png",
// 	},
// 	{
// 		id: 3,
// 		name: "IPHONE 16 Pro Max 54 MPX and with Powerfull Processor, Scre..",
// 		price: "67,450",
// 		originalPrice: "70,700",
// 		discount: "28%",
// 		freeDelivery: true,
// 		image: "./assets/mobile3.png",
// 	},
// 	{
// 		id: 4,
// 		name: "IPHONE 16 Pro Max 54 MPX and with Powerfull Processor, Scre..",
// 		price: "67,450",
// 		originalPrice: "70,700",
// 		discount: "28%",
// 		freeDelivery: true,
// 		image: "./assets/mobile4.png",
// 	},
// ];

const brands = [
	"./assets/brand1.png",
	"./assets/brand2.png",
	"./assets/brand3.png",
	"./assets/brand4.png",
	"./assets/brand5.png",
	"./assets/brand6.png",
	"./assets/brand7.png",
	"./assets/brand8.png",
	"./assets/brand9.png",
	"./assets/brand10.png",
];

const Home = () => {
	const { products } = useContext(ProductContext);
  const [laptops, setLaptops] = useState([]);
	const [featuredProducts, setFeaturedProducts] = useState({
		laptop: null,
		phone: null,
		screen: null,
		smartWatch: null
	});
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    if (Array.isArray(products)) {
      const filteredLaptops = products
        .filter((product) => product.category.title === "Laptops")
        .slice(0, 4);
      setLaptops(filteredLaptops);

			const filteredPhones = products
        .filter((product) => product.category.title === "Phones")
        .slice(0, 4);
      setPhones(filteredPhones);

			const laptop = products.find(product => product.category.title === "Laptops");
			const phone = products.find(product => product.category.title === "Phones");
			const screen = products.find(product => product.category.title === "Screens");
			const smartWatch = products.find(product => product.category.title === "Smart Watches");

			setFeaturedProducts({
				laptop: laptop || null,
				phone: phone || null,
				screen: screen || null,
				smartWatch: smartWatch || null
			});
		}
  }, [products]);
	const handleSalePercentage = (originalPrice, discountedPrice) => {
		if (originalPrice <= 0 || discountedPrice < 0) {
			return "Invalid prices";
		}
		const salePercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
		return salePercentage.toFixed(2);
	}

  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };
	return (
		<>
			<Navbar />
			<main className="mt-[100px] lg:mt-[120px]">
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
										Discover the newest gadgets and tech essentials, from
										premium laptops to smart home innovations. Shop with ease,
										enjoy unbeatable prices, and elevate your digital lifestyle
										today!
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
										<h4 className="font-semibold text-[16px]">Top Rated</h4>
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
										<h4 className="font-semibold text-[16px]">
											Best Discounts
										</h4>
										<p className="text-[12px]">Enjoy and shopping</p>
									</div>
								</div>
							</div>
						</div>
						<img src="./assets/super-sale.png" alt="" />
						<div className="card w-[420px] h-[423px] border-[2px] px-5 rounded-xl border-[#aaa]">
							<h3 className="text-3xl font-bold text-primary py-6">
								Mega Deals
							</h3>
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
							<img
								src="./assets/category1.png"
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
								alt=""
							/>
						</div>
						<h5 className="text-xl font-semibold">Laptops</h5>
					</div>
					<div className="category flex flex-col items-center space-y-2 w-fit">
						<div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
							<img
								src="./assets/category2.png"
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
								alt=""
							/>
						</div>
						<h5 className="text-xl font-semibold">Mobiles</h5>
					</div>
					<div className="category flex flex-col items-center space-y-2 w-fit">
						<div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
							<img
								src="./assets/category3.png"
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
								alt=""
							/>
						</div>
						<h5 className="text-xl font-semibold">Televisions</h5>
					</div>
					<div className="category flex flex-col items-center space-y-2 w-fit">
						<div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
							<img
								src="./assets/category4.png"
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
								alt=""
							/>
						</div>
						<h5 className="text-xl font-semibold">Smart Watch</h5>
					</div>
					<div className="category flex flex-col items-center space-y-2 w-fit">
						<div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
							<img
								src="./assets/category5.png"
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
								alt=""
							/>
						</div>
						<h5 className="text-xl font-semibold">Tablet</h5>
					</div>
					<div className="category flex flex-col items-center space-y-2 w-fit">
						<div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
							<img
								src="./assets/category6.png"
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
								alt=""
							/>
						</div>
						<h5 className="text-xl font-semibold">Earphone</h5>
					</div>
					<div className="category flex flex-col items-center space-y-2 w-fit">
						<div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
							<img
								src="./assets/category7.png"
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
								alt=""
							/>
						</div>
						<h5 className="text-xl font-semibold">Camera</h5>
					</div>
					<div className="category flex flex-col items-center space-y-2 w-fit">
						<div className="image w-[110px] h-[110px] shadow-xl bg-white relative rounded-full">
							<img
								src="./assets/category8.png"
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
								alt=""
							/>
						</div>
						<h5 className="text-xl font-semibold">Accessory</h5>
					</div>
				</section>
				<section className="recommend container my-6">
					<h1 className="text-4xl font-bold pb-6">Recommended For You</h1>
					<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
					{Object.entries(featuredProducts)
						.filter(([key, product]) => product !== null)
						.map(([key, product]) => (
							<Link
								key={key}
								to={`/product/${product.id}`}
								className="product bg-white p-2 rounded-[20px] shadow-2xl"
							>
								<div
									className="image bg-[#F6F6F6] p-4 w-full h-[254px] justify-center flex rounded-[20px] relative"
									aria-label={`${product.title} Image`}
								>
									<img src={product.images} alt={product.name} />
									<div className="tools absolute flex flex-col justify-between top-5 right-2 h-[90%]">
										<button
											onClick={() => toggleFavorite(product.id)}
											aria-label={`${
												favorites.includes(product.id)
													? "Unfavorite"
													: "Favorite"
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
										<button aria-label={`Add ${product.title} to Cart`}>
											<i className="fa-solid fa-cart-plus fa-xl text-black hover:text-primary transition-all"></i>
										</button>
									</div>
								</div>
								<div className="details p-2">
									<h2 className="text-lg font-bold" aria-label={product.title}>
										{product.title}
									</h2>
									<div className="price py-1 pr-3 flex items-center justify-between">
										<p className="text-black font-light text-[16px] flex items-center gap-2 leading-none">
											EGP{" "}
											<span className="font-bold text-[20px]">
												{product.priceAfterDiscount}
											</span>
											<del>{product.price}</del>
										</p>
										<p
											className="percent text-[#1BB910] text-[16px] font-bold"
											aria-label={`Discount: ${product.discount}`}
										>
											{handleSalePercentage(product.price, product.priceAfterDiscount)} OFF
										</p>
									</div>
									<p className="free-delivery" aria-label="Free Delivery">
										<i className="fa-solid fa-truck fa-md mr-2"></i> Free
										Delivery
									</p>
								</div>
							</Link>
						))}
					</div>
				</section>
				<section className="news py-6 container grid grid-cols-1 md:grid-cols-2 gap-12">
					<img src="./assets/sale1.png" className="cursor-pointer" alt="" />
					<img src="./assets/sale2.png" className="cursor-pointer" alt="" />
				</section>
				<section className="laptops container my-6">
					<div className="heading pb-6 flex items-center justify-between">
						<h1 className="text-4xl font-bold">Laptops</h1>
						<button className="px-7 py-3 border-[3px] text-xl font-semibold border-primary text-primary rounded-[16px] transition-all hover:text-white hover:bg-primary">
							Show More
						</button>
					</div>
					<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
						{laptops.map((product) => (
							<Link
								key={product.id}
								to={`/product/${product.id}`}
								className="product bg-white p-2 rounded-[20px] shadow-2xl"
							>
								<div
									className="image bg-[#F6F6F6] p-4 w-full h-[254px] justify-center flex rounded-[20px] relative"
									aria-label={`${product.title} Image`}
								>
									<img src={product.images[0].url} alt={product.name} />
									<div className="tools absolute flex flex-col justify-between top-5 right-2 h-[90%]">
										<button
											onClick={() => toggleFavorite(product.id)}
											aria-label={`${
												favorites.includes(product.id)
													? "Unfavorite"
													: "Favorite"
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
										<button aria-label={`Add ${product.title} to Cart`}>
											<i className="fa-solid fa-cart-plus fa-xl text-black hover:text-primary transition-all"></i>
										</button>
									</div>
								</div>
								<div className="details p-2">
									<h2 className="text-lg font-bold" aria-label={product.title}>
										{product.title}
									</h2>
									<div className="price py-1 pr-3 flex items-center justify-between">
										<p className="text-black font-light text-[16px] flex items-center gap-2 leading-none">
											EGP{" "}
											<span className="font-bold text-[20px]">
												{product.priceAfterDiscount}
											</span>
											<del>{product.price}</del>
										</p>
										<p
											className="percent text-[#1BB910] text-[16px] font-bold"
											aria-label={`Discount: ${product.discount}`}
										>
											{handleSalePercentage(product.price, product.priceAfterDiscount)} OFF
										</p>
									</div>
									<p className="free-delivery" aria-label="Free Delivery">
										<i className="fa-solid fa-truck fa-md mr-2"></i> Free
										Delivery
									</p>
								</div>
							</Link>
						))}
					</div>
				</section>
				<section className="mobiles container my-6">
					<div className="heading pb-6 flex items-center justify-between">
						<h1 className="text-4xl font-bold">Mobiles</h1>
						<button className="px-7 py-3 border-[3px] text-xl font-semibold border-primary text-primary rounded-[16px] transition-all hover:text-white hover:bg-primary">
							Show More
						</button>
					</div>
					<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
						{phones.map((product) => (
							<Link
							key={product.id}
							to={`/product/${product.id}`}
							className="product bg-white p-2 rounded-[20px] shadow-2xl"
						>
							<div
								className="image bg-[#F6F6F6] p-4 w-full h-[254px] justify-center flex rounded-[20px] relative"
								aria-label={`${product.title} Image`}
							>
								<img src={product.images[0].url} alt={product.name} />
								<div className="tools absolute flex flex-col justify-between top-5 right-2 h-[90%]">
									<button
										onClick={() => toggleFavorite(product.id)}
										aria-label={`${
											favorites.includes(product.id)
												? "Unfavorite"
												: "Favorite"
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
									<button aria-label={`Add ${product.title} to Cart`}>
										<i className="fa-solid fa-cart-plus fa-xl text-black hover:text-primary transition-all"></i>
									</button>
								</div>
							</div>
							<div className="details p-2">
								<h2 className="text-lg font-bold" aria-label={product.title}>
									{product.title}
								</h2>
								<div className="price py-1 pr-3 flex items-center justify-between">
									<p className="text-black font-light text-[16px] flex items-center gap-2 leading-none">
										EGP{" "}
										<span className="font-bold text-[20px]">
											{product.priceAfterDiscount}
										</span>
										<del>{product.price}</del>
									</p>
									<p
										className="percent text-[#1BB910] text-[16px] font-bold"
										aria-label={`Discount: ${product.discount}`}
									>
										{handleSalePercentage(product.price, product.priceAfterDiscount)} OFF
									</p>
								</div>
								<p className="free-delivery" aria-label="Free Delivery">
									<i className="fa-solid fa-truck fa-md mr-2"></i> Free
									Delivery
								</p>
							</div>
							</Link>
						))}
					</div>
				</section>
				<section className="brands p-6 bg-white">
					<h1 className="lg:text-6xl md:text-4xl text-3xl text-center font-bold pt-8 pb-12">
						Your Favorite Brands
					</h1>
					<div className="container grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 items-center place-items-center">
						{brands.map((brand, index) => (
							<div key={index}>
								<img src={brand} />
							</div>
						))}
					</div>
				</section>
				<section className="feedbacks my-6 container flex items-center flex-wrap gap-6">
					<div className="p-2 md:w-[49%] w-full">
						<div className="heading">
							<h1 className="text-5xl font-bold">Feedback</h1>
							<p className="text-[#A5A5A5] text-[16px] pt-2">
								Customer feedback section provides user reviews, ratings, and
								comments on products and shopping experiences.
							</p>
						</div>
						<div className="content grid sm:grid-cols-2 grid-cols-1 gap-6 my-2">
							<div className="card p-4 bg-primary rounded-[28px]">
								<div className="card-head">
									<div className="profile flex items-center gap-2">
										<img
											src="./assets/feedback1.png"
											width={"30px"}
											height={"30px"}
											className="rounded-full object-contain"
											alt="profile"
										/>
										<h6 className="font-semibold text-white text-[10px]">
											Yousief Sameh
										</h6>
									</div>
									<p className="font-semibold text-[14px] italic pt-2 text-white">
										&quot;Great product quality, fast delivery, and helpful
										customer service. Highly recommend for future
										purchases!&quot;
									</p>
								</div>
							</div>
							<div className="card p-4 bg-primary rounded-[28px]">
								<div className="card-head">
									<div className="profile flex items-center gap-2">
										<img
											src="./assets/feedback2.png"
											width={"30px"}
											height={"30px"}
											className="rounded-full object-contain"
											alt="profile"
										/>
										<h6 className="font-semibold text-white text-[10px]">
											Yousief Sameh
										</h6>
									</div>
									<p className="font-semibold text-[14px] italic pt-2 text-white">
										&quot;Great product quality, fast delivery, and helpful
										customer service. Highly recommend for future
										purchases!&quot;
									</p>
								</div>
							</div>
							<div className="card p-4 bg-primary rounded-[28px]">
								<div className="card-head">
									<div className="profile flex items-center gap-2">
										<img
											src="./assets/feedback3.png"
											width={"30px"}
											height={"30px"}
											className="rounded-full object-contain"
											alt="profile"
										/>
										<h6 className="font-semibold text-white text-[10px]">
											Yousief Sameh
										</h6>
									</div>
									<p className="font-semibold text-[14px] italic pt-2 text-white">
										&quot;Great product quality, fast delivery, and helpful
										customer service. Highly recommend for future
										purchases!&quot;
									</p>
								</div>
							</div>
							<div className="card p-4 bg-primary rounded-[28px]">
								<div className="card-head">
									<div className="profile flex items-center gap-2">
										<img
											src="./assets/feedback4.png"
											width={"30px"}
											height={"30px"}
											className="rounded-full object-contain"
											alt="profile"
										/>
										<h6 className="font-semibold text-white text-[10px]">
											Yousief Sameh
										</h6>
									</div>
									<p className="font-semibold text-[14px] italic pt-2 text-white">
										&quot;Great product quality, fast delivery, and helpful
										customer service. Highly recommend for future
										purchases!&quot;
									</p>
								</div>
							</div>
						</div>
					</div>
					<form className="md:w-[49%] w-full flex flex-col items-center gap-3">
						<h1 className="text-[40px] font-bold">Write Feedback</h1>
						<input
							type="text"
							placeholder="Your Full Name ..."
							className="px-5 py-3 rounded-[16px] bg-[#ddd] placeholder:text-black font-semibold w-[80%]"
						/>
						<input
							type="email"
							placeholder="Your Mail ..."
							className="px-5 py-3 rounded-[16px] bg-[#ddd] placeholder:text-black font-semibold w-[80%]"
						/>
						<textarea
							placeholder="Your Feedback ..."
							className="px-5 py-3 rounded-[16px] bg-[#ddd] placeholder:text-black font-semibold w-[80%] h-[140px]"
						/>
						<button className="btn-primary w-[80%]">Submit</button>
					</form>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
