import './styles.css';

export default function LightDarkTheme({ onToggle, theme }) {
	return (
		<div className='light-dark-mode-wrapper' data-theme={theme}>
			<div className='light-dark-mode-container'>
				<p>Hello, world!</p>
				<button onClick={onToggle}>Change Theme</button>
			</div>
		</div>
	);
}
