import { useState } from "react";

function RunningShoesFinder() {
	const [isStarted, setIsStarted] = useState(false);
	const questions = [
		{ id: 1, question: "What is your sex?", values: ["Male", "Female"] },
		{ id: 2, question: "What is your distances?", values: ["More than 20km", "Less than 20km"] },
		{ id: 3, question: "What type of running you doing?", values: ["Training", "Race"] },
		{ id: 4, question: "Where will you run?", values: ["Asphalt", "Trail"] },
	];
	const [userAnswers, setUserAnswers] = useState([]);
	const [chosenShoesContainer, setChosenShoesContainer] = useState(false);
	const [selectedAnswers, setSelectedAnswers] = useState({});

	const handleIsStarted = () => setIsStarted(!isStarted);
	// const handleChosenShoesContainer = () => setChosenShoesContainer(!chosenShoesContainer);

	const handleChosenOptions = (question, value) => {
		setSelectedAnswers(prevState => ({
			...prevState,
			[question]: [value],
		}));
		setUserAnswers([...userAnswers, selectedAnswers]);
	};

	function handleChosenShoesByUser() {
		console.log(selectedAnswers);
		console.log(userAnswers);
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
					{questions.map(({ id, question, values }) => (
						<div key={id} className='running-shoes-finder__choosing-container'>
							<label>{question}</label>
							<select onChange={e => handleChosenOptions(questions, e.target.value)}>
								<option value=''></option>
								{values.map(value => (
									<option key={value} value={value}>
										{value}
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
