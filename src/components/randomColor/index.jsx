import React from 'react';
import './styles.css';

export default function RandomColor({ theme }) {
	const [color, setColor] = React.useState(
		theme === 'light' ? '#ffffff' : '#000000'
	);

	function randomize(length) {
		return Math.floor(Math.random() * length);
	}

	function generateHexColor() {
		const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

		let hexColor = '#';

		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomize(hex.length)];
		}

		setColor(hexColor);
	}

	function generateRgbColor() {
		const r = randomize(256) - 1;
		const g = randomize(256) - 1;
		const b = randomize(256) - 1;

		const rgbColor = `rgb(${r}, ${g}, ${b})`;

		setColor(rgbColor);
	}

	return (
		<div
			style={{
				height: '100vh',
				background: color,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<div className='random-color-wrapper' data-theme={theme}>
				<div className='random-color-container'>
					<button onClick={generateHexColor}>Generate HEX color</button>
					<button onClick={generateRgbColor}>Generate RGB color</button>
				</div>
				<div className='random-color-container'>
					<h1>{color}</h1>
				</div>
			</div>
		</div>
	);
}
