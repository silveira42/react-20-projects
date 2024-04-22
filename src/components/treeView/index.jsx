import MenuList from './menuList';
import './styles.css';

export default function TreeView({ list = [] }) {
	return (
		<div className='tree-view-container'>
			<MenuList list={list} />
		</div>
	);
}
