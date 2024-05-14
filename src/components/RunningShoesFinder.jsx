import { useState, useRef } from "react";

function RunningShoesFinder() {
	const [isStarted, setIsStarted] = useState(false);
	const [choosingName, setChoosingName] = useState([
		{ name: "What is your sex?", value: ["", "Male", "Female"] },
		{ name: "What is your distances?", value: ["", "More than 20km", "Less than 20km"] },
		{ name: "What type of running you doing?", value: ["", "Training", "Race"] },
		{ name: "Where will you run?", value: ["", "Asphalt", "Trail"] },
	]);
	const [userChoices, setUserChoices] = useState({});
	const [chosenShoesContainer, setChosenShoesContainer] = useState(false);
	const [chosenShoesForUser, setChosenShoesForUser] = useState();

	const handleIsStarted = () => setIsStarted(!isStarted);
	const handleChosenShoesContainer = () => setChosenShoesContainer(!chosenShoesContainer);
	const kokoRef = useRef(null);
	function handleChosenOptions(name, value) {
		setUserChoices(prevState => ({
			...prevState,
			[name]: value,
		}));
	}
	function handleChosenShoesByUser() {
		const { distances, runType, surfaceType } = userChoices;
		let chosenShoes = [];

		if (distances === "More than 20km" && runType === "Race" && surfaceType === "Asphalt") {
			chosenShoes = ["Nike Alphafly", "Adidas Adios Pro 4"];
		} else if (distances === "Less than 20km" && runType === "Training" && surfaceType === "Asphalt") {
			chosenShoes = ["Nike Pegasus", "Saucony Ride"];
		} else if (distances === "More than 20km" && runType === "Training" && surfaceType === "Asphalt") {
			chosenShoes = ["New Balance FuelCell Rebel V4", "Asics Magic Speed"];
		} else if (distances === "Less than 20km" && runType === "Race" && surfaceType === "Trail") {
			chosenShoes = ["Salomon Ultra Glide", "Adidas Terrex"];
		} else if (distances === "More than 20km" && runType === "Training" && surfaceType === "Trail") {
			chosenShoes = ["Nike Juniper", "Asics Fuji"];
		} else if (distances === "Less than 20km" && runType === "Training" && surfaceType === "Trail") {
			chosenShoes = ["Hoka Speedgoat", "Adidas Adios Pro 4"];
		}

		if (distances === "" || runType === "" || surfaceType === "") {
			return;
		}

		setChosenShoesForUser(chosenShoes);
		setChosenShoesContainer(true);
		setIsStarted(false);

		console.log(userChoices);
		console.log(chosenShoes);
		console.log(chosenShoesForUser);
	}
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
					{choosingName.map((item, index) => (
						<div key={index} className='running-shoes-finder__choosing-container'>
							<label>{item.name}</label>
							<select onChange={e => handleChosenOptions(item.name, e.target.value)}>
								{item.value &&
									item.value.map((option, index) => (
										<option key={index} value={option}>
											{option}
										</option>
									))}
							</select>
						</div>
					))}
					<button className='running-shoes-finder__accept-choices-btn' onClick={handleChosenShoesByUser}>
						ACCEPT CHOICES
					</button>
				</div>

				<div className={`running-shoes-finder__chosen-shoes-container ${chosenShoesContainer ? "show" : "hide"}`}>
					<div className='running-shoes-finder__found-shoes-big-container'>
						<div className='running-shoes-finder__found-shoes-container'>
							<div className='running-shoes-finder__found-shoes-name'></div>
							<div className='running-shoes-finder__found-shoes-price'></div>
							<div className='running-shoes-finder__found-shoes-discription'></div>
						</div>
						<div className='running-shoes-finder__found-shoes-container'>
							<div className='running-shoes-finder__found-shoes-name'></div>
							<div className='running-shoes-finder__found-shoes-price'></div>
							<div className='running-shoes-finder__found-shoes-discription'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RunningShoesFinder;
