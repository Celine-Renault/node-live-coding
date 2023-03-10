import "./App.css";
import Header from "./components/Header.js";
import WilderGrid from "./components/WilderGrid";
import Footer from "./components/Footer.js";
import AddWilderForm from "./components/AddWilderForm";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
	const [wilders, setWilders] = useState([]);
    const fetchData = async () => {
        const wilders = await axios.get("http://localhost:5000/api/wilder");
        setWilders(wilders.data);
        console.log("data wilders", wilders.data);
    };
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="App">
			<Header></Header>
            <AddWilderForm fetchData={fetchData}></AddWilderForm>
            {/* {wilders.map((wilder) => (
                <WilderGrid key={wilder.id} name={wilder.name} skills={wilder.skills}/>
            //    <p>{wilder.name}</p> 
            //    <p key={index}>{wilder.id}</p> 
                ))} */}
                <WilderGrid wilders={wilders} fetchData={fetchData}></WilderGrid>
			<Footer></Footer>
		</div>
	);
}
export default App;
