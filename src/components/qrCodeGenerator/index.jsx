import React from 'react';
import QRCode from 'react-qr-code';
import './styles.css';

export default function QrCodeGenerator({ theme }) {
	const [qrCode, setQrCode] = React.useState('');
	const [input, setInput] = React.useState('');

	function handleGenerate() {
		setQrCode(input);
		console.log(input);
	}

	return (
		<div className='qr-code-wrapper' data-theme={theme}>
			<h1>QR Code Generator</h1>
			<div className='qr-code-input'>
				<input
					onChange={e => setInput(e.target.value)}
					type='text'
					name='qr-code'
					placeholder='Enter your text here'
				/>
				<button
					disabled={input && input.trim() !== '' ? false : true}
					onClick={handleGenerate}
					className={
						input && input.trim() !== ''
							? 'qr-code-button'
							: 'qr-code-button qr-code-button-disabled'
					}
					title={
						input && input.trim() !== ''
							? 'Generate QR Code'
							: 'Please input some text'
					}
				>
					Generate
				</button>
			</div>
			<div className='qr-code'>
				<QRCode id='qr-code-value' value={qrCode} size='400px' />
			</div>
		</div>
	);
}
