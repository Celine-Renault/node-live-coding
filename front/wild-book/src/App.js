import "./App.css";
import Header from "./components/Header.js";
import WilderGrid from "./components/WilderGrid";
import Footer from "./components/Footer.js";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
	const [wilders, setWilders] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const wilders = await axios.get("http://localhost:5000/api/wilder");
			setWilders(wilders.data);
			console.log("data wilders", wilders.data);
		};
		fetchData();
	}, []);
	return (
		<div className="App">
			<Header></Header>
            {/* {wilders.map((wilder) => (
                <WilderGrid key={wilder.id} name={wilder.name} skills={wilder.skills}/>
            //    <p>{wilder.name}</p> 
            //    <p key={index}>{wilder.id}</p> 
                ))} */}
                <WilderGrid wilders={wilders}></WilderGrid>
			<Footer></Footer>
		</div>
	);
}
export default App;
