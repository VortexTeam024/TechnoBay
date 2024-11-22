import { useEffect, useState } from "react";
import { ProductContext } from "../contexts/Products.context";
import PropTypes from "prop-types";

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `${
					import.meta.env.VITE_GET_ALL_PRODUCTS_API_URL
				}?limit=254`;
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

		fetchData();
	}, []);

	const fetchSearchedData = async (searchedProduct) => {
		try {
			const url = `${import.meta.env.VITE_GET_ALL_PRODUCTS_API_URL}?limit=1&keyword=${searchedProduct}`;
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

  const fetchOneProduct = async (id) => {
    try {
      const url = `${import.meta.env.VITE_GET_ALL_PRODUCTS_API_URL}/${id}`;
      console.log(url)
      const response = await fetch(url);
      const result = await response.json();
      if (Array.isArray(result)) {
        return result;
      } else if (result.data) {
        return result.data;
      }
      console.log(result.data);
    } catch (err) {
      console.error(err);
    }
  }

	return (
		<ProductContext.Provider
			value={{ products, fetchSearchedData, fetchOneProduct }}
		>
			{children}
		</ProductContext.Provider>
	);
};

ProductProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
