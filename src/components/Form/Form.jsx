import React from "react";
import { validation } from "../validation.js";
import style from './Form.module.css'
import image from './Rick-and-Morty.png'

export default function Form(props) {
	const [userData, setUserData] = React.useState({
		username: "",
		password: "",
	});
	const [errors, setErrors] = React.useState({
		username: "",
		password: "",
	});

	function handleInputChange(e) {
		setErrors(
			validation({
				...userData,
				[e.target.name]: e.target.value,
			})
		);

		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.login(userData);
	}

	return (
		<div className={style.primera}>
			<form onSubmit={handleSubmit} className={style.segunda}>
				<img src={image} alt="home" style={{width:'100%',}} />
				<h2 style={{marginBlockStart:'0', marginBlockEnd:'50px', color: 'white',textShadow: '0px 0px 9px black'}}>ENJOY THE UNIVERSE</h2>
				<input
					className={style.inputs}
					type='text'
					name='username'
					placeholder='Usuario o email'
					value={userData.username}
					onChange={handleInputChange}
				/>
				{errors.username && <p className={style.errMsg}>{errors.username}</p>}
				<br />
				<input
					className={style.inputs}
					type='password'
					name='password'
					placeholder="Contraseña"
					value={userData.password}
					onChange={handleInputChange}
				/>
				<p className={style.errMsg}>{errors.password && errors.password}</p>

				<button className={style.ingresar} type="submit">INGRESAR</button>
			</form>
		</div>
	);
}
