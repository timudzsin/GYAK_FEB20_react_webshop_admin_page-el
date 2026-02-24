import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Items from "./components/Items";
import UploadForm from "./components/UploadForm";

function App() {
	// navigációt így kell csinálni?
	const [view, setView] = useState("shop");

	let content;
	if (view === "shop") {
		content = (
			<>
				<Cart></Cart>
				<Items></Items>
			</>
		);
	} else if (view === "add") {
		content = <UploadForm></UploadForm>;
	}

	return (
		<div className="App">
			<Header currentView={view} onChangeView={setView}></Header>

			<div className="App-article">{content}</div>
		</div>
	);
}

export default App;
