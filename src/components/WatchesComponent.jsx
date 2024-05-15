function AccesoriesComponent() {
	return (
		<div>
			<div className='accesories'>
				<div className='accesories__name-container'>
					<h2 className='accesories__label'>RUN IN BEST ACCESORIES!</h2>
					<p className='accesories__short-discription'>Check the best watches brands in running world!</p>
				</div>
				<div className='accesories__items-container'>
					<div className='accesories__item-container garmin'>
						<h3 className='accesories__item-brand '>GARMIN</h3>
					</div>
					<div className='accesories__item-container polar'>
						<h3 className='accesories__item-brand '>POLAR</h3>
					</div>
					<div className='accesories__item-container suunto'>
						<h3 className='accesories__item-brand '>SUUNTO</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AccesoriesComponent;
