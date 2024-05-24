import { useState } from "react";

function RunningShoesFinder() {
	const [isStarted, setIsStarted] = useState(false);
	const questions = [
		{ id: 1, question: "What is your sex?", values: ["Male", "Female"] },
		{ id: 2, question: "What is your distances?", values: ["More than 20km", "Less than 20km"] },
		{ id: 3, question: "What type of running you doing?", values: ["Training", "Race"] },
		{ id: 4, question: "Where will you run?", values: ["Asphalt", "Trail"] },
	];
	const shoesMap = {
		"Male,More than 20km,Training,Asphalt": [
			{
				name: "Nike Air Zoom Pegasus 39",
				price: "$120",
				discription: "Versatile and cushioned, ideal for long-distance running on asphalt.",
				image: "nike-air-zoom-pegasus-39.jpg",
			},
			{
				name: "Asics Gel-Kayano 28",
				price: "$150",
				discription: "Offers stability and support for high mileage training on asphalt.",
				image: "asics-gel-kayano-28.jpg",
			},
		],
		"Male,More than 20km,Training,Trail": [
			{
				name: "Salomon Speedcross 5",
				price: "$140",
				discription: "Designed for tackling trails with aggressive grip and durability.",
				image: "salomon-speedcross-5.png",
			},
			{
				name: "Brooks Cascadia 16",
				price: "$130",
				discription: "Reliable trail shoes offering comfort and protection.",
				image: "brooks-cascadia-16.jpg",
			},
		],
		"Male,More than 20km,Race,Asphalt": [
			{
				name: "Adidas Adizero Adios Pro 3",
				price: "$180",
				discription: "Lightweight racing shoes optimized for speed on asphalt.",
				image: "adidas-adizero-adios-pro-3.jpg",
			},
			{
				name: "Nike ZoomX Vaporfly Next%",
				price: "$250",
				discription: "Cutting-edge racing shoes for top performance on asphalt.",
				image: "nike-zoomx-vaporfly-next%.webp",
			},
		],
		"Male,More than 20km,Race,Trail": [
			{
				name: "Hoka One One Speedgoat 4",
				price: "$160",
				discription: " Agile and stable trail shoes suitable for racing.",
				image: "hoka-one-one-speedgoat-4.webp",
			},
			{
				name: "Altra Timp 3",
				price: "$140",
				discription: "Trail shoes offering natural foot positioning and comfort.",
				image: "altra-timp-3.jpg",
			},
		],
		"Male,Less than 20km,Training,Asphalt": [
			{
				name: "Brooks Ghost 15",
				price: "$130#",
				discription: "Comfortable and versatile shoes for training on asphalt.",
				image: "brooks-ghost-15.webp",
			},
			{
				name: "Mizuno Wave Rider 25",
				price: "$150",
				discription: "Smooth and responsive training shoes for asphalt runs.",
				image: "mizuno-wave-rider-25.jpg",
			},
		],
		"Male,Less than 20km,Training,Trail": [
			{
				name: "La Sportiva Bushido II",
				price: "$140",
				discription: "Technical trail running shoes for stability and protection.",
				image: "la-sportiva-bushido-II.jpg",
			},
			{
				name: "Saucony Peregrine 11",
				price: "$130",
				discription: "Versatile and durable trail shoes offering great traction.",
				image: "saucony-peregrine-11.webp",
			},
		],
		"Male,Less than 20km,Race,Asphalt": [
			{
				name: "Asics MetaRacer",
				price: "$200",
				discription: "Lightweight and efficient shoes for racing on asphalt.",
				image: "asics-metaracer.jpg",
			},
			{
				name: "New Balance FuelCell RC Elite v2",
				price: "$190",
				discription: "Designed for speed with responsive cushioning for asphalt races.",
				image: "new-balance-fuelcell-rc-elite-v2.jpg",
			},
		],
		"Male,Less than 20km,Race,Trail": [
			{
				name: "Asics Gel-Trabuco 12 M",
				price: "$190",
				discription: "Designed for extreme terrain with superior grip and durability.",
				image: "asics-gel-trabuco-12M.webp",
			},
			{
				name: "Salomon S/Lab Sense 8",
				price: "$180",
				discription: "High-performance trail racing shoes with excellent grip and lightweight design.",
				image: "salomon-s-lab-sense-8.jpg",
			},
		],
		"Female,More than 20km,Training,Asphalt": [
			{
				name: "Nike React Infinity Run Flyknit 2",
				price: "$160",
				discription: "Engineered for injury prevention and comfort during long runs.",
				image: "nike-react-infinity-run-flyknit-2.webp",
			},
			{
				name: "Brooks Glycerin 19",
				price: "$170",
				discription: "Plush and supportive shoes designed for high-mileage runs on asphalt.",
				image: "brooks-glycerin-19.jpg",
			},
		],
		"Female,More than 20km,Training,Trail": [
			{
				name: "Saucony Peregrine 11",
				price: "$130",
				discription: "Versatile and durable trail shoes offering great traction.",
				image: "saucony-peregrine-11.jpg",
			},
			{
				name: "Salomon Sense Ride 4",
				price: "$150",
				discription: "Comfortable and versatile trail shoes for long-distance runs.",
				image: "salomon-sense-ride-4.jpg",
			},
		],
		"Female,More than 20km,Race,Asphalt": [
			{
				name: "New Balance FuelCell RC Elite v2",
				price: "$190",
				discription: "Designed for speed with responsive cushioning for asphalt races.",
				image: "new-balance-fuelcell-rc-elite-v2-2.jpg",
			},
			{
				name: "Nike ZoomX Vaporfly Next%",
				price: "$250",
				discription: "Cutting-edge racing shoes for top performance on asphalt.",
				image: "nike-zoomx-vaporfly-next%1.jpg",
			},
		],
		"Female,More than 20km,Race,Trail": [
			{
				name: "Hoka One One Speedgoat 4",
				price: "$160",
				discription: "Agile and stable trail shoes suitable for racing.",
				image: "link_to_image_23",
			},
			{
				name: "Altra Timp 3",
				price: "$140",
				discription: "Trail shoes offering natural foot positioning and comfort.",
				image: "link_to_image_24",
			},
		],
		"Female,Less than 20km,Training,Asphalt": [
			{
				name: "Nike Air Zoom Pegasus 39",
				price: "120",
				discription: "Versatile and cushioned, ideal for long-distance running on asphalt.",
				image: "link_to_image_25",
			},
			{
				name: "Asics Gel-Kayano 28",
				price: "$150",
				discription: "Offers stability and support for high mileage training on asphalt.",
				image: "link_to_image_26",
			},
		],
		"Female,Less than 20km,Training,Trail": [
			{
				name: "La Sportiva Bushido II",
				price: "$140",
				discription: "Technical trail running shoes for stability and protection.",
				image: "link_to_image_27",
			},
			{
				name: "Saucony Peregrine 11",
				price: "$130",
				discription:
					"Versatile and durable trail shoes offering great traction.Versatile and durable trail shoes offering great traction.",
				image: "link_to_image_28",
			},
		],
		"Female,Less than 20km,Race,Asphalt": [
			{
				name: "Adidas Adizero Adios Pro 3",
				price: "$180",
				discription: "Lightweight racing shoes optimized for speed on asphalt.",
				image: "link_to_image_29",
			},
			{
				name: "Nike ZoomX Vaporfly Next%",
				price: "$250",
				discription: "Cutting-edge racing shoes for top performance on asphalt.",
				image: "link_to_image_30",
			},
		],
		"Female,Less than 20km,Race,Trail": [
			{
				name: "Inov-8 X-Talon G 235",
				price: "$150",
				discription: "Designed for extreme terrain with superior grip and durability.",
				image: "link_to_image_31",
			},
			{
				name: "Salomon S/Lab Sense 8",
				price: "$180",
				discription: "High-performance trail racing shoes with excellent grip and lightweight design.",
				image: "link_to_image_32",
			},
		],
	};
	const [selectedAnswers, setSelectedAnswers] = useState({});
	const [chosenShoesContainer, setChosenShoesContainer] = useState(false);
	const [recommendedShoes, setRecommendedShoes] = useState([]);

	const handleIsStarted = () => {
		setSelectedAnswers({});
		setIsStarted(!isStarted);
		setRecommendedShoes([]);
		setChosenShoesContainer(false);
	};
	const handleChosenOptions = (question, value) => {
		setSelectedAnswers(prevState => ({
			...prevState,
			[question]: [value],
		}));
	};
	function handleChosenShoesByUser() {
		const selectedKey = Object.values(selectedAnswers).join(",");
		const shoes = shoesMap[selectedKey] || [];

		setRecommendedShoes(prevState => [...prevState, shoes]);
		setIsStarted(false);
		setChosenShoesContainer(true);
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
							<select
								value={selectedAnswers[question] || ""}
								onChange={e => handleChosenOptions(question, e.target.value)}>
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
					{recommendedShoes.map(shoes => (
						<div key={shoes} className='running-shoes-finder__found-shoes-big-container'>
							<div className='running-shoes-finder__found-shoes-container'>
								<div className='running-shoes-finder__found-shoes-name'>{shoes[0].name}</div>
								<div className='running-shoes-finder__found-shoes-discription'>{shoes[0].discription}</div>
								<div className='running-shoes-finder__found-shoes-price'>
									<p style={{ fontWeight: "bold" }}>Price:</p> {shoes[0].price}
								</div>
								<div className='tooltip'>?</div>
								<div
									className='tooltip-photo'
									style={{ backgroundImage: `url(../assets/brands/${shoes[0].image})` }}></div>
							</div>
						</div>
					))}
					{recommendedShoes.map(shoes => (
						<div key={shoes} className='running-shoes-finder__found-shoes-big-container'>
							<div className='running-shoes-finder__found-shoes-container'>
								<div className='running-shoes-finder__found-shoes-name'>{shoes[1].name}</div>
								<div className='running-shoes-finder__found-shoes-discription'>{shoes[1].discription}</div>
								<div className='running-shoes-finder__found-shoes-price'>
									<p style={{ fontWeight: "bold" }}>Price:</p> {shoes[1].price}
								</div>
								<div className='tooltip'>?</div>
								<div
									className='tooltip-photo'
									style={{ backgroundImage: `url(../assets/brands/${shoes[1].image})` }}></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default RunningShoesFinder;
