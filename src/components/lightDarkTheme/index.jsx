import useLocalStorage from './useLocalStorage';
import './styles.css';

export default function LightDarkTheme() {
	const [theme, setTheme] = useLocalStorage();

	function handleToggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	return (
		<div className='light-dark-mode-main' data-theme={theme}>
			<div className='light-dark-mode-container'>
				<p>Hello, world!</p>
				<button onClick={handleToggleTheme}>Change Theme</button>
			</div>
		</div>
	);
}
