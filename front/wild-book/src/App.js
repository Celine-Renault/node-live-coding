import "./App.css";
import Header from "./components/Header.js";
import WilderGrid from "./components/WilderGrid";
import Footer from "./components/Footer.js";
import { useEffect } from 'react';
import axios from 'axios';

function App() {
    useEffect(() => {
        const fetchData = async () => {
            const wilders = await axios.get("http://localhost:5000/api/wilder");
            console.log('bibi',wilders.data);
        };
        fetchData();
    }, []);
    return (
        <div className="App">
			<Header></Header>
			<WilderGrid />
			<Footer></Footer>
		</div>
	);
}
export default App;
