import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../contexts/ShopContext";

export default function Cart() {
	const { cartArray } = useContext(ShopContext);

	// Ha nincs benne semmi, ne jelenjen meg semmi
	if (cartArray.length === 0) return null;

	return (
		<div className="Cart">
			{cartArray.map((item, index) => {
				return (
					<div className="Item" key={index}>
						<img
							className="Item-image"
							src={item.image}
						></img>
						<h3 className="Item-name">{item.name}</h3>
					</div>
				);
			})}
		</div>
	);
}
