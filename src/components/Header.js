import React from "react";
import "./Header.css";

export default function Header(props) {
	return (
		<div className="Header">
			<button
				className={
					props.currentView === "shop"
						? "Header-menu active"
						: "Header-menu"
				}
				onClick={() => props.onChangeView("shop")}
			>
				Shop
			</button>

			<button
				className={
					props.currentView === "form"
						? "Header-menu active"
						: "Header-menu"
				}
				onClick={() => props.onChangeView("form")}
			>
				Form
			</button>

            <button
				className={
					props.currentView === "axios"
						? "Header-menu active"
						: "Header-menu"
				}
				onClick={() => props.onChangeView("axios")}
			>
				Axios
			</button>
		</div>
	);
}
