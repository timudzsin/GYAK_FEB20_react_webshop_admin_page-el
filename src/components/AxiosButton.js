import React from "react";
import "./AxiosButton.css";
import axios from "axios";

export default function AxiosButton() {
	const handleClick = async () => {
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/posts/1",
			);
			console.log("Sikeres válasz:", response.data);
		} catch (error) {
			console.error("Hiba történt:", error);
		}
	};

	return (
		<button className="AxiosButton" onClick={handleClick}>
			Send
		</button>
	);
}
