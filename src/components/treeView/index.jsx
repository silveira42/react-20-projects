import MenuList from './menuList';
import './styles.css';

export default function TreeView({ theme, list = [] }) {
	return (
		<div className='tree-view-container' data-theme={theme}>
			<MenuList theme={theme} list={list} />
		</div>
	);
}
