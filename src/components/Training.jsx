import { useState } from "react";

function Training() {
	return (
		<div>
			<div className='training'>
				<div className='training__start-container'>
					<h2 className='training__name-section'>TRAINING</h2>
					<div className='training__short-discription'>
						We want present you the best brands for running! Choose which brand the best fitting with you!
					</div>
				</div>

				<div className='training__brand-sections'>
					<div className='training__brand-general-section'>
						<div className='training__brand-type-name'>BRAND</div>

						<div className='training__brand-general-sections'>
							<div className='training__brand-section'>
								<div className='training__brand-name'>ADIDAS</div>
								<div className='training__brand-logo adidas'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Training;
