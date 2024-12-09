import { useEffect, useState } from "react";
import { ProductContext } from "../contexts/Products.context";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const authToken = localStorage.getItem("token");

const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [wishlist, setWishlist] = useState([]);
	const [cart, setCart] = useState([]);

	// Fetch data from API and set it to state
	const fetchDataFromApi = async (url, setter) => {
		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();
			if (response.ok) {
				if (Array.isArray(result)) {
					setter(result);
				} else if (result.data) {
					setter(result.data);
				}
			}
			if (response.ok && url === import.meta.env.VITE_CART_API_URL) {
				setter(result);
			}
		} catch (error) {
			console.error("Error fetching data from API:", error);
		}
	};

	// Fetch one product by ID
	const fetchOneProduct = async (productId) => {
		const url = `${import.meta.env.VITE_GET_ALL_PRODUCTS_API_URL}/${productId}`;
		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${authToken}`,
					"Content-Type": "application/json",
				},
			});
			const result = await response.json();
			if (response.ok) {
				return result;
			}
		} catch (error) {
			console.error("Error fetching product:", error);
		}
		return null;
	};

	// Add a product to the wishlist
	const addToWishlist = async (product) => {
		if (authToken) {
			const url = `${import.meta.env.VITE_WISHLIST_API_URL}`;
			try {
				const response = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${authToken}`,
					},
					body: JSON.stringify({ productId: product.id }),
				});
				if (response.ok) {
					setWishlist((prevWishlist) => {
						if (!prevWishlist.some((item) => item.id === product.id)) {
							return [...prevWishlist, product];
						}
						return prevWishlist;
					});
				}
			} catch (error) {
				console.error("Error adding to wishlist:", error);
			}
		} else {
			toast.error("You are not login !");
		}
	};

	// Remove a product from the wishlist
	const removeFromWishlist = async (id) => {
		if (authToken) {
			const url = `${import.meta.env.VITE_WISHLIST_API_URL}/${id}`;
			try {
				const response = await fetch(url, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${authToken}`,
					},
					body: JSON.stringify({ productId: id }),
				});
				if (response.ok) {
					setWishlist((prevWishlist) =>
						prevWishlist.filter((item) => item.id !== id)
					);
				}
			} catch (error) {
				console.error("Error removing from wishlist:", error);
			}
		} else {
			toast.error("You are not login !");
		}
	};

	const addToCart = async (product) => {
		if (authToken) {
			const url = `${import.meta.env.VITE_CART_API_URL}`;
			try {
				const response = await fetch(url, {
					method: "POST",
					headers: {
						Authorization: `Bearer ${authToken}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ productId: product._id }),
				});

				if (!response.ok) {
					throw new Error(
						`Failed to add product to cart. Status: ${response.status}`
					);
				}
				setCart((prevCart) => {
					if (!Array.isArray(prevCart)) prevCart = [];
					if (!prevCart.some((item) => item.id === product.id)) {
						return [...prevCart, { ...product, quantity: 1 }];
					}
					return prevCart;
				});
			} catch (error) {
				console.error("Error adding to cart:", error.message);
			}
		} else {
			toast.error("You are not login !");
		}
	};

	// Remove a product from the cart
	const removeFromCart = async (id) => {
		if (authToken) {
			const url = `${import.meta.env.VITE_CART_API_URL}/${id}`;
			try {
				const response = await fetch(url, {
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${authToken}`,
					},
				});

				if (!response.ok) {
					const errorData = await response.json();
					console.error("Error Details:", errorData);
					throw new Error(
						`Failed to remove product from cart. Status: ${response.status}`
					);
				}

				setCart((prevCart) => {
					if (
						!prevCart ||
						!prevCart.data ||
						!Array.isArray(prevCart.data.cartItems)
					) {
						console.warn("Cart structure is invalid, skipping update.");
						return prevCart;
					}

					const updatedCartItems = prevCart.data.cartItems.filter(
						(item) => item.product !== id && item._id !== id
					);

					return {
						...prevCart,
						data: {
							...prevCart.data,
							cartItems: updatedCartItems,
						},
					};
				});
			} catch (error) {
				console.error("Error removing from cart:", error.message);
			}
		} else {
			toast.error("You are not logged in!");
		}
	};

	const updateCart = async (id, quantity) => {
		const url = `${import.meta.env.VITE_CART_API_URL}/${id}`;
		try {
			const response = await fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${authToken}`,
				},
				body: JSON.stringify({ quantity }),
			});
			if (response.ok) {
				setCart((prevCart) => {
					if (prevCart.data) {
						const updatedCartItems = prevCart.data.cartItems.map((item) =>
							item.id === id ? { ...item, quantity } : item
						);
						setProducts(updatedCartItems); // تحديث المنتجات هنا مباشرة
						return {
							...prevCart,
							data: {
								...prevCart.data,
								cartItems: updatedCartItems,
							},
						};
					} else {
						return prevCart;
					}
				});
			}
		} catch (error) {
			console.error("Error updating cart:", error);
		}
	};

	// Fetch initial data for products, wishlist, and cart
	useEffect(() => {
		const initializeData = async () => {
			await fetchDataFromApi(
				import.meta.env.VITE_GET_ALL_PRODUCTS_API_URL + "?limit=254",
				setProducts
			);
		};
		initializeData();
	}, []);

	return (
		<ProductContext.Provider
			value={{
				products,
				wishlist,
				cart,
				setCart,
				fetchDataFromApi,
				fetchOneProduct,
				addToWishlist,
				removeFromWishlist,
				addToCart,
				removeFromCart,
				updateCart,
			}}
		>
			{children}
			<ToastContainer />
		</ProductContext.Provider>
	);
};

ProductProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ProductProvider;
