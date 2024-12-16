import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/Products.context";
import { Link } from "react-router-dom";

const ProductDetails = () => {
	const {
		products,
		fetchOneProduct,
		wishlist,
		cart,
		addToCart,
		addToWishlist,
		removeFromWishlist,
	} = useContext(ProductContext);
	const { id } = useParams();

	const [more, setMore] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	const toggleFavorite = (product) => {
		if (wishlist.some((item) => item.id === product.id)) {
			removeFromWishlist(product.id);
		} else {
			addToWishlist(product);
		}
	};

	const isInCart = (id) => Array.isArray(cart) && cart.some((item) => item.id === id);

	// Load product details
	useEffect(() => {
		const loadProduct = async () => {
			setLoading(true);
			try {
				const product = await fetchOneProduct(id);
				if (product) {
					setSelectedProduct(product.data);
				}
			} catch (error) {
				console.error("Error fetching product:", error);
				setSelectedProduct(null);
			}
			setLoading(false);
		};

		loadProduct();
	}, [id, fetchOneProduct]);

	// Load "More Like This" products
	useEffect(() => {
		const handleFetchMoreLikeThis = () => {
			if (
				selectedProduct &&
				selectedProduct.category &&
				Array.isArray(products)
			) {
				const filteredProducts = products
					.filter(
						(product) =>
							product.category.title === selectedProduct.category.title &&
							product.id !== selectedProduct.id
					)
					.slice(0, 4);
				setMore(filteredProducts);
			}
		};

		handleFetchMoreLikeThis();
	}, [selectedProduct, products]);

	const handleSalePercentage = (originalPrice, discountedPrice) => {
		if (originalPrice <= 0 || discountedPrice < 0) {
			return "Invalid prices";
		}
		const salePercentage =
			((originalPrice - discountedPrice) / originalPrice) * 100;
		return salePercentage.toFixed(2);
	};

	const handleAddSelectedProductToCart = async (product) => {
		try {
			await addToCart(product);
		} catch (err) {
			console.error(err);
		}
	};

	if (loading) {
		return (
			<>
				<main className="min-h-[50vh] mt-[145px] lg:mt-[140px] flex items-center justify-center text-xl bg-[#f1f1f1]">
					<section className="container p-4 my-6 text-center">
						<p>Loading product details...</p>
					</section>
				</main>
			</>
		);
	}

	return (
		<>
			<main className="bg-[#f1f1f1] mt-[100px] lg:mt-[140px]">
				<section className="main-product container p-4 my-6 bg-white grid grid-cols-1 lg:grid-cols-2 gap-6 items-center rounded">
					<div className="col">
						<img
							src={selectedProduct.images?.[0]?.url || "/placeholder.png"}
							alt={selectedProduct.name}
							className="w-full h-auto"
						/>
						<div className="tools mx-4 flex flex-wrap gap-4 items-center">
							<button
								onClick={(e) => {
									e.preventDefault();
									handleAddSelectedProductToCart(selectedProduct);
								}}
								className="btn-primary md:text-xl text-lg flex-1"
							>
								Add To Cart
							</button>
							<button
								onClick={(e) => {
									e.preventDefault();
									toggleFavorite(selectedProduct);
								}}
								aria-label={`${
									wishlist.some((item) => item.id === selectedProduct.id)
										? "Unfavorite"
										: "Favorite"
								} ${selectedProduct.title}`}
								className="bg-[#f1f1f1] px-4 py-3 h-full rounded-lg w-fit"
							>
								<i
									className={`fa-solid fa-heart fa-xl hover:text-[#ff0000] transition-all ${
										wishlist.some((item) => item.id === selectedProduct.id)
											? "text-[#ff0000]"
											: "text-[#ccc]"
									}`}
								></i>
							</button>
						</div>
					</div>
					<div className="col">
						<h2 className="md:text-5xl text-3xl font-bold">
							{selectedProduct.title}
						</h2>
						<p className="text-lg font-semibold text-[#717171] my-2">
							{selectedProduct.description}
						</p>
						<ul className="details space-y-3">
							{selectedProduct.price && (
								<li className="text-[#717171] sm:text-[22px] text-[18px]">
									Was: <del>EGP {selectedProduct.price}</del>
								</li>
							)}
							<li className="text-[#717171] sm:text-[22px] text-[16px]">
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
						More From{" "}
						{selectedProduct.category.title
							.replace("-", " ")
							.toLowerCase()
							.replace(/\b\w/g, (char) => char.toUpperCase())}
						:
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
									<img
										src={product.images?.[0]?.url || "/placeholder.png"}
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
											} ${product.title}`}
										>
											<i
												className={`fa-solid fa-heart fa-xl hover:text-[#ff0000] transition-all  ${
													wishlist.some((item) => item.id === product.id)
														? "text-[#ff0000]"
														: "text-[#ccc]"
												}`}
											></i>
										</button>
										<button
											onClick={(e) => {
												e.preventDefault();
												addToCart(product);
											}}
											aria-label={`${product.title}`}
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
											)}
											% OFF
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
		</>
	);
};

export default ProductDetails;
