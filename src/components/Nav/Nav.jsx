import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from './Nav.module.css'

export default function Nav(props) {
	return (
		<div className={style.menu}>
			<NavLink to={"/home"} style={{textDecoration: 'none'}}>
				<span className={style.items}> <strong>home</strong> </span>
			</NavLink>
			<NavLink to={"/about"} style={{textDecoration: 'none'}}>
				<span className={style.items}> <strong>about</strong> </span>
			</NavLink>
			<NavLink to={"/favorites"} style={{textDecoration: 'none'}}>
				<span className={style.items}> <strong>favorites</strong> </span>
			</NavLink>
			<SearchBar onSearch={props.onSearch}/>
		</div>
	);
}
