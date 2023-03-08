import "./App.css";
import "./styles/wilder.css";
import Wilder from "./components/Wilder.js";
// import { useState } from 'react';

function App() {
	// const [counter, setCounter] = useState(0);
    // console.log('APP');
	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				{/* <p>Currently at {counter}</p> */}
				{/* <button onClick={() => setCounter(counter + 1)}>+1</button> */}
				<div className="container">
					<h1>Wilders Book</h1>
				</div>
			</header>
			<main className="container">
				<h2>Wilders</h2>
                    <Wilder name={"John Smith"}/>
                    <Wilder name="Jone Doe"/>
                    <Wilder name="Bibi"/>
                    <Wilder name="Toto"/>
			</main>
			<footer>
				<div className="container">
					<p>&copy; 2022 Wild Code School</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
