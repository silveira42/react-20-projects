import React from 'react';
import MenuList from './menuList';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './styles.css';

export default function MenuItem({ item }) {
	const [displayCurrentChildren, setDisplayCurrentChildren] = React.useState(
		{}
	);

	function handleToggleChildren(currentLabel) {
		setDisplayCurrentChildren({
			...displayCurrentChildren,
			[currentLabel]: !displayCurrentChildren[currentLabel],
		});
	}

	return (
		<li>
			<div className='menu-item'>
				<p>{item.label}</p>
				{item && item.children && item.children.length ? (
					<span onClick={() => handleToggleChildren(item.label)}>
						{displayCurrentChildren[item.label] ? (
							<FaMinus color='#fff' size={25} />
						) : (
							<FaPlus color='#fff' size={25} />
						)}
					</span>
				) : null}
			</div>
			{item &&
			item.children &&
			item.children.length > 0 &&
			displayCurrentChildren[item.label] ? (
				<MenuList list={item.children} />
			) : null}
		</li>
	);
}
