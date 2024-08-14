function FooterComponent() {
	const currentYear = new Date().getFullYear();

	return (
		<div>
			<div className='footer'>
				<div className='footer__containers'>
					<div className='footer__separate-component'>
						<div className='footer__item'>
							<span className='material-symbols-outlined'>smartphone</span> <div className='item-name'>693 361 782</div>
						</div>
						<div className='footer__item'>
							<span className='material-symbols-outlined'>home</span>{" "}
							<div className='item-name'>Canada GreenDay Street</div>
						</div>
						<div className='footer__item'>
							<span className='material-symbols-outlined'>mail</span>
							<div className='item-name'>run_boost@running.com</div>
						</div>
					</div>
					<div className='footer__separate-component'>
						<div className='footer__item'>
							<div className='i'>
								<ion-icon name='logo-facebook'></ion-icon>
							</div>
							<div className='item-name'>RunBoost</div>
						</div>
						<div className='footer__item'>
							<div className='i'>
								<ion-icon name='logo-instagram'></ion-icon>
							</div>
							<div className='item-name'>RunBoost</div>
						</div>
						<div className='footer__item'>
							<div className='i'>
								<ion-icon name='logo-twitter'></ion-icon>
							</div>
							<div className='item-name'>RunBoost</div>
						</div>
					</div>
				</div>
				<footer className='footer__main-bottom-footer'>&copy;{currentYear} RunBoost</footer>
			</div>
		</div>
	);
}

export default FooterComponent;
