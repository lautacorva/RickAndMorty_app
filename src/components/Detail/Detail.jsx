import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from './Detail.module.css'

export default function Detail() {
	const { detailId } = useParams();
	const navigate = useNavigate();
	const [character, setCharacter] = useState({});

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
			.then(response => response.json())
			.then(char => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			})
			.catch(err => {
				window.alert("Error", err);
			});

		return setCharacter({});
	}, [detailId]);

	return (
		<div className={style.detalle}>
			<div>
				<button onClick={() => navigate("/home")} className={style.back}>Volver</button>
			</div>
			<h1>{character.name}</h1>
			<h2>STATUS: {character.status}</h2>
			<h2>ESPECIE: {character.species}</h2>
			<h2>GENERO: {character.gender}</h2>
			<h2>ORIGIN: {character.origin?.name}</h2>
		</div>
	);
}
