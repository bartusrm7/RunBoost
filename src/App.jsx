import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavComponent from "./components/NavComponent";
import BestShoesPage from "./components/BestShoesPage";
import WatchesPage from "./components/WatchesPage";
import PopularBrands from "./components/PopularBrands";
import Training from "./components/Training";
import BestShoesComponent from "./components/BestShoesComponent";
import RunningShoesFinder from "./components/RunningShoesFinder";
import TrainingCalculator from "./components/TrainingCalculator";

function App() {
	return (
		<Router>
			<>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/best-shoes' element={<BestShoesPage />} />
					<Route path='/watches' element={<WatchesPage />} />
					<Route path='/popular-brands' element={<PopularBrands />} />
					<Route path='/training' element={<Training />} />
					<Route path='/running-shoes-finder' element={<RunningShoesFinder />} />
					<Route path='training-calculator' element={<TrainingCalculator />} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
