/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import './styles.css'

export default function ImageSlider({url, page = 1, limit = 10}){
	const [ images, setImages ] = React.useState([])
	const [ currentImage, setCurrentImage ] = React.useState(0)
	const [ loading, setLoading ] = React.useState(false)
	const [ errorMessage, setErrorMessage ] = React.useState(null)

	function handlePrevious() {
		setCurrentImage(currentImage === 0 ? images.length -1 : currentImage - 1)
	}

	function handleNext() {
		setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
	}

	async function fetchImages(url) {
		try {
			setLoading(true)
			const response = await fetch(`${url}?page=${page}&limit=${limit}`)
			const data = await response.json()

			if (!data) {
				throw new Error('Server error. Empty response.')
			}

			setImages(data);
			setLoading(false);
		} catch (exception) {
			setErrorMessage(exception.message);
			setLoading(false);
		}
	}

	React.useEffect(() => {
		if (url !== "") fetchImages(url);
	}, [url])

	if (errorMessage !== null) {
		return (
			<div className="container">
				<h3 className="error" >Error. Please reload the page.</h3>
				<p className="error" >Details: {errorMessage}</p>
			</div>
		)
	}

	if (loading) {
		return (
			<div className="container">
				<h3 className="loading">Loading... Please wait</h3>
			</div>
		)
	}

	return (
		<div className="container">
			<BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
			{
				images && images.length ?
					images.map((image, index) => (
						<img
							key = {index}
							alt={image.download_url}
							src={image.download_url}
							className = {currentImage === index ? "current-image" : "current-image current-image-hidden"}
						/>
					))
				: null
			}
			<BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>

			<span className="circle-indicators">
			{
				images && images.length ?
					images.map((_, index) => (
						<button key={index} onClick={() => setCurrentImage(index)} className={currentImage === index ? "active-indicator" : "current-indicator inactive-indicator"}></button>
					))
				: null
			}
			</span>
		</div>
	)
}

