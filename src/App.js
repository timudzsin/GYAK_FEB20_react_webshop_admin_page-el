import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<div className="App-article">
				<Cart></Cart>
				<Items></Items>
			</div>
		</div>
	);
}

export default App;
