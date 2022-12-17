import { connect, useDispatch } from "react-redux";
import { filtrarPersonajes, ordenarPersonajes } from "../../redux/actions.js";
import { removerFavorito } from "../../redux/actions.js";
import style from './Favorites.module.css'


function Favorites({ myFavorites }) {
	const dispatch = useDispatch();

	function handleFilter(e) {
		dispatch(filtrarPersonajes(e.target.value));
	}
	
	function removeFav(id) {
		dispatch(removerFavorito(id))
	}

	return (
		<div style={{paddingTop: '95px'}}>
			<h1 style={{color: 'white', fontSize: '38px'}}>Your favorites</h1>
			<div className={style.selectores}>
				<h3 style={{color:'white', margin:'5px'}}>Orden</h3>
				<select
					name="order"
					onChange={e => dispatch(ordenarPersonajes(e.target.value))}
					style={{marginRight:'10px'}}
				>
					<option value="default" disabled>
						Select...
					</option>
					<option value="Ascendente">Ascendente</option>
					<option value="Descendente">Descendente</option>
				</select>
				<h3 style={{color:'white', margin:'5px'}}>Género</h3>
				<select name="gender" id="" onChange={handleFilter}>
					<option value="" disabled>
						Select...
					</option>
					<option value="All">All</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>
			<div className={style.favCards}>
				{myFavorites.map(character => (
					<div className={style.favCard}>
						<button className={style.remove} onClick={() => removeFav(character.id)}></button>
						<img src={character.image} alt="character" />
						<h3 style={{color:'white'}}>
							{character.name.toUpperCase()} - ID: {character.id}
						</h3>
					</div>
				))}
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		myFavorites: state.myFavorites,
	};
}

export default connect(mapStateToProps)(Favorites);
