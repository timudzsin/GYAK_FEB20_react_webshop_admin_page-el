import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Items from "./components/Items";
import UploadForm from "./components/UploadForm";

function App() {
	const [view, setView] = useState("shop");

	return (
		<div className="App">
			<Header onChangeView={setView}></Header>

			<div className="App-article">
				{view === "shop" && (
					<>
						<Cart></Cart>
						<Items></Items>
					</>
				)}
				{view === "other" && <UploadForm></UploadForm>}
			</div>
		</div>
	);
}

export default App;
