import { useState } from "react";

function BestShoesPage() {
	const [asphaltShoes, setAsphaltShoes] = useState([
		{ name: "Nike Alphafly 3", weight: "218g", drop: "8mm", price: "285$" },
		{ name: "Nike Vaporfly 3", weight: "198g", drop: "8mm", price: "240$" },
		{ name: "New Balance SuperComp Elite v4", weight: "237g", drop: "6mm", price: "260$" },
		{ name: "Adidas Adizero Adios Pro 3", weight: "223g", drop: "6.5mm", price: "220$" },
		{ name: "Asics Metaspeed", weight: "188g", drop: "5mm", price: "220$" },
		{ name: "Saucony Endorphin Pro 4", weight: "212g", drop: "8mm", price: "180$" },
	]);
	const [trailShoes, setTrailShoes] = useState([
		{ name: "HOKA Mafate Speed 4", weight: "295g", drop: "4mm", price: "185$" },
		{ name: "HOKA Speedgoat 5", weight: "305g", drop: "6mm", price: "155$" },
		{ name: "Saucony Peregrine 14", weight: "266g", drop: "4mm", price: "140$" },
		{ name: "Altra Lone Peak 8", weight: "310g", drop: "0mm", price: "140$" },
		{ name: "Brooks Cascadia 17", weight: "325g", drop: "8mm", price: "140$" },
		{ name: "Salomon Speedcross 6", weight: "295g", drop: "10mm", price: "140$" },
	]);

	return (
		<div>
			<div className='best-shoes-page'>
				<div className='best-shoes-page__start-container'>
					<h2 className='best-shoes-page__name-section'>BEST SHOES</h2>
					<div className='best-shoes-page__short-discription'>
						We wanna present you the best shoes for running on a specific surface! Everyone can find something for self!
					</div>
				</div>

				<div className='best-shoes-page__shoes-sections narrow-view'>
					<div className='best-shoes-page__shoes-general-section asphalt'>
						<div className='best-shoes-page__shoes-type-name'>ASPHALT</div>
						<div className='best-shoes-page__shoes-section'>
							{asphaltShoes.map((asphalt, index) => (
								<div key={index} className='best-shoes-page__general-discription name-photo'>
									<div className='best-shoes-page__name-shoes-section'>Name</div>
									<div className='shoes'>{asphalt.name}</div>
									<div className='best-shoes-page__name-shoes-section'>Weight</div>
									<div className='shoes'>{asphalt.weight}</div>
									<div className='best-shoes-page__name-shoes-section'>Drop</div>
									<div className='shoes'>{asphalt.drop}</div>
									<div className='best-shoes-page__name-shoes-section'>Price</div>
									<div className='shoes'>{asphalt.price}</div>
								</div>
							))}
						</div>
					</div>

					<div className='best-shoes-page__shoes-general-section trail'>
						<div className='best-shoes-page__shoes-type-name'>TRAIL</div>
						<div className='best-shoes-page__shoes-section'>
							{trailShoes.map((trail, index) => (
								<div key={index} className='best-shoes-page__general-discription name-photo'>
									<div className='best-shoes-page__name-shoes-section'>Name</div>
									<div className='shoes'>{trail.name}</div>
									<div className='best-shoes-page__name-shoes-section'>Weight</div>
									<div className='shoes'>{trail.weight}</div>
									<div className='best-shoes-page__name-shoes-section'>Drop</div>
									<div className='shoes'>{trail.drop}</div>
									<div className='best-shoes-page__name-shoes-section'>Price</div>
									<div className='shoes'>{trail.price}</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='best-shoes-page__shoes-sections wider-view'>
					<div className='best-shoes-page__shoes-general-section asphalt'>
						<div className='best-shoes-page__shoes-type-name'>ASPHALT</div>
						<div className='best-shoes-page__wide-shoes-section-wider'>
							<div className='best-shoes-page__name-shoes-section-wider'>Name</div>
							<div className='best-shoes-page__name-shoes-section-wider'>Weight</div>
							<div className='best-shoes-page__name-shoes-section-wider'>Drop</div>
							<div className='best-shoes-page__name-shoes-section-wider'>Price</div>
							<div className='best-shoes-page__general-discription-wider name-photo'>
								{asphaltShoes.map((asphalt, index) => (
									<div key={index}>
										<div className='shoes'>{asphalt.name}</div>
									</div>
								))}
							</div>
							<div className='best-shoes-page__general-discription-wider name-photo'>
								{asphaltShoes.map((asphalt, index) => (
									<div key={index}>
										<div className='shoes'>{asphalt.weight}</div>
									</div>
								))}
							</div>
							<div className='best-shoes-page__general-discription-wider name-photo'>
								{asphaltShoes.map((asphalt, index) => (
									<div key={index}>
										<div className='shoes'>{asphalt.drop}</div>
									</div>
								))}
							</div>
							<div className='best-shoes-page__general-discription-wider name-photo'>
								{asphaltShoes.map((asphalt, index) => (
									<div key={index}>
										<div className='shoes'>{asphalt.price}</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className='best-shoes-page__shoes-general-section trail'>
						<div className='best-shoes-page__shoes-type-name'>TRAIL</div>
						<div className='best-shoes-page__wide-shoes-section-wider'>
							<div className='best-shoes-page__name-shoes-section-wider'>Name</div>
							<div className='best-shoes-page__name-shoes-section-wider'>Weight</div>
							<div className='best-shoes-page__name-shoes-section-wider'>Drop</div>
							<div className='best-shoes-page__name-shoes-section-wider'>Price</div>
							<div className='best-shoes-page__general-discription-wider name-photo'>
								{trailShoes.map((trail, index) => (
									<div key={index}>
										<div className='shoes'>{trail.name}</div>
									</div>
								))}
							</div>
							<div className='best-shoes-page__general-discription-wider name-photo'>
								{trailShoes.map((trail, index) => (
									<div key={index}>
										<div className='shoes'>{trail.weight}</div>
									</div>
								))}
							</div>
							<div className='best-shoes-page__general-discription-wider name-photo'>
								{trailShoes.map((trail, index) => (
									<div key={index}>
										<div className='shoes'>{trail.drop}</div>
									</div>
								))}
							</div>
							<div className='best-shoes-page__general-discription-wider name-photo'>
								{trailShoes.map((trail, index) => (
									<div key={index}>
										<div className='shoes'>{trail.price}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BestShoesPage;
