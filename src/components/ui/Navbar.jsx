import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/Products.context";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [username, setUsername] = useState(null);
	const [searchQuery, setSearchQuery] = useState(""); // State for the search query
	const { fetchSearchedData, products } = useContext(ProductContext); // Get the list of products and the fetch function
	const navigate = useNavigate(); // For navigation

	useEffect(() => {
		const storedUsername = localStorage.getItem("username");
		setUsername(storedUsername);
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("username");
		setUsername(null);
		window.location.reload();
	};

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value); // Update search query
		fetchSearchedData(event.target.value); // Fetch the data based on the query
	};

	// When user presses Enter, navigate to the product page if a matching product is found
	const handleSearchSubmit = (event) => {
		if (event.key === "Enter") {
			// Find a matching product
			const matchingProduct = products.find(product =>
				product.title.toLowerCase().includes(searchQuery.toLowerCase()) // Adjust matching logic as needed
			);

			if (matchingProduct) {
				// Navigate to the product details page if a match is found
				navigate(`/product/${matchingProduct.id}`);
			} else {
				// Optionally handle case when no product matches
				alert("Product not found");
			}
		}
	};

	return (
		<header className="h-fit lg:h-[120px] w-screen fixed top-0 left-0 z-50">
			<nav className="top-nav h-[70px] bg-primary">
				<div className="container">
					<div className="top-nav flex items-center justify-between px-0 md:px-8">
						<Link to="/" aria-label="Home" className="flex-shrink-0">
							<img src="/assets/Logo.png" width={"70px"} alt="TechnoBay Company Logo" />
						</Link>
						<div className="relative flex-1 mx-4">
							<input
								type="text"
								placeholder="Search products..."
								className="w-full py-3 px-6 rounded-xl bg-primary border-[3px] font-semibold focus:bg-white focus:placeholder:text-primary focus:text-primary border-white text-white placeholder:text-white outline-none"
								aria-label="Search products"
								value={searchQuery}
								onChange={handleSearchChange}
								onKeyDown={handleSearchSubmit} // Trigger on Enter key press
							/>
						</div>
						<div className="links hidden lg:flex items-center gap-4 mr-4">
							<Link to="/wishlist" className="flex items-center gap-2 text-white font-semibold text-lg" aria-label="View Wishlist">
								Wishlist
								<i className="fa-solid fa-heart fa-lg"></i>
							</Link>
							<Link to="/cart" className="flex items-center gap-2 text-white font-semibold text-lg relative" aria-label="View Cart">
								Cart
								<div className="cart relative">
									<i className="fa-solid fa-cart-shopping fa-lg"></i>
									<span className="absolute -right-1 top-[-6.25px] text-[10px] text-primary bg-white leading-[7px] p-1 rounded-full">
										0
									</span>
								</div>
							</Link>
						</div>
						<div className="hidden lg:flex items-center gap-4">
							{username ? (
								<>
									<div className="flex items-center gap-3">
										<img src="/assets/user-icon.svg" alt="User Icon" className="w-[36px] h-[36px]" />
										<span className="text-white font-medium">{username}</span>
									</div>
									<button className="btn-secondary" onClick={handleLogout}>Log out</button>
								</>
							) : (
								<>
									<Link to="/register" className="btn-secondary" aria-label="Register">Register</Link>
									<Link to="/login" className="btn-secondary" aria-label="Login">Login</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</nav>
			<nav className="bottom-nav w-screen h-fit p-2 lg:p-0 lg:h-[50px] bg-[#ddd]">
				<div className="container relative h-full flex gap-[20px] px-5 lg:px-0 lg:justify-center items-center">
					{[
						"Laptop", "Mobile", "Television", "Smart Watch", "Tablet", "Earphone", "Camera", "Accessory"
					].map((category, index) => (
						<Link key={index} to={`/${category.toLowerCase().replace(" ", "-")}`} className="text-black hover:text-primary font-semibold text-lg hidden lg:flex" aria-label={`View ${category}`}>
							{category}
						</Link>
					))}
					<button onClick={() => setIsOpen(!isOpen)} className="text-primary text-lg font-bold block lg:hidden">
						<i className="fa fa-bars fa-xl"></i>
					</button>
				</div>
				<div className={`mobile-nav container flex-col flex lg:hidden w-screen fixed top-[114px] px-7 py-5 bg-primary z-50 left-0 h-fit ${isOpen ? "flex" : "hidden"} gap-4`}>
					{[
						"Laptop", "Mobile", "Television", "Smart Watch", "Tablet", "Earphone", "Camera", "Accessory"
					].map((category, index) => (
						<Link key={index} to={`/${category.toLowerCase().replace(" ", "-")}`} className="text-white font-semibold text-lg" aria-label={`View ${category}`}>
							{category}
						</Link>
					))}
					<div className="links flex flex-col gap-4 mt-4">
						<Link to="/wishlist" className="flex items-center gap-2 text-white font-semibold text-lg" aria-label="View Wishlist">
							Wishlist
							<i className="fa-solid fa-heart fa-lg"></i>
						</Link>
						<Link to="/cart" className="flex items-center gap-2 text-white font-semibold text-lg relative" aria-label="View Cart">
							Cart
							<div className="cart relative">
								<i className="fa-solid fa-cart-shopping fa-lg"></i>
								<span className="absolute -right-1 top-[-6.25px] text-[10px] text-primary bg-white leading-[7px] p-1 rounded-full">
									0
								</span>
							</div>
						</Link>
					</div>
					{username ? (
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-3">
								<img src="/assets/user-icon.svg" alt="User Icon" className="w-[36px] h-[36px]" />
								<span className="text-white font-medium">{username}</span>
							</div>
							<button className="btn-secondary" onClick={handleLogout}>Log out</button>
						</div>
					) : (
						<div className="btns flex flex-col gap-4">
							<Link to="/register" className="btn-secondary" aria-label="Register">Register</Link>
							<Link to="/login" className="btn-secondary" aria-label="Login">Login</Link>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
