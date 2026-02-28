import React, { useContext } from "react";
import "./AxiosButton.css";
import { AxiosButtonContext } from "../contexts/AxiosButtonContext";

export default function AxiosButton() {
	const { handleClick } = useContext(AxiosButtonContext);

	return (
		<button className="AxiosButton" onClick={handleClick}>
			Send
		</button>
	);
}
