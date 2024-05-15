import { useState } from "react";
import { Link } from "react-router-dom";

function NavComponent() {
	const [hamburgerMenu, setHamburgerMenu] = useState(false);
	const handleHamburgerMenu = () => {
		setHamburgerMenu(!hamburgerMenu);
		isOpenedMenu();
	};
	const isOpenedMenu = () => {
		const navItems = document.querySelector(".nav__items").classList.toggle("show-items");
		Array.from(document.querySelectorAll(".nav__item")).forEach(navItem => {
			navItem.classList.toggle("display-flex");
		});
		setHamburgerMenu(!hamburgerMenu);
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
						<ul className='nav__items'>
							<li className='nav__item' style={{ fontWeight: "bold" }}>
								<Link to='/'>Home</Link>
							</li>
							<li className='nav__item'>Best Shoes</li>
							<li className='nav__item'>Watches</li>
							<li className='nav__item'>Popular Brands</li>
							<li className='nav__item'>Training</li>
							<li className='nav__item'>
								<Link to='/training-calculator'>Running Calculator</Link>
							</li>
						</ul>
					</div>
					<div className='nav__search-container'>
						<input className='nav__search-input'></input>
						<button className='nav__search-btn'>Search</button>
					</div>

					<div className='nav__photo'></div>
					<div className='nav__shadow'></div>
				</div>
			</div>
		</>
	);
}

export default NavComponent;
