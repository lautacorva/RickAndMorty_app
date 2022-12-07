import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { agregarFavorito, removerFavorito } from "../../redux/actions.js";
import style from './Card.module.css'

function Card(props) {
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		props.myFavorites.forEach(fav => {
			if (fav.id === props.id) {
				setIsFav(true);
			}
		});
	}, [props.myFavorites]);

	function handleFavorite() {
		if (isFav) {
			setIsFav(false);
			props.removeFav(props.id);
		} else {
			setIsFav(true);
			props.addFav(props);
		}
	}

	return (
		<div className={style.card}>
			<div className={style.container}>
				<img src={props.image} alt="" className={style.imagen}/>
				{isFav ? (
					<button onClick={handleFavorite} className={style.botonFav}>❤️</button>
				) : (
					<button onClick={handleFavorite} className={style.botonFav}>fav</button>
				)}
				<button onClick={() => props.onClose(props.id)} className={style.botonX}> <strong>X</strong> </button>
			<Link to={`/detail/${props.id}`} className={style.nombre}>
				<span>{props.name.toUpperCase()}</span>
			</Link>
			</div>
			{/* <img src={props.image} alt="" className={style.imagen}/> */}
			<div className={style.texto}>
				<h2>{">"} Specie: {props.species}</h2>
				<h2>{">"} Gender: {props.gender}</h2>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addFav: personaje => dispatch(agregarFavorito(personaje)),
		removeFav: id => dispatch(removerFavorito(id)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
