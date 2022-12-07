import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);

	const username = "lautacorva69@gmail.com";
	const password = "Password1";

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		!access && navigate("/");
	}, [access]);

	function login(userData) {
		if (userData.username === username && userData.password === password) {
			setAccess(true);
			navigate("/home");
		}
	}

	function onSearch(character) {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then(response => response.json())
			.then(data => {
				if (data.name) {
					setCharacters(oldChars => [...oldChars, data]);
				} else {
					window.alert("ID inválido");
				}
			});
	}

	function onClose(id) {
		setCharacters(oldCharacters =>
			oldCharacters.filter(char => char.id !== id)
		);
	}

	return (
		<div className="App">
			{location.pathname === "/" ? null : <Nav onSearch={onSearch} />}
			<Routes>
				<Route path="/" element={<Form login={login} />}></Route>
				<Route
					path="/home"
					element={<Cards onClose={onClose} characters={characters} />}
				/>
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/about" element={<About />} />
				<Route path="/detail/:detailId" element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
