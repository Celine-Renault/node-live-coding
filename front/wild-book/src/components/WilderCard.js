import blank_profile from "../assets/blank_profile.png";
import "./WilderCard.css";
import Skill from "./Skill.js";


const Wilder = ({ name, city, skills }) => {
    // console.log(name);
	return (
		<>
			<article className="card">
				<img src={blank_profile} alt={`${name} Profile`} />
				<h3>{name}</h3>
				<p>{city}</p>
				<h4>Wild Skills</h4>
				<ul className="skills">
                    {skills.map((skills, index) => {
                        return (
                            <Skill key={index} title={skills.title} votes={skills.votes}/>
                        )
                    } )}
                    {/* <Skill></Skill> */}
					{/* <Skill title="NODE JS" votes={"5"} /> */}
				</ul>
			</article>
		</>
	);
};
export default Wilder;
