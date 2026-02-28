import React, { createContext, useContext } from "react";
import { ShopContext } from "./ShopContext";
import axios from "axios";

export const AxiosButtonContext = createContext();

export const AxiosButtonProvider = ({ children }) => {
	const { itemArray, setItemArray } = useContext(ShopContext);

	const handleClick = async () => {
		try {
			console.log("adsada");
			const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

			// random kép
			const images = [
				"/images/Blue_Key.gif",
				"/images/Red_Key.gif",
				"/images/Green_Key.png",
				"/images/Yellow_Key.gif",
			];
			const randomImage = images[Math.floor(Math.random() * images.length)];

			// 1-5 random szó a válaszból
			const words = response.data.title.split(" ");
			for (let i = words.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[words[i], words[j]] = [words[j], words[i]];
			}
			const randomWords = words.slice(0, Math.floor(Math.random() * 4) + 1).join(" ");

			// új Item objektum létrehozása
			// pl.: { id: 1, name: "Copper Ingot", price: 800, image:"/images/Copper_Ingot.png" },
			const newItem = {
				id: itemArray.length ? Math.max(...itemArray.map((item) => item.id)) + 1 : 1,
				name: randomWords,
				price: 500 + Math.floor(Math.random() * ((10000 - 500) / 250 + 1)) * 250,
				image: randomImage,
			};

			// belerakja az ItemArray-be
			setItemArray((prev) => [...prev, newItem]);
		} catch (error) {
			console.error("Hiba történt:", error);
		}
	};

	return (
		<AxiosButtonContext.Provider value={{handleClick}}>{children}</AxiosButtonContext.Provider>
	);
};
