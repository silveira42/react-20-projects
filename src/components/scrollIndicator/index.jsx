import './styles.css';

export default function ScrollIndicator({ scrollPercentage = 0 }) {
	return (
		<div>
			<div className='scroll-indicator-wrapper'>
				<div className='scroll-indicator-container'>
					<div
						className='scroll-indicator-current'
						style={{ width: `${scrollPercentage}%` }}
					></div>
				</div>
			</div>
		</div>
	);
}
