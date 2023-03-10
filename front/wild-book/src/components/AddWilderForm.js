import axios from "axios";
import { useState } from "react";

export default function AddWilderForm({ fetchData }) {
	const [name, setName] = useState("");

	return (
		<form
			className="container"
			onSubmit={ async (event) => {
				event.preventDefault();
			    await axios.post("http://localhost:5000/api/wilder", { name });
				fetchData();
			}}
		>
			<div>
				<label htmlFor="name">Ajouter un Wilder</label>
				<input
					id="name"
					type="text"
					value={name}
					placeholder="New Wilder"
					onChange={(event) => {
						setName(event.target.value);
					}}
				></input>
			</div>
			<button>Envoyer</button>
		</form>
	);
}
