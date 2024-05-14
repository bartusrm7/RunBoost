import { Link } from "react-router-dom";

function BestShoesComponent() {
	return (
		<div>
			<div className='best-shoes'>
				<div className='best-shoes__finder-section-container'>
					<h2 className='best-shoes__label'>FIND YOUR PERFECT SHOES!</h2>
					<p className='best-shoes__short-description'>
						Answer for 4 simple questions and we will recommend three pair of shoes that will work well for you.
					</p>
					<button className='best-shoes__running-shoes-finder-btn'>
						<Link to='/running-shoes-finder'>Running shoes finder</Link>
					</button>
				</div>

				<div className='best-shoes__shoes-to-choose-section-container'>
					<h2 className='best-shoes__label'>TYPES SHOES: </h2>
					<p className='best-shoes__short-description'>Find shoes suitable for the type of surface!</p>

					<div className='best-shoes__shoes-categories-container'>
						<div className='best-shoes__shoes-category-item asphalt'>
							<h3 className='best-shoes__shoes-category-name'>ASPHALT</h3>
							<div className='best-shoes__shadow'></div>
						</div>
						<div className='best-shoes__shoes-category-item trail'>
							<h3 className='best-shoes__shoes-category-name'>TRAIL</h3>
							<div className='best-shoes__shadow'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BestShoesComponent;
