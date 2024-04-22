/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './styles.css';

export default function LoadMoreButton({ url, limit = 20 }) {
	const [products, setProducts] = React.useState([]);
	const [skip, setSkip] = React.useState(0);
	const [loading, setLoading] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState(null);
	const [loadButtonEnabled, setLoadButtonEnabled] = React.useState(true);

	function handleLoadMore() {
		const newSkip = skip + limit;
		setSkip(newSkip);
	}

	async function fetchProducts(url, skip, limit) {
		try {
			setLoading(true);

			const response = await fetch(
				`${url}?limit=${limit}&skip=${skip}&select=title,price,description,thumbnail`
			);

			const data = await response.json();

			if (!data) {
				throw new Error('Server error. No data found.');
			}

			if (!data.products || !data.products.length) {
				throw new Error('Server error. No data found.');
			}

			const newProducts = data.products;

			let cpyProducts = [...products];
			cpyProducts.push(...newProducts);

			if (cpyProducts.length >= data.total) {
				setLoadButtonEnabled(false);
			}

			setProducts(cpyProducts);
			setLoading(false);
		} catch (exception) {
			setErrorMessage(exception.message);
			setLoading(false);
		}
	}

	React.useEffect(() => {
		if (url !== '') fetchProducts(url, skip, limit);
	}, [url]);

	React.useEffect(() => {
		if (url !== '') fetchProducts(url, skip, limit);
	}, [skip]);

	if (errorMessage !== null) {
		return (
			<div className='load-container'>
				<h3 className='error'>Error. Please reload the page.</h3>
				<p className='error'>Details: {errorMessage}</p>
			</div>
		);
	}

	return (
		<div className='load-container'>
			<div className='product-list'>
				{products && products.length
					? products.map(product => (
							<div className='product'>
								<img
									className='product-image'
									src={product.thumbnail}
									alt={product.description}
								/>
								<h3 className='product-title'>{product.title}</h3>
								<h4 className='product-description'>{product.description}</h4>
								<p className='product-price'>${product.price}.00</p>
							</div>
					  ))
					: null}
			</div>
			{loading ? (
				<div className='load-container'>
					<h3 className='loading'>Loading... Please wait</h3>
				</div>
			) : null}
			{loadButtonEnabled ? (
				<button className='load-more-button' onClick={handleLoadMore}>
					Load more data
				</button>
			) : null}
		</div>
	);
}
