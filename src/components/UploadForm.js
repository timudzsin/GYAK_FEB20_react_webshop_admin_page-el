import React, { useContext, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import "./UploadForm.css";

export default function UploadForm() {
	const { itemArray, setItemArray } = useContext(ShopContext);

	const [formData, setFormData] = useState({ name: "", price: "" });

	const handleChange = (e) => {
		console.log("change");

		const t = e.target;
		// ez a state-nek csak azt a mezőjét változtatja, ami a target name
		setFormData((prev) => ({
			...prev,
			[t.name]: t.value,
		}));
	};

	const handleSubmit = (e) => {
		console.log("submit");

		// megakadájozza, hogy az űrlap újratöltse az oldalt submit után
		e.preventDefault();

		// ha bármi űres, kilép
		if (!formData.name || !formData.price) {
			alert("Fill out every field!");
			return;
		}

		// új Item objektum létrehozása
		//{ id: 1, name: "Copper Ingot", price: 800, image:"/images/Copper_Ingot.png" },
		const newItem = {
			id: itemArray.length ? Math.max(...itemArray.map((item) => item.id)) + 1 : 1,
			name: formData.name,
			price: Number(formData.price),
			image: "/images/Item.png",
		};

		// belerakja az ItemArray-be
		setItemArray((prev) => [...prev, newItem]);

		// reseteli a form-ot.
		setFormData({
			name: "",
			price: "",
		});
	};

	return (
		<form className="UploadForm" onSubmit={handleSubmit}>
			<input
				className="UploadForm-nameinput"
				type="text"
				name="name"
				placeholder="name"
				value={formData.name}
				onChange={handleChange}
			/>
			<input
				className="UploadForm-priceinput"
				type="number"
				name="price"
				placeholder="price"
				value={formData.price}
				onChange={handleChange}
			/>
			<button className="UploadForm-button" type="submit">
				Upload
			</button>
		</form>
	);
}
