import "../components/Skill.css";

// const Skill = ({ name, votes }) => {
    const Skill = ({ name }) => {
        console.log(name);
	return (
		<li>
			{/* {skills.map((skills, index) => {
				return (<Skill key={index} title={skills.title} votes={skills.votes} />);
			})} */}
			{name}
			{/* <span className="votes">{votes}</span> */}
		</li>
	);
};
export default Skill;
