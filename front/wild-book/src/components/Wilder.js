import blank_profile from "../assets/blank_profile.png";
import Skill from "./skill.js";
import "../styles/wilder.css";

const Wilder = ({name}) => {
    // console.log('test component wilder');
    return (
    <>
	<article className="card">
		<img src={blank_profile} alt="Jane Doe Profile" />
		<h3>{name}</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat.
		</p>
		<h4>Wild Skills</h4> <ul className="skills"> 
            <Skill title="HTML" votes={"2"}/>
			<Skill title="JS" votes={"3"}/>
			<Skill title="REACT" votes={"1"}/>
			<Skill title="NODE JS" votes={"5"}/>
		</ul>
	</article>;
    </>
    )
};
export default Wilder;
