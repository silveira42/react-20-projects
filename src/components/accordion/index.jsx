// single selection

import React from 'react';
import data from './data';
import './styles.css';

export default function Accordion({ theme }) {
	const [selected, setSelected] = React.useState(null);
	const [enabledMultiSelection, setEnabledMultiSelection] =
		React.useState(false);
	const [multiSelected, setMultiSelected] = React.useState([]);

	function handleSingleSelection(currentId) {
		setSelected(selected === currentId ? null : currentId);
	}

	function handleMultiSelection(currentId) {
		let cpyMultipleSelected = [...multiSelected];

		const findIndexOfCurrentId = cpyMultipleSelected.indexOf(currentId);

		if (findIndexOfCurrentId === -1) {
			cpyMultipleSelected.push(currentId);
		} else {
			cpyMultipleSelected.splice(findIndexOfCurrentId, 1);
		}

		setMultiSelected(cpyMultipleSelected);
	}

	return (
		<div className='accordion-wrapper' data-theme={theme}>
			<div className='accordion-container'>
				<button
					onClick={() => setEnabledMultiSelection(!enabledMultiSelection)}
				>
					{enabledMultiSelection ? 'Disable' : 'Enable'} multi select
				</button>
			</div>
			<div className='accordion-container'>
				{data && data.length > 0 ? (
					data.map(dataItem => (
						<div className='accordion-item' key={dataItem.id}>
							<div
								onClick={
									enabledMultiSelection
										? () => handleMultiSelection(dataItem.id)
										: () => handleSingleSelection(dataItem.id)
								}
								className='accordion-title'
							>
								<h3>{dataItem.question}</h3>
								<span>+</span>
							</div>
							{enabledMultiSelection
								? multiSelected.indexOf(dataItem.id) !== -1 && (
										<div className='accordion-content'>{dataItem.answer}</div>
								  )
								: selected === dataItem.id && (
										<div className='accordion-content'>{dataItem.answer}</div>
								  )}
						</div>
					))
				) : (
					<div>No data found!</div>
				)}
			</div>
		</div>
	);
}
