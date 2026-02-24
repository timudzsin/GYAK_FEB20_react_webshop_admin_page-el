import React, { useContext } from "react";
import "./Item.css";
import { ShopContext } from "../contexts/ShopContext";

export default function Item(props) {
	//const { addToCart } = useContext(ShopContext);
	const { setCartArray } = useContext(ShopContext);

	function onClick() {
		//addToCart(props.item);
		setCartArray((prev) => [...prev, props.item]);
	}

	return (
		<div className="Item">
			<img className="Item-image" src={props.item.image}></img>
			<h3 className="Item-name">{props.item.name}</h3>
			<p className="Item-price">{props.item.price}</p>
			<button className="Item-button" onClick={onClick}>
				Add to cart
			</button>
		</div>
	);
}
