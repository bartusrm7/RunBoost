import NavComponent from "./NavComponent";
import BestShoesComponent from "./BestShoesComponent";
import AccesoriesComponent from "./WatchesComponent";
import FooterComponent from "./FooterComponent";

function Home() {
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
