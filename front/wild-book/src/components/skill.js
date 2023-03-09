import "../components/Skill.css";

const Skill = ({ title, votes }) => {
	return (
		<li>
			{/* {skills.map((skills, index) => {
				return (<Skill key={index} title={skills.title} votes={skills.votes} />);
			})} */}

			{title}
			<span className="votes">{votes}</span>
		</li>
	);
};
export default Skill;
