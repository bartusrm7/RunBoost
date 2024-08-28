import NavComponent from "./NavComponent";
import BestShoesComponent from "./BestShoesComponent";
import AccesoriesComponent from "./WatchesComponent";
import FooterComponent from "./FooterComponent";
import { useEffect, useState } from "react";

function Home() {
	const [opacityClass, setOpacityClass] = useState("hide-opacity");
	useEffect(() => {
		setOpacityClass("display-opacity");
	});

	return (
		<>
			<div className={`home ${opacityClass}`}>
				<NavComponent />
				<BestShoesComponent />
				<AccesoriesComponent />
				<FooterComponent />
			</div>
		</>
	);
}
export default Home;
