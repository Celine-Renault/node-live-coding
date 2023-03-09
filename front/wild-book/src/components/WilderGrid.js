import "../../src/App.css";
import "./WilderGrid.css";
import WilderCard from "../components/WilderCard.js";
import wildersData from "../dataWilders";

export default function WilderGrid() {
	// console.log("test data W", wildersData);
	return (
		<main className="container">
			<h2>Wilders</h2>
			<section className="card-row">
				{wildersData.map((wilder, index) => {
					return (
						<WilderCard 
                        key={index} 
                        name={wilder.name} 
                        city={wilder.city}
                        skills={wilder.skills} />
					);
				})}
				{/* <WilderCard name={"John Smith"} /> */}
			</section>
		</main>
	);
}
