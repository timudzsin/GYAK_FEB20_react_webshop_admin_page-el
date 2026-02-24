import React from "react";
import "./Header.css";

export default function Header(props) {
	return (
		<div className="Header">
			<button
				className="Header-menu"
				onClick={() => props.onChangeView("shop")}
			>
				Shop
			</button>

			<button
				className="Header-menu"
				onClick={() => props.onChangeView("other")}
			>
				Upload item
			</button>
		</div>
	);
}
