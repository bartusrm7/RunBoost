import { useState } from "react";

function PopularBrands() {
	return (
		<div>
			<div className='popular-brands'>
				<div className='popular-brands__start-container'>
					<h2 className='popular-brands__name-section'>POPULAR BRANDS</h2>
					<div className='popular-brands__short-discription'>
						We want  present you the best brands for running! Choose which brand the best fitting with you!
					</div>
				</div>

				<div className='popular-brands__brand-sections'>
					<div className='popular-brands__brand-general-section'>
						<div className='popular-brands__brand-type-name'>GARMIN</div>
						<div className='popular-brands__brand-section'>
							<div className='popular-brands__brand-name-section'>
								<div className='name'>Name</div>
							</div>

							<div className='popular-brands__brand-name-section'>
								<div className='name'>Battery</div>
							</div>

							<div className='popular-brands__brand-name-section'>
								<div className='name'>Price</div>
							</div>
						</div>
					</div>

					<div className='popular-brands__brand-general-section'>
						<div className='popular-brands__brand-type-name'>POLAR</div>
						<div className='popular-brands__brand-section'>
							<div className='popular-brands__brand-name-section'>
								<div className='name'>Name</div>
							</div>
							<div className='popular-brands__brand-name-section'>
								<div className='name'>Battery</div>
							</div>
							<div className='popular-brands__brand-name-section'>
								<div className='name'>Price</div>
							</div>
						</div>
					</div>

					<div className='popular-brands__brand-general-section'>
						<div className='popular-brands__brand-type-name'>SUUNTO</div>
						<div className='popular-brands__brand-section'>
							<div className='popular-brands__brand-name-section'>
								<div className='name'>Name</div>
							</div>
							<div className='popular-brands__brand-name-section'>
								<div className='name'>Battery</div>
							</div>
							<div className='popular-brands__brand-name-section'>
								<div className='name'>Price</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopularBrands;
