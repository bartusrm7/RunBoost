function WatchesPage() {
	const garminWatch = [
		{ name: "Garmin Forerunner 245", battery: "24 hrs", price: "350$" },
		{ name: "Garmin VivoActive 4", battery: "18 hrs", price: "320$" },
		{ name: "Garmin Fenix", battery: "10 hrs", price: "600$" },
		{ name: "Garmin VivoActive 4", battery: "18 hrs", price: "320$" },
	];
	const polarWatch = [
		{ name: "Polar Vantage M", battery: "30 hrs", price: "250$" },
		{ name: "Polar Ignite", battery: "22 hrs", price: "230$" },
		{ name: "Polar Grit X2 Pro", battery: "43 hrs", price: "800$" },
		{ name: "Polar Vantage V3", battery: "40 hrs", price: "620$" },
	];
	const suuntonWatch = [
		{ name: "Suunto Race", battery: "26 hrs", price: "400$" },
		{ name: "Suunto Vertical", battery: "85 hrs", price: "650$" },
		{ name: "Suunto 9 Peak Pro", battery: "120 hrs", price: "280$" },
		{ name: "Suunto Core Alpha", battery: "138 hrs", price: "390$" },
	];

	return (
		<div>
			<div className='watches-page'>
				<div className='watches-page__start-container'>
					<h2 className='watches-page__name-section'>WATCHES</h2>
					<div className='watches-page__short-discription'>
						Check the three watches brands! Find watch which will be the best for you!
					</div>
				</div>

				<div className='watches-page__brand-sections wide-view'>
					<div className='watches-page__brand-general-section'>
						<div className='watches-page__brand-type-name'>GARMIN</div>
						<div className='watches-page__brand-section'>
							<div className='watches-page__brand-name-section'>
								<div className='name'>Name</div>
								{garminWatch.map((garmin, index) => (
									<div key={index}>{garmin.name}</div>
								))}
							</div>

							<div className='watches-page__brand-name-section'>
								<div className='name'>Battery</div>
								{garminWatch.map((garmin, index) => (
									<div key={index}>{garmin.battery}</div>
								))}
							</div>

							<div className='watches-page__brand-name-section'>
								<div className='name'>Price</div>
								{garminWatch.map((garmin, index) => (
									<div key={index}>{garmin.price}</div>
								))}
							</div>
						</div>
					</div>

					<div className='watches-page__brand-general-section'>
						<div className='watches-page__brand-type-name'>POLAR</div>
						<div className='watches-page__brand-section'>
							<div className='watches-page__brand-name-section'>
								<div className='name'>Name</div>
								{polarWatch.map((polar, index) => (
									<div key={index}>{polar.name}</div>
								))}
							</div>
							<div className='watches-page__brand-name-section'>
								<div className='name'>Battery</div>
								{polarWatch.map((polar, index) => (
									<div key={index}>{polar.battery}</div>
								))}
							</div>
							<div className='watches-page__brand-name-section'>
								<div className='name'>Price</div>
								{polarWatch.map((polar, index) => (
									<div key={index}>{polar.price}</div>
								))}
							</div>
						</div>
					</div>

					<div className='watches-page__brand-general-section'>
						<div className='watches-page__brand-type-name'>SUUNTO</div>
						<div className='watches-page__brand-section'>
							<div className='watches-page__brand-name-section'>
								<div className='name'>Name</div>
								{suuntonWatch.map((suunto, index) => (
									<div key={index}>{suunto.name}</div>
								))}
							</div>
							<div className='watches-page__brand-name-section'>
								<div className='name'>Battery</div>
								{suuntonWatch.map((suunto, index) => (
									<div key={index}>{suunto.battery}</div>
								))}
							</div>
							<div className='watches-page__brand-name-section'>
								<div className='name'>Price</div>
								{suuntonWatch.map((suunto, index) => (
									<div key={index}>{suunto.price}</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WatchesPage;
