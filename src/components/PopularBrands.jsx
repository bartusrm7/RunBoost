import { useState, useEffect } from "react";

function PopularBrands() {
	const [opacityClass, setOpacityClass] = useState("hide-opacity");
	useEffect(() => {
		setOpacityClass("display-opacity");
	});
	return (
		<div>
			<div className={`popular-brands ${opacityClass}`}>
				<div className='popular-brands__start-container'>
					<h2 className='popular-brands__name-section'>POPULAR BRANDS</h2>
					<div className='popular-brands__short-discription'>
						We want present you the best brands for running! Choose which brand the best fitting with you!
					</div>
				</div>

				<div className='popular-brands__brand-sections'>
					<div className='popular-brands__brand-general-section'>
						<div className='popular-brands__brand-type-name'>BRAND</div>

						<div className='popular-brands__brand-general-sections'>
							<div className='popular-brands__brand-section'>
								<div className='popular-brands__brand-name'>ADIDAS</div>
								<div className='popular-brands__brand-logo adidas'></div>
							</div>
							<div className='popular-brands__brand-section'>
								<div className='popular-brands__brand-name'>NIKE</div>
								<div className='popular-brands__brand-logo nike'></div>
							</div>
							<div className='popular-brands__brand-section'>
								<div className='popular-brands__brand-name'>ASICS</div>
								<div className='popular-brands__brand-logo asics'></div>
							</div>
							<div className='popular-brands__brand-section'>
								<div className='popular-brands__brand-name'>SAUCONY</div>
								<div className='popular-brands__brand-logo saucony'></div>
							</div>
							<div className='popular-brands__brand-section'>
								<div className='popular-brands__brand-name'>BROOKS</div>
								<div className='popular-brands__brand-logo brooks'></div>
							</div>
							<div className='popular-brands__brand-section'>
								<div className='popular-brands__brand-name'>HOKA</div>
								<div className='popular-brands__brand-logo hoka'></div>
							</div>
							<div className='popular-brands__brand-section'>
								<div className='popular-brands__brand-name'>SALOMON</div>
								<div className='popular-brands__brand-logo salomon'></div>
							</div>
							<div className='popular-brands__brand-section'>
								<div className='popular-brands__brand-name'>ALTRA</div>
								<div className='popular-brands__brand-logo altra'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopularBrands;
