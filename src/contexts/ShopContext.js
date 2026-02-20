import React, { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
	const itemArray = [
		{ id: 1, name: "Copper Ingot", price: 7000 },
		{ id: 2, name: "Iron Ingot", price: 2500 },
		{ id: 3, name: "Gold Ingot", price: 3000 },
		{ id: 4, name: "Emerald Gem", price: 5000 },
		{ id: 5, name: "Diamond Gem", price: 7500 },
		{ id: 6, name: "Netherite Ingot", price: 9900 },
	];

	const [cartArray, setCartArray] = useState([]);

	const addToCart = (item) => {
		setCartArray((prev) => [...prev, item]);
	};

	return (
		<ShopContext.Provider
			value={{
				itemArray,
				cartArray,
				addToCart,
			}}
		>
			{children}
		</ShopContext.Provider>
	);
};
