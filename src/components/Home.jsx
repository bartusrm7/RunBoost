import NavComponent from "./NavComponent";
import BestShoesComponent from "./BestShoesComponent";
import AccesoriesComponent from "./WatchesComponent";

function Home() {
	return (
		<>
			<div>
				<NavComponent />
				<BestShoesComponent />
				<AccesoriesComponent />
			</div>
		</>
	);
}
export default Home;
