import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import "./Items.css";
import Item from "./Item";

export default function Items() {
	const { itemArray } = useContext(ShopContext);

	return (
		<div className="Items">
			{itemArray.map((item, index) => {
				return <Item key={index} item={item}></Item>;
			})}
		</div>
	);
}
