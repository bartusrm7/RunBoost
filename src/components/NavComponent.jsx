import { useState } from "react";
import { Link } from "react-router-dom";

function NavComponent() {
	const [hamburgerMenu, setHamburgerMenu] = useState(false);
	const [isOpenedMenu, setIsOpenedMenu] = useState(false);

	const handleHamburgerMenu = () => {
		setHamburgerMenu(!hamburgerMenu);
		setIsOpenedMenu(!isOpenedMenu);
	};

	return (
		<>
			<div>
				<div className='nav'>
					<div className='nav__container'>
						{hamburgerMenu ? (
							<span className='material-symbols-outlined hamburger' onClick={handleHamburgerMenu}>
								close
							</span>
						) : (
							<span className='material-symbols-outlined hamburger' onClick={handleHamburgerMenu}>
								menu
							</span>
						)}
						<ul className={`nav__items ${isOpenedMenu ? "display-flex" : ""}`}>
							<li className='nav__item' style={{ fontWeight: "bold" }}>
								<Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
									Home
								</Link>
							</li>
							<li className='nav__item'>
								<Link to='/best-shoes'>Best Shoes</Link>
							</li>
							<li className='nav__item'>
								<Link to='/popular-brands'>Popular Brands</Link>
							</li>
							<li className='nav__item'>
								<Link to='/watches'>Watches</Link>
							</li>

							<li className='nav__item'>
								<Link to='/training'>Training</Link>
							</li>
						</ul>
					</div>
					<div className='nav__label-container'>
						<h1 className='nav__label'>RunBoost</h1>
					</div>

					<div className='nav__photo'></div>
					<div className='nav__shadow'></div>
				</div>
			</div>
		</>
	);
}

export default NavComponent;
