import MenuItem from './menuItem';
import './styles.css';

export default function MenuList({ list = [] }) {
	return (
		<ul className='menu-list-container'>
			{list && list.length
				? list.map(menuItem => <MenuItem item={menuItem} />)
				: null}
		</ul>
	);
}
