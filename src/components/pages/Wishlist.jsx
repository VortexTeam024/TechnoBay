import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/Products.context";

const Wishlist = () => {
	const { wishlist, setWishlist, fetchDataFromApi, removeFromWishlist, addToCart } = useContext(ProductContext);
	const handleSalePercentage = (originalPrice, discountedPrice) => {
		if (originalPrice <= 0 || discountedPrice < 0) {
			return "Invalid prices";
		}
		const salePercentage =
			((originalPrice - discountedPrice) / originalPrice) * 100;
		return salePercentage.toFixed(2);
	};
	useEffect(() => {
		const FetchDataWishlist = async () => {
			await fetchDataFromApi(import.meta.env.VITE_WISHLIST_API_URL, setWishlist);
		}
		FetchDataWishlist();
	}, [])
  return (
    <>
      <main className="min-h-[25.5vh] mt-[145px] lg:mt-[140px]">
        <h1 className="text-5xl font-bold italic border-b-[3px] border-black pb-2 mx-auto my-12 w-fit">Wishlist</h1>
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mb-12">
						{wishlist.map((product) => (
								<article
									key={product._id}
									className="product bg-white p-2 rounded-[20px] shadow-2xl relative z-40"
								>
									<div
										className="image bg-[#F6F6F6] p-4 w-full h-[254px] justify-center flex rounded-[20px] relative"
										aria-label={`${product.title} Image`}
									>
										<Link to={`/product/${product._id}`}>
											<img
												src={product.images?.[0]?.url || "/placeholder.png"}
												alt={product.name}
											/>
										</Link>
									</div>
									<Link
										to={`/product/${product._id}`}
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
									<div className="addtocart flex items-center gap-4">
										<button onClick={(e) => {e.preventDefault(); addToCart(product)}} className="btn-primary text-[24px] flex-1">
											Add to Cart
										</button>
										<button className="bg-[#f1f1f1] px-4 py-4 h-full rounded-lg w-fit" onClick={() => removeFromWishlist(product._id)}>
											<i className="fa-solid fa-trash fa-xl text-[#ccc] hover:text-[#ff0000] transition-all"></i>
										</button>
									</div>
								</article>
							))}
					</div>
        </div>
      </main>
    </>
  )
}

export default Wishlist