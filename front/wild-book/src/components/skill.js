const Skill = ({title, vote}) => {
    return(
			<li>
				{title}
				<span className="votes">{vote}</span>
			</li>
    );
};
export default Skill;