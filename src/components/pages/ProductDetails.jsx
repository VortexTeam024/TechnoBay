import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/Products.context";
import { Link } from "react-router-dom";

const ProductDetails = () => {
	const { products, fetchOneProduct } = useContext(ProductContext);
	const { id } = useParams();
	const [more, setMore] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(true);
	const [favorites, setFavorites] = useState([]);
	const toggleFavorite = (productId) => {
		setFavorites((prevFavorites) =>
			prevFavorites.includes(productId)
				? prevFavorites.filter((id) => id !== productId)
				: [...prevFavorites, productId]
		);
	};

	console.log(more)
	useEffect(() => {
		const loadProduct = async () => {
			setLoading(true);
			try {
				const product = await fetchOneProduct(id);
				if (product) {
					console.log(product);
					setSelectedProduct(product);
				}
			} catch (error) {
				console.error("Error fetching product:", error);
				setSelectedProduct(null);
			}
			setLoading(false);
		};
		const handleFetchMoreLikeThis = async () => {
			if (Array.isArray(products)) {
				const filteredLaptops = await products
					.filter((product) => product.category.title === selectedProduct.category.title)
					.slice(0, 4);
				await setMore(filteredLaptops);
			}
		}
		handleFetchMoreLikeThis();
		loadProduct();
	}, [id, products]); // Add `id` as a dependency to reload if `id` changes.
	const handleSalePercentage = (originalPrice, discountedPrice) => {
		if (originalPrice <= 0 || discountedPrice < 0) {
			return "Invalid prices";
		}
		const salePercentage =
			((originalPrice - discountedPrice) / originalPrice) * 100;
		return salePercentage.toFixed(2);
	};

	if (loading) {
		return (
			<>
				<Navbar />
				<main className="bg-[#f1f1f1] mt-[100px] lg:mt-[140px]">
					<section className="container p-4 my-6 text-center">
						<p>Loading product details...</p>
					</section>
				</main>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Navbar />
			<main className="bg-[#f1f1f1] mt-[100px] lg:mt-[140px]">
				<section className="main-product container p-4 my-6 bg-white grid grid-cols-1 lg:grid-cols-2 gap-6 items-center rounded">
					<div className="col">
						{selectedProduct.images && selectedProduct.images[0] && (
							<img
								src={"/assets/ProductDetails.png"}
								alt={selectedProduct.name}
								className="w-full h-auto"
							/>
						)}
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
							<button className="btn-primary md:text-xl text-lg flex-1">
								Add To Cart
							</button>
							<button
								onClick={() => toggleFavorite(selectedProduct.id)}
                aria-label={`${
                  favorites.includes(selectedProduct.id)
                    ? "Unfavorite"
                    : "Favorite"
                } ${selectedProduct.name}`}
								className="bg-[#f1f1f1] px-4 py-3 h-full rounded-lg w-fit"
							>
								<i
									className={`fa-solid fa-heart fa-xl hover:text-[#ff0000] transition-all ${
                    favorites.includes(selectedProduct.id)
                      ? "text-[#ff0000]"
                      : "text-[#ccc]"
                  }`}
								></i>
							</button>
						</div>
					</div>
					<div className="col">
						<h2 className="text-5xl font-bold">{selectedProduct.title}</h2>
						<p className="text-lg font-semibold text-[#717171] my-2">
							{selectedProduct.description}
						</p>
						<ul className="details space-y-3">
							{selectedProduct.price && (
								<li className="text-[#717171] text-[22px]">
									Was: <del>EGP {selectedProduct.price}</del>
								</li>
							)}
							<li className="text-[#717171] text-[22px]">
								Now:{" "}
								<span className="text-[28px] font-bold text-black px-2">
									EGP {selectedProduct.priceAfterDiscount}
								</span>{" "}
								Inclusive of VAT
							</li>
							<li className="text-[#717171] text-[20px]">
								Saving:{" "}
								<span className="text-[#1BB910]">
									{handleSalePercentage(
										selectedProduct.price,
										selectedProduct.priceAfterDiscount
									)}
									% Off
								</span>
							</li>
							<li className="text-primary text-[20px] flex items-center gap-4">
								<i className="fa-solid fa-truck"></i> Free Delivery
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
							{Object.entries(selectedProduct.specifications).map(
								(specification, index) => {
									return (
										<li
											key={specification[0]}
											className={`flex items-center justify-between px-6 py-3 rounded-lg ${
												index % 2 === 0 ? "bg-[#0583d833]" : "bg-white"
											}`}
										>
											<span>{specification[0]}:</span>
											<span>{specification[1]}</span>
										</li>
									);
								}
							)}
						</ul>
						<div className="col">
							<div className="ml-4 flex flex-col gap-6 my-8">
								<div className="flex items-center gap-6">
									<i className="fa-solid fa-file-contract text-[34px] text-primary"></i>
									<span className="text-lg text-[#818181]">
										1 year warranty
									</span>
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
						</div>
					</div>
				</section>
				<section className="container p-4 my-6 bg-white rounded">
					<h2 className="text-3xl font-bold mb-3 pb-2 w-full border-b-[3px] border-b-black">
						More From Laptops:
					</h2>
					<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
						{more.map((product) => (
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
											{handleSalePercentage(
												product.price,
												product.priceAfterDiscount
											)}{" "}
											OFF
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
			</main>
			<Footer />
		</>
	);
};

export default ProductDetails;
