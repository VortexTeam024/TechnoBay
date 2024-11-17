import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="h-fit lg:h-[120px] w-screen fixed top-0 left-0 z-50">
			<nav className="top-nav h-[70px] bg-primary">
				<div className="container">
					<div className="top-nav flex items-center justify-between px-0 md:px-8">
						<Link to="/" aria-label="Home" className="flex-shrink-0">
							<img
								src="/assets/Logo.png"
								width={"70px"}
								alt="TechnoBay Company Logo"
							/>
						</Link>
						<div className="relative flex-1 mx-4">
							<input
								type="text"
								placeholder="Search products..."
								className="w-full py-3 px-6 rounded-xl bg-primary border-[3px] font-semibold focus:bg-white focus:placeholder:text-primary focus:text-primary border-white text-white placeholder:text-white outline-none"
								aria-label="Search products"
							/>
						</div>
						<div className="links hidden lg:flex items-center gap-4 mr-4">
							<Link
								to="/wishlist"
								className="flex items-center gap-2 text-white font-semibold text-lg"
								aria-label="View Wishlist"
							>
								Wishlist
								<i className="fa-solid fa-heart fa-lg"></i>
							</Link>
							<Link
								to="/cart"
								className="flex items-center gap-2 text-white font-semibold text-lg relative"
								aria-label="View Cart"
							>
								Cart
								<div className="cart relative">
									<i className="fa-solid fa-cart-shopping fa-lg"></i>
									<span className="absolute -right-1 top-[-6.25px] text-[10px] text-primary bg-white leading-[7px] p-1 rounded-full">
										0
									</span>
								</div>
							</Link>
						</div>
						<div className="btns hidden lg:flex items-center gap-4">
							<Link
								to="/register"
								className="btn-secondary"
								aria-label="Register"
							>
								Register
							</Link>
							<Link to="/login" className="btn-secondary" aria-label="Login">
								Login
							</Link>
						</div>
					</div>
				</div>
			</nav>

			{/* Bottom Navbar */}
			<nav className="bottom-nav w-screen h-fit p-2 lg:p-0 lg:h-[50px] bg-[#ddd]">
				<div className="container relative   h-full flex gap-[20px] px-5 lg:px-0 lg:justify-center items-center">
					{[
						"Laptop",
						"Mobile",
						"Television",
						"Smart Watch",
						"Tablet",
						"Earphone",
						"Camera",
						"Accessory",
					].map((category, index) => (
						<Link
							key={index}
							to={`/${category.toLowerCase().replace(" ", "-")}`}
							className="text-black hover:text-primary font-semibold text-lg hidden lg:flex"
							aria-label={`View ${category}`}
						>
							{category}
						</Link>
					))}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-primary text-lg font-bold block lg:hidden"
					>
						<i className="fa fa-bars fa-xl"></i>
					</button>
				</div>

				{/* Mobile Dropdown Menu */}
				<div
					className={`mobile-nav container   flex-col flex lg:hidden w-screen fixed top-[114px] px-7 py-5 bg-primary z-50 left-0 h-fit ${
						isOpen ? "flex" : "hidden"
					} gap-4`}
				>
					{[
						"Laptop",
						"Mobile",
						"Television",
						"Smart Watch",
						"Tablet",
						"Earphone",
						"Camera",
						"Accessory",
					].map((category, index) => (
						<Link
							key={index}
							to={`/${category.toLowerCase().replace(" ", "-")}`}
							className="text-white font-semibold text-lg"
							aria-label={`View ${category}`}
						>
							{category}
						</Link>
					))}

					{/* Mobile Wishlist and Cart Links */}
					<div className="links flex flex-col gap-4 mt-4">
						<Link
							to="/wishlist"
							className="flex items-center gap-2 text-white font-semibold text-lg"
							aria-label="View Wishlist"
						>
							Wishlist
							<i className="fa-solid fa-heart fa-lg"></i>
						</Link>
						<Link
							to="/cart"
							className="flex items-center gap-2 text-white font-semibold text-lg relative"
							aria-label="View Cart"
						>
							Cart
							<div className="cart relative">
								<i className="fa-solid fa-cart-shopping fa-lg"></i>
								<span className="absolute -right-1 top-[-6.25px] text-[10px] text-primary bg-white leading-[7px] p-1 rounded-full">
									0
								</span>
							</div>
						</Link>
					</div>

					{/* Mobile Register and Login Buttons */}
					<div className="btns flex flex-col gap-4">
						<Link
							to="/register"
							className="btn-secondary"
							aria-label="Register"
						>
							Register
						</Link>
						<Link to="/login" className="btn-secondary" aria-label="Login">
							Login
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
