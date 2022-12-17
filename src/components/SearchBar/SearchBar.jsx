import { useState } from "react";
import style from './SearchBar.module.css'
import { validationSearch } from "../validationSearch";

export default function SearchBar(props) {
	const [character, setCharacter] = useState("");

	const [error, setError] = useState("")

	function handleChange(e) {
		setError(validationSearch(e.target.value))
		setCharacter(e.target.value);
	}

	return (
		<div className={style.barra}>
			<input type="number" value={character} onChange={handleChange} placeholder='ID' style={{height: '35px', padding: '0px', fontWeight: '600', borderRadius:'3px'}} className={error && style.danger}/>
			<button onClick={() => props.onSearch(character)} className={style.boton}>Buscar</button>
		</div>
	);
}
