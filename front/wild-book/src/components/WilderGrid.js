import "../../src/App.css";
import "./WilderGrid.css";
import WilderCard from "../components/WilderCard.js";
// import wildersData from "../dataWilders";

export default function WilderGrid({wilders}) {
    // console.log(name);
    // console.log(skills);
    console.log('wilderGrid',wilders);
	return (
		<main className="container">
			<h2>Wilders</h2>
			<section className="card-row">
            {/* {wildersData.map((wilder) => { */}
				  {wilders.map((wilder) => {
					return (
						<WilderCard 
                        key={wilder.id} 
                        name={wilder.name} 
                        // city={wilder.city}
                        skills={wilder.skills} ></WilderCard>
                        // <WilderCard 
                        // key={index} 
                        // name={wilder.name} 
                        // city={wilder.city}
                        // skills={wilder.skills} 
                        // />
					);
				})} 
                {/* <WilderCard {...name}{...skills}/> */}
                {/* <WilderCard name/> */}
				{/* <WilderCard name={"John Smith"} /> */}
			</section>
		</main>
	);
}
