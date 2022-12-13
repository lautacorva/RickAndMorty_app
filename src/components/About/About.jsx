import style from './About.module.css'

export default function About() {
	return (
		<div className={style.container}>
			<h1 style={{fontSize: '25px'}}>Hola! Mi nombre es Lautaro Corva</h1>
			<p>Esta sección está reservada para comentarle a usted, señor usuario, los detalles del desarollo de esta sencilla página web.
				"RICK AND MORTY app" es un proyecto individual e integrador que fue realizado (aún sin terminar) durante el cursado del Módulo 2 en el bootcamp <strong>#SoyHenry</strong>. Está realizado enteramente con <strong>REACT</strong>, haciendo uso de la herramienta <strong>REDUX</strong> y mostrando mis vagos conocimientos en CSS (no es para nada mi fuerte, sepan disculpar!) 
			<hr />
				El principal objetivo detrás de esta aplicación web es poder demostrar mis conocimientos en <strong>FRONTEND</strong> con las ya mencionadas herramientas empleadas. Recuerde que aún sigo aprendiendo!
			<hr />
				Mi idea desde un principio fue tratar de respetar la paleta de colores de la serie, así como su estilo "infantil". Como verá, estoy lejos de terminar la página. Es cierto, podría acomodar todo de una manera más minimalista para tener así el proyecto listo para presentar... pero eso no sería tan divertido. Tengo un día a día ocupado, y es por esto que el avance es lento, aunque de todas maneras, este proyecto no tiene mucho tiempo de iniciado, y confío plenamente en mis habilidades para finalizarlo.
			<hr />
				Muchas gracias por detenerse a leer esto! Saludos señor usuario :)
			</p>
		</div>
	);
}
