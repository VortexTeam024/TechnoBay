import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../contexts/Products.context";
import { Link } from "react-router-dom";

const CategoryDetails = () => {
	const { products, wishlist, addToWishlist, removeFromWishlist } = useContext(ProductContext);
  const [selectedProductsCategory, setSelectedProductsCategory] = useState([]);
  const [brandFilter, setBrandFilter] = useState("");
  const [priceRange, setPriceRange] = useState({ from: 0, to: Infinity });
  const { category } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      if (Array.isArray(products)) {
        let filteredProducts = products.filter(
          (product) => product.category.title === category.replace("-", " ").toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
        );
        
        if (brandFilter) {
          filteredProducts = filteredProducts.filter((product) =>
            product.brand.toLowerCase().includes(brandFilter)
          );
        }
        if (priceRange.from || priceRange.to) {
          filteredProducts = filteredProducts.filter(
            (product) =>
              product.priceAfterDiscount >= priceRange.from &&
              product.priceAfterDiscount <= priceRange.to
          );
        }
        setSelectedProductsCategory(filteredProducts.slice(0, 12));
      }
    };

    fetchCategory();
  }, [category, products, brandFilter, priceRange]);

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

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const from = e.target.fromPrice.value || 0;
    const to = e.target.toPrice.value || Infinity;
    const brand = e.target.brand.value || "";
    setPriceRange({ from: parseFloat(from), to: parseFloat(to) });
    setBrandFilter(brand);
  };

  return (
    <>
      <main className="mt-[100px] lg:mt-[120px]">
        <div className="header py-6 mx-auto text-center">
          <h1 className="text-6xl font-bold text-black mb-3 italic capitalize">
            {category.replace("-", " ")}
          </h1>
          <p className="text-[#8D8D8D]">
            Discover top electronics: gadgets, devices, accessories, and
            cutting-edge technology.
          </p>
        </div>
        <div className="filter md:w-fit w-[90%] mx-auto py-6">
          <h6 className="text-[18px] text-[#373737] w-fit">filter by</h6>
          <form
            onSubmit={handleFilterSubmit}
            className="md:w-[1100px] w-full bg-white px-8 py-4 grid md:grid-cols-2 grid-cols-1 items-center gap-4 rounded-[16px] shadow-xl"
          >
            {/* Price Filter */}
            <div className="col flex md:flex-row flex-col md:items-center gap-4">
              <div className="label">
                <label htmlFor="fromPrice" className="text-[18px] font-bold">
                  Price
                </label>
                <p className="text-[14px]">Enter Price Range</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  id="fromPrice"
                  name="fromPrice"
                  placeholder="From"
                  className="px-6 py-2 bg-[#F4F4F4] w-[130px] text-center rounded shadow-md placeholder:text-[#8A8A8A]"
                />
                <span className="text-[18px] font-bold text-[#4D4D4D]">-</span>
                <input
                  type="number"
                  id="toPrice"
                  name="toPrice"
                  placeholder="To"
                  className="px-6 py-2 bg-[#F4F4F4] w-[130px] text-center rounded shadow-md placeholder:text-[#8A8A8A]"
                />
              </div>
            </div>

            {/* Brand Filter */}
            <div className="col flex md:flex-row flex-col md:items-center gap-4">
              <div className="label">
                <label htmlFor="brand" className="text-[18px] font-bold">
                  Brand
                </label>
                <p className="text-[14px]">Enter What Brand</p>
              </div>
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Enter Your Brand"
                className="px-6 py-2 bg-[#F4F4F4] rounded shadow-md placeholder:text-[#8A8A8A] flex-1"
              />
              <button type="submit" className="btn-primary w-fit">
                Go
              </button>
            </div>
          </form>
        </div>
        <section className="laptops container my-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {selectedProductsCategory.map((product) => (
              <article
									key={product.id}
									className="product bg-white p-2 rounded-[20px] shadow-2xl relative z-40"
								>
									<div
										className="image bg-[#F6F6F6] p-4 w-full h-[254px] justify-center flex items-center rounded-[20px] relative"
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
											<button aria-label={`Add ${product.title} to Cart`}>
												<i className="fa-solid fa-cart-plus fa-xl text-black hover:text-primary transition-all"></i>
											</button>
										</div>
									</div>
									<Link
										to={`/product/${product.id}`}
										className="details block p-2"
									>
										<h2
											className="text-lg font-bold"
											aria-label={product.title}
										>
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
      </main>
    </>
  );
};

export default CategoryDetails;
