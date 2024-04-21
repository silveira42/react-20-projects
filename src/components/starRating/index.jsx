import React from "react"
import { FaStar } from 'react-icons/fa'
import './styles.css'

export default function StarRating({starAmount = 10}){
	const [ hover, setHover ] = React.useState(0)
	const [ rating, setRating ] = React.useState(0)

	function handleClick(index) {
		setRating(index);
	}

	function handleMouseMove(index) {
		setHover(index);
	}

	function handleMouseLeave() {
		setHover(rating);
	}

	return (
		<div>
			{
				[...Array(starAmount)].map((_, index) => {
					index += 1

					return (
						<FaStar
							key={index}
							className={index <= (hover || rating) ? "active" : "inactive" }
							onClick={() => handleClick(index)}
							onMouseMove={() => handleMouseMove(index)}
							onMouseLeave={() => handleMouseLeave()}
							size={40}
						/>
					)
				})
			}
		</div>
	)
}
