import NavComponent from "./NavComponent";
import BestShoesComponent from "./BestShoesComponent";
import AccesoriesComponent from "./WatchesComponent";
import FooterComponent from "./FooterComponent";
import { useState } from "react";

function Home() {
	const [opacity, setOpacity] = useState("");

	return (
		<>
			<div>
				<NavComponent />
				<BestShoesComponent />
				<AccesoriesComponent />
				<FooterComponent />
			</div>
		</>
	);
}
export default Home;
