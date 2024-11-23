import { useEffect, useState } from "react";
import { ProductContext } from "../contexts/Products.context";
import PropTypes from "prop-types";

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [wishlist, setWishlist] = useState([]); // Wishlist State
	const authToken = localStorage.getItem("token"); // Fetch the token from localStorage

	// Fetch all products
	useEffect(() => {
		// Fetch wishlist
		const fetchWishlist = async () => {
			try {
				const url = `${import.meta.env.VITE_WISHLIST_API_URL}`;
				const response = await fetch(url, {
					headers: {
						Authorization: `Bearer ${authToken}`, // Add Bearer Token
					},
				});
				if (response.ok) {
					const result = await response.json();
					if (Array.isArray(result)) {
						setWishlist(result);
					} else if (result.data) {
						setWishlist(result.data);
					}
				} else {
					console.error("Failed to fetch wishlist from the database.");
				}
			} catch (error) {
				console.error(error);
			}
		};
		fetchWishlist();
		fetchData();
	}, [authToken, setWishlist]);

	const fetchData = async () => {
		try {
			const url = `${import.meta.env.VITE_GET_ALL_PRODUCTS_API_URL}?limit=254`;
			const response = await fetch(url);
			const result = await response.json();
			if (Array.isArray(result)) {
				setProducts(result);
			} else if (result.data) {
				setProducts(result.data);
			}
		} catch (error) {
			console.error(error);
		}
	};

	// Fetch searched product
	const fetchSearchedData = async (searchedProduct) => {
		try {
			const url = `${
				import.meta.env.VITE_GET_ALL_PRODUCTS_API_URL
			}?limit=1&keyword=${searchedProduct}`;
			const response = await fetch(url);
			const result = await response.json();
			if (Array.isArray(result)) {
				setProducts(result);
			} else if (result.data) {
				setProducts(result.data);
			}
		} catch (error) {
			console.error(error);
		}
	};

	// Fetch one product by ID
	const fetchOneProduct = async (id) => {
		try {
			const url = `${import.meta.env.VITE_GET_ALL_PRODUCTS_API_URL}/${id}`;
			const response = await fetch(url);
			const result = await response.json();
			if (Array.isArray(result)) {
				return result;
			} else if (result.data) {
				return result.data;
			}
		} catch (err) {
			console.error(err);
		}
	};

	// Add product to Wishlist
	const addToWishlist = async (product) => {
		try {
			const url = `${import.meta.env.VITE_WISHLIST_API_URL}`;
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${authToken}`, // Add Bearer Token
				},
				body: JSON.stringify({ productId: product.id }),
			});

			if (response.ok) {
				setWishlist((prevWishlist) => {
					if (!prevWishlist.some((item) => item.id === product.id)) {
						return [...prevWishlist, product];
					}
					return prevWishlist; // Prevent duplicates
				});
			} else {
				console.error("Failed to add product to wishlist in the database.");
			}
		} catch (error) {
			console.error(error);
		}
	};

	// Remove product from Wishlist
	const removeFromWishlist = async (id) => {
		try {
			const url = `${import.meta.env.VITE_WISHLIST_API_URL}/${id}`;
			const response = await fetch(url, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${authToken}`, // Add Bearer Token
				},
				body: JSON.stringify({ productId: id }),
			});

			if (response.ok) {
				setWishlist((prevWishlist) =>
					prevWishlist.filter((item) => item.id !== id)
				);
			} else {
				console.error(
					"Failed to remove product from wishlist in the database."
				);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				wishlist,
				fetchSearchedData,
				fetchOneProduct,
				addToWishlist,
				removeFromWishlist,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

ProductProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
