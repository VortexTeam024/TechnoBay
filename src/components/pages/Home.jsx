/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductContext } from "../contexts/Products.context";

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
	const [laptops, setLaptops] = useState([]);
	const {
		products,
		wishlist,
		addToWishlist,
		removeFromWishlist,
		cart,
		addToCart,
		removeFromCart,
	} = useContext(ProductContext);

	const [featuredProducts, setFeaturedProducts] = useState({
		laptop: null,
		phone: null,
		screen: null,
		smartWatch: null,
	});
	const [phones, setPhones] = useState([]);

	useEffect(() => {
		if (Array.isArray(products)) {
			const filteredLaptops = products
				.filter((product) => product.category?.title === "Laptops")
				.slice(0, 4);
			setLaptops(filteredLaptops);

			const filteredPhones = products
				.filter((product) => product.category?.title === "Phones")
				.slice(0, 4);
			setPhones(filteredPhones);

			const laptop = products.find(
				(product) => product.category?.title === "Laptops"
			);
			const phone = products.find(
				(product) => product.category?.title === "Phones"
			);
			const screen = products.find(
				(product) => product.category?.title === "Screens"
			);
			const smartWatch = products.find(
				(product) => product.category?.title === "Smart Watches"
			);

			setFeaturedProducts({
				laptop: laptop || null,
				phone: phone || null,
				screen: screen || null,
				smartWatch: smartWatch || null,
			});
		}
	}, [products]);

	const handleSalePercentage = (originalPrice, discountedPrice) => {
		if (originalPrice <= 0 || discountedPrice < 0) {
			return "Invalid prices";
		}
		const salePercentage =
			((originalPrice - discountedPrice) / originalPrice) * 100;
		return salePercentage.toFixed(2);
	};

	const toggleFavorite = (product) => {
		if (wishlist.some((item) => item.id === product.id)) {
			removeFromWishlist(product.id);
		} else {
			addToWishlist(product);
		}
	};

	const isInCart = (id) => Array.isArray(cart) && cart.some((item) => item.id === id);

	const toggleCart = (product) => {
		if (isInCart(product._id)) {
			removeFromCart(product._id);
		} else {
			addToCart(product);
		}
	};

	return (
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
				<div className="md:container mx-auto w-[95%] grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 items-center place-items-center">
					<div className="card md:w-[420px] md:h-[423px] h-fit md:py-0 pb-3 border-[2px] px-5 rounded-xl border-[#aaa]">
						<h3 className="text-3xl font-bold text-primary py-6">Shop Now</h3>
						<div className="card-body grid grid-cols-2 md:gap-[40px] gap-[20px]">
							<div className="bg-[#D1E7FB] md:w-[175px] w-[150px] rounded-[10px]">
								<img src="./assets/shopcard1.png" alt="" />
								<div className="text p-1 px-2">
									<h4 className="font-semibold text-[16px]">Top Rated</h4>
									<p className="text-[12px]">Stay in trend</p>
								</div>
							</div>
							<div className="bg-[#D1E7FB] md:w-[175px] w-[150px] rounded-[10px]">
								<img src="./assets/shopcard2.png" alt="" />
								<div className="text p-1 px-2">
									<h4 className="font-semibold text-[16px]">New Arrivals</h4>
									<p className="text-[12px]">Fresh takes you need</p>
								</div>
							</div>
							<div className="bg-[#D1E7FB] md:w-[175px] w-[150px] rounded-[10px]">
								<img src="./assets/shopcard3.png" alt="" />
								<div className="text p-1 px-2">
									<h4 className="font-semibold text-[16px]">Bestseller</h4>
									<p className="text-[12px]">Fill your cart</p>
								</div>
							</div>
							<div className="bg-[#D1E7FB] md:w-[175px] w-[150px] rounded-[10px]">
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
					<img src="./assets/super-sale.png" className="h-[423px] md:p-0 p-[15px]" alt="" />
					<div className="card md:w-[420px] md:h-[423px] md:pb-0 pb-3 h-fit border-[2px] px-5 rounded-xl border-[#aaa]">
						<h3 className="text-3xl font-bold text-primary py-6">
							Mega Deals
						</h3>
						<div className="card-body grid grid-cols-2 gap-[10px]">
							<div className="bg-[#D1E7FB] md:w-[175px] w-[150px] rounded-[10px]">
								<div className="image flex justify-center">
									<img src="./assets/salecard1.png" alt="" />
								</div>
								<div className="text p-1 px-2">
									<p className="text-[12px]">Samsung</p>
									<h4 className="font-semibold text-[16px]">Get up to 40%</h4>
								</div>
							</div>
							<div className="bg-[#D1E7FB] md:w-[175px] w-[150px] rounded-[10px]">
								<div className="image flex justify-center py-2">
									<img src="./assets/salecard2.png" alt="" />
								</div>
								<div className="text p-1 px-2">
									<p className="text-[12px]">Apple</p>
									<h4 className="font-semibold text-[16px]">Get up to 35%</h4>
								</div>
							</div>
							<div className="bg-[#D1E7FB] md:w-[175px] w-[150px] rounded-[10px]">
								<div className="image flex justify-center py-1">
									<img src="./assets/salecard3.png" alt="" />
								</div>
								<div className="text p-1 px-2">
									<p className="text-[12px]">Apple</p>
									<h4 className="font-semibold text-[16px]">Get up to 35%</h4>
								</div>
							</div>
							<div className="bg-[#D1E7FB] md:w-[175px] w-[150px] rounded-[10px]">
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
							<article
								key={product.id}
								className="product bg-white p-2 rounded-[20px] shadow-2xl relative z-40"
							>
								<div className="image bg-[#F6F6F6] p-4 w-full h-[254px] justify-center items-center flex rounded-[20px] relative">
									<Link to={`/product/${product.id}`}>
										
										<img
											src={
												product.images?.[0]?.url
											}
											alt={product.title}
										/>
									</Link>
									<div className="tools absolute z-50 flex flex-col justify-between top-5 right-2 h-[90%]">
										<button
											onClick={(e) => {
												e.preventDefault();
												toggleFavorite(product);
											}}
											aria-label={`${
												wishlist.some((item) => item.id === product.id)
													? "Unfavorite"
													: "Favorite"
											} ${product.title}`}
										>
											<i
												className={`fa-solid fa-heart fa-xl hover:text-[#ff0000] transition-all ${
													wishlist.some((item) => item.id === product.id)
														? "text-[#ff0000]"
														: "text-[#ccc]"
												}`}
											></i>
										</button>
										<button
											onClick={(e) => {
												e.preventDefault();
												toggleCart(product);
											}}
											aria-label={`${
												isInCart(product.id)
													? "Remove from Cart"
													: "Add to Cart"
											} ${product.title}`}
										>
											<i
												className={`fa-solid ${
													isInCart(product.id)
														? "fa-cart-arrow-down text-primary"
														: "fa-cart-plus text-black"
												} fa-xl hover:text-primary transition-all`}
											></i>
										</button>
									</div>
								</div>
								<Link
									to={`/product/${product.id}`}
									className="details block p-2"
								>
									<h2 className="text-lg font-bold">{product.title}</h2>
									<div className="price py-1 pr-3 flex items-center justify-between">
										<p className="text-black font-light text-[16px] flex items-center gap-2 leading-none">
											EGP{" "}
											<span className="font-bold text-[20px]">
												{product.priceAfterDiscount}
											</span>
											<del>{product.price}</del>
										</p>
										<p className="percent text-[#1BB910] text-[16px] font-bold">
											{handleSalePercentage(
												product.price,
												product.priceAfterDiscount
											)}%{" "}
											OFF
										</p>
									</div>
									<p className="free-delivery text-primary">
										<i className="fa-solid fa-truck fa-md mr-2"></i> Free
										Delivery
									</p>
								</Link>
							</article>
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
					<Link to="/laptops" className="px-7 py-3 border-[3px] text-xl font-semibold border-primary text-primary rounded-[16px] transition-all hover:text-white hover:bg-primary">
						Show More
					</Link>
				</div>
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
					{laptops.map((product) => (
						<article
							key={product.id}
							className="product bg-white p-2 rounded-[20px] shadow-2xl relative z-40"
						>
							<div
								className="image bg-[#F6F6F6] p-4 w-full h-[254px] justify-center items-center flex rounded-[20px] relative"
								aria-label={`${product.title} Image`}
							>
								<Link to={`/product/${product.id}`}>
									<img
										src={product.images?.[0]?.url || "/placeholder.png"}
										alt={product.name}
									/>
								</Link>
								<div className="tools absolute z-50 flex flex-col justify-between top-5 right-2 h-[90%]">
									<button
										onClick={(e) => {
											e.preventDefault();
											toggleFavorite(product);
										}}
										aria-label={`${
											wishlist.some((item) => item.id === product.id)
												? "Unfavorite"
												: "Favorite"
										} ${product.name}`}
									>
										<i
											className={`fa-solid fa-heart fa-xl hover:text-[#ff0000] transition-all ${
												wishlist.some((item) => item.id === product.id)
													? "text-[#ff0000]"
													: "text-[#ccc]"
											}`}
										></i>
									</button>
									<button
											onClick={(e) => {
												e.preventDefault();
												toggleCart(product);
											}}
											aria-label={`${
												isInCart(product.id)
													? "Remove from Cart"
													: "Add to Cart"
											} ${product.title}`}
										>
											<i
												className={`fa-solid ${
													isInCart(product.id)
														? "fa-cart-arrow-down text-primary"
														: "fa-cart-plus text-black"
												} fa-xl hover:text-primary transition-all`}
											></i>
										</button>
								</div>
							</div>
							<Link
								to={`/product/${product.id}`}
								className="details block p-2"
							>
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
										{handleSalePercentage(
											product.price,
											product.priceAfterDiscount
										)}%{" "}
										OFF
									</p>
								</div>
								<p
									className="free-delivery text-primary"
									aria-label="Free Delivery"
								>
									<i className="fa-solid fa-truck fa-md mr-2"></i> Free
									Delivery
								</p>
							</Link>
						</article>
					))}
				</div>
			</section>
			<section className="mobiles container my-6">
				<div className="heading pb-6 flex items-center justify-between">
					<h1 className="text-4xl font-bold">Mobiles</h1>
					<Link to="/mobiles" className="px-7 py-3 border-[3px] text-xl font-semibold border-primary text-primary rounded-[16px] transition-all hover:text-white hover:bg-primary">
						Show More
					</Link>
				</div>
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
					{phones.map((product) => (
						<Link
							key={product.id}
							to={`/product/${product.id}`}
							className="product bg-white p-2 rounded-[20px] shadow-2xl"
						>
							<div
								className="image bg-[#F6F6F6] p-4 w-full h-[254px] justify-center items-center flex items-center rounded-[20px] relative"
								aria-label={`${product.title} Image`}
							>
								<img
									src={
										product.images?.[0]?.url
									}
									alt={product.name}
								/>
								<div className="tools absolute flex flex-col justify-between top-5 right-2 h-[90%]">
									<button
										onClick={(e) => {
											e.preventDefault();
											toggleFavorite(product);
										}}
										aria-label={`${
											wishlist.some((item) => item.id === product.id)
												? "Unfavorite"
												: "Favorite"
										} ${product.name}`}
									>
										<i
											className={`fa-solid fa-heart fa-xl hover:text-[#ff0000] transition-all ${
												wishlist.some((item) => item.id === product.id)
													? "text-[#ff0000]"
													: "text-[#ccc]"
											}`}
										></i>
									</button>
									<button
											onClick={(e) => {
												e.preventDefault();
												toggleCart(product);
											}}
											aria-label={`${
												isInCart(product.id)
													? "Remove from Cart"
													: "Add to Cart"
											} ${product.title}`}
										>
											<i
												className={`fa-solid ${
													isInCart(product.id)
														? "fa-cart-arrow-down text-primary"
														: "fa-cart-plus text-black"
												} fa-xl hover:text-primary transition-all`}
											></i>
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
										{handleSalePercentage(
											product.price,
											product.priceAfterDiscount
										)}%{" "}
										OFF
									</p>
								</div>
								<p
									className="free-delivery text-primary"
									aria-label="Free Delivery"
								>
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
			<section className="feedbacks my-6 container grid lg:grid-cols-2 grid-cols-1 gap-6">
				<div className="p-2 w-full">
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
										John Tony
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
										Nicolas Jackson
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
										Bukayo Saka
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
				<form className="w-full flex flex-col items-center gap-3">
					<h1 className="text-[40px] font-bold">Write Feedback</h1>
					<input
						type="text"
						placeholder="Your Full Name ..."
						className="px-5 py-3 rounded-[16px] bg-[#ddd] placeholder:text-black font-semibold sm:w-[80%] w-full"
					/>
					<input
						type="email"
						placeholder="Your Mail ..."
						className="px-5 py-3 rounded-[16px] bg-[#ddd] placeholder:text-black font-semibold sm:w-[80%] w-full"
					/>
					<textarea
						placeholder="Your Feedback ..."
						className="px-5 py-3 rounded-[16px] bg-[#ddd] placeholder:text-black font-semibold sm:w-[80%] w-full h-[140px]"
					/>
					<button className="btn-primary md:w-[80%] w-full">Submit</button>
				</form>
			</section>
		</main>
	);
};

export default Home;
