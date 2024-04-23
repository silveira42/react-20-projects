import MenuList from './menuList';
import './styles.css';

export default function TreeView({ theme, list = [] }) {
	return (
		<div className='tree-view-wrapper' data-theme={theme}>
			<div className='tree-view-container'>
				<MenuList theme={theme} list={list} />
			</div>
		</div>
	);
}
