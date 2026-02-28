import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Items from "./components/Items";
import UploadForm from "./components/ItemForm";
import AxiosButton from "./components/AxiosButton";

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
	} else if (view === "form") {
		content = <UploadForm></UploadForm>;
	} else if (view === "axios") {
		content = <AxiosButton></AxiosButton>;
	}

	return (
		<div className="App">
			<Header currentView={view} onChangeView={setView}></Header>

			<div className="App-article">{content}</div>
		</div>
	);
}

export default App;
