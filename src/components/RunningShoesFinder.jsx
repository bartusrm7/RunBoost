import { useState } from "react";

function RunningShoesFinder() {
	const [isStarted, setIsStarted] = useState(false);
	const handleIsStarted = () => {
		setIsStarted(!isStarted);
	};
	return (
		<div>
			<div className='running-shoes-finder'>
				<h2 className='running-shoes-finder__name'>Running Shoes Finder</h2>

				<div className={`running-shoes-finder__start-container ${isStarted ? "hide" : "show"}`}>
					<div className='running-shoes-finder__short-discription'>
						Our program will find the right shoes special for you!
					</div>
					<button className='running-shoes-finder__start-btn' onClick={handleIsStarted}>
						START
					</button>
				</div>

				<div className={`running-shoes-finder__search-container ${isStarted ? "show" : "hide"}`}>
					<div className='running-shoes-finder__choosing-container'></div>
					<div className='running-shoes-finder__choosing-container'></div>
					<div className='running-shoes-finder__choosing-container'></div>
					<div className='running-shoes-finder__choosing-container'></div>
					<div className='running-shoes-finder__choosing-container'></div>
				</div>
			</div>
		</div>
	);
}

export default RunningShoesFinder;
