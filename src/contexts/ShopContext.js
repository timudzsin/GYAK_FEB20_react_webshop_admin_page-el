import React, { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
	const [itemArray, setItemArray] = useState([
		{ id: 1, name: "Copper Ingot", price: 800, image: "/images/Copper_Ingot.png" },
		{ id: 2, name: "Iron Ingot", price: 2250, image: "/images/Iron_Ingot.png" },
		{ id: 3, name: "Gold Ingot", price: 3800, image: "/images/Gold_Ingot.png" },
		{ id: 4, name: "Emerald", price: 5000, image: "/images/Emerald.png" },
		{ id: 5, name: "Diamond", price: 7500, image: "/images/Diamond.png" },
		{ id: 6, name: "Netherite Scrap", price: 11000, image: "/images/Netherite_Scrap.png" },
	]);

	const [cartArray, setCartArray] = useState([]);

	// ez a metódus tényleg kell? miért nem hasznájuk közvetlenül a setCartArray-t?
	const addToCart = (item) => {
		setCartArray((prev) => [...prev, item]);
	};

	return (
		<ShopContext.Provider
			value={{
				itemArray,
				setItemArray,
				cartArray,
				setCartArray,

				addToCart,
			}}
		>
			{children}
		</ShopContext.Provider>
	);
};
