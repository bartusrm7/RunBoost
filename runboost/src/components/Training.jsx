import { useState, useEffect } from "react";

function Training() {
	const [isOpened, setIsOpened] = useState(false);
	const [opacityClass, setOpacityClass] = useState("hide-opacity");
	const handleOpen = () => {
		setIsOpened(true);
	};
	const handleClose = () => {
		setIsOpened(false);
	};
	useEffect(() => {
		setOpacityClass("display-opacity");
	});

	return (
		<div>
			<div className={`training ${opacityClass}`}>
				<div className='training__start-container'>
					<h2 className='training__name-section'>TRAINING PLANS FOR BEGINNERS</h2>
					<div className='training__short-discription'>
						We want to present our specialized training programs for runners targeting distances of 5 km, 10 km, half
						marathon, and marathon! Each program is crafted by experts to accommodate various skill levels and the
						unique needs of runners.
					</div>
				</div>

				<div className='training__run-sections'>
					<div className='training__run-general-section'>
						<div className='training__run-general-sections'>
							<div className='training__run-section'>
								<h3 className='training__run-name'>5K Training Plan: Achieve Your Personal Best</h3>
								<div className='training__run-dist five'>
									Prepare for your best 5k race with our comprehensive training plan. Tailored to your fitness level,
									our program focuses on speed and endurance, guiding you through interval training, tempo runs, and
									long easy runs. Crush your goals and set a new personal record with our expert guidance and supportive
									community.
								</div>
								<button className='download-btn' onClick={handleOpen}>
									DOWNLOAD
								</button>
							</div>
							<div className='training__run-section'>
								<h3 className='training__run-name'>10K Training Plan: Conquer the Distance</h3>
								<div className='training__run-dist ten'>
									Step up to the 10k challenge with confidence using our proven training plan. Designed to build
									endurance and speed, our program features progressive workouts to prepare you for race day. Fuel your
									success with nutrition tips and race day strategies, and join our community for support and
									motivation.
								</div>
								<button className='download-btn' onClick={handleOpen}>
									DOWNLOAD
								</button>
							</div>
							<div className='training__run-section'>
								<h3 className='training__run-name'>Half Marathon Training Plan: Conquer 13.1 Miles</h3>
								<div className='training__run-dist half-marathon'>
									Prepare for your first or fastest half marathon with our structured training plan. Gradually increase
									your mileage and intensity while prioritizing injury prevention and recovery. Develop race day
									readiness with pacing strategies and mental toughness training, and cross the finish line strong.
								</div>
								<button className='download-btn' onClick={handleOpen}>
									DOWNLOAD
								</button>
							</div>
							<div className='training__run-section'>
								<h3 className='training__run-name'>Marathon Training Plan: Conquer 26.2 Miles</h3>
								<div className='training__run-dist marathon'>
									Conquer the ultimate running challenge with our marathon training plan. Follow a periodized approach
									to build endurance and strength over several months. Fuel your success with proper nutrition and
									hydration strategies, and develop mental toughness for race day. Prepare to achieve your marathon
									goals like a champ.
								</div>
								<button className='download-btn' onClick={handleOpen}>
									DOWNLOAD
								</button>
							</div>
						</div>
					</div>
				</div>

				{isOpened && (
					<>
						<div className='training__download-container'>
							<div className='training__download-window'>
								<button className='cancel' onClick={handleClose}>
									X
								</button>
								<input type='email' placeholder='Email' />
								<button className='download'>DOWNLOAD</button>
							</div>
							<div className='training__shadow'></div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Training;
