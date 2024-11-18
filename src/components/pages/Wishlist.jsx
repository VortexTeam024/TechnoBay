import Navbar from "../ui/Navbar"
import Footer from "../ui/Footer"
import { Link } from "react-router-dom";

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
];

const Wishlist = () => {
  return (
    <>
      <Navbar />
      <main className="mt-[145px] lg:mt-[140px]">
        <h1 className="text-5xl font-bold italic border-b-[3px] border-black pb-2 mx-auto my-12 w-fit">Wishlist</h1>
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mb-12">
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
                  <div className="addtocart mt-2 flex items-center gap-4">
                    <button className="btn-primary text-[24px] flex-1">
                      Add to Cart
                    </button>
                    <button className="bg-[#f1f1f1] px-4 py-4 h-full rounded-lg w-fit">
                      <i className="fa-solid fa-trash fa-xl text-[#ccc] hover:text-[#ff0000] transition-all"></i>
                    </button>
                  </div>
								</div>
							</Link>
						))}
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
                  <div className="addtocart mt-2 flex items-center gap-4">
                    <button className="btn-primary text-[24px] flex-1">
                      Add to Cart
                    </button>
                    <button className="bg-[#f1f1f1] px-4 py-4 h-full rounded-lg w-fit">
                      <i className="fa-solid fa-trash fa-xl text-[#ccc] hover:text-[#ff0000] transition-all"></i>
                    </button>
                  </div>
								</div>
							</Link>
						))}
					</div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Wishlist