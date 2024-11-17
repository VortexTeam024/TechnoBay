import { useState } from "react";
import Navbar from "../../ui/Navbar";
import Footer from "../../ui/Footer";

const laptops = [
	{
		id: 1,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "./assets/laptop1.png",
	},
	{
		id: 2,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "./assets/laptop2.png",
	},
	{
		id: 3,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "./assets/laptop3.png",
	},
	{
		id: 4,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "./assets/laptop4.png",
	},
	{
		id: 5,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "./assets/laptop1.png",
	},
	{
		id: 6,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "./assets/laptop2.png",
	},
	{
		id: 7,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "./assets/laptop3.png",
	},
	{
		id: 8,
		name: "ASUS VivoBook Laptop With 15.6-Inch Display, Core i5-133…",
		price: 13450,
		originalPrice: 18700,
		discount: "28%",
		freeDelivery: true,
		image: "./assets/laptop4.png",
	},
];

const SmartWatch = () => {
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
			<main className="bg-[#f1f1f1] mt-[100px] lg:mt-[120px]">
				<div className="header py-6 mx-auto text-center">
					<h1 className="text-6xl font-bold text-black mb-3 italic">
						Smart Watch
					</h1>
					<p className="text-[#8D8D8D]">
						Discover top electronics: gadgets, devices, accessories, and
						cutting-edge technology.
					</p>
				</div>
				<div className="filter md:w-fit w-[90%] mx-auto py-6">
					<h6 className="text-[18px] text-[#373737] w-fit">filter by</h6>
					<form
						action=""
						className="md:w-[1100px] w-full bg-white px-8 py-4 grid md:grid-cols-2 grid-cols-1 items-center gap-4 rounded-[16px] shadow-xl"
					>
						<div className="col flex md:flex-row flex-col md:items-center gap-4">
							<div className="label">
								<label htmlFor="" className="text-[18px] font-bold">
									Price
								</label>
								<p className="text-[14px]">Enter Price Range</p>
							</div>
							<div className="flex gap-2">
								<input
									type="text"
									placeholder="From"
									className="px-6 py-2 bg-[#F4F4F4] w-[130px] text-center rounded shadow-md placeholder:text-[#8A8A8A]"
								/>
								<span className="text-[18px] font-bold text-[#4D4D4D]">-</span>
								<input
									type="text"
									placeholder="To"
									className="px-6 py-2 bg-[#F4F4F4] w-[130px] text-center rounded shadow-md placeholder:text-[#8A8A8A]"
								/>
							</div>
						</div>
						<div className="col flex md:flex-row flex-col md:items-center gap-4">
							<div className="label">
								<label htmlFor="" className="text-[18px] font-bold">
									Brand
								</label>
								<p className="text-[14px]">Enter What Brand</p>
							</div>
							<input
								type="text"
								placeholder="Enter Your brand"
								className="px-6 py-2 bg-[#F4F4F4] rounded shadow-md placeholder:text-[#8A8A8A] flex-1"
							/>
							<button className="btn-primary w-fit">Go</button>
						</div>
					</form>
				</div>
				<section className="laptops container my-6">
					<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
						{laptops.map((product) => (
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
											<i className="fa-solid fa-truck fa-md mr-2"></i> Free
											Delivery
										</p>
									)}
								</div>
							</article>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default SmartWatch;
