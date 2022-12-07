import Card from "../Card/Card.jsx";

export default function Cards(props) {
	const { characters, onClose } = props;

	return (
		<>
		<h2 style={{paddingTop:'90px', color:'white'}}>Para mostrar personajes, agregalos por su ID!</h2>
		<div style={{display:'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
			{characters.map(character => (
				<Card
					name={character.name}
					gender={character.gender}
					species={character.species}
					image={character.image}
					key={character.id}
					id={character.id}
					onClose={onClose}
				/>
			))}
		</div>
		</>
		
	);
}
