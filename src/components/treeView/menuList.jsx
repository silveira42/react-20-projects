import MenuItem from './menuItem';
import './styles.css';

export default function MenuList({ theme, list = [] }) {
	return (
		<ul className='menu-list-container' data-theme={theme}>
			{list && list.length
				? list.map(menuItem => <MenuItem theme={theme} item={menuItem} />)
				: null}
		</ul>
	);
}
