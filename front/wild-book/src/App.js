import "./App.css";
import Header from "./components/Header.js";
import WilderGrid from "./components/WilderGrid";
import Footer from "./components/Footer.js";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<WilderGrid />
			<Footer></Footer>
		</div>
	);
}
export default App;
